import { error, fail, redirect, type Actions } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
	console.log(locals, " load");

	return {
		user: locals.user,
	};
}) satisfies PageServerLoad;

type ValidationFailiure = {
	usernameMissing: boolean;
	passwordMissing: boolean;
};

export const actions: Actions = {
	login: async (event) => {
		const { request, cookies, locals, url } = event;
		const form = await request.formData();

		console.log(form.get("username"));
		console.log(form.get("password"));
		console.log("run from server ts");

		const username = form.get("username");
		const password = form.get("password");

		// For Demoing CustomizedForm how the hooks work
		await new Promise<void>((resolve) => {
			return setTimeout(() => resolve(), 3000);
		});

		// For Demoing CustomizedForm how the error works
		// throw error(418, " napad Nikole Kabooma");

		const validationResult = validateUsernameAndPassword(username, password);

		if (validationResult.usernameMissing || validationResult.passwordMissing) {
			return fail(400, validationResult);
		}

		if (username && password) {
			locals.user = {
				username: username.toString(),
				password: password.toString(),
			};
			cookies.set("token_user", "true", {
				path: "/",
				httpOnly: true,
				secure: true,
			});
		}

		if (url.searchParams.get("redirectTo")) {
			console.log(url.searchParams.get("redirectTo"), " redirection");
			throw redirect(303, url.searchParams.get("redirectTo") as string);
		}

		return {
			success: true,
		};
	},

	logout: async (event) => {
		const { cookies, locals } = event;

		cookies.delete("token_user", {
			path: "/",
			httpOnly: true,
			secure: true,
		});

		locals.user = null;

		throw redirect(303, "/");
	},
};

function validateUsernameAndPassword(
	username: FormDataEntryValue | null,
	password: FormDataEntryValue | null
): ValidationFailiure {
	return {
		usernameMissing: !username,
		passwordMissing: !password,
	};
}
