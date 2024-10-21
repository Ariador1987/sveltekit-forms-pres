import { fail, type Actions } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";

type ValidationFailiure = {
    usernameMissing: boolean;
    passwordMissing: boolean;
};

export const actions: Actions = {
    login: async (event) => {
        const { request, cookies, locals } = event;
        const form = await request.formData();

        console.log(form.get("username"));
        console.log(form.get("password"));

        const username = form.get("username");
        const password = form.get("password");

        const validationResult = validateUsernameAndPassword(
            username,
            password,
        );

        if (
            validationResult.usernameMissing ||
            validationResult.passwordMissing
        ) {
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

        return {
            success: true,
        };
    },
};

function validateUsernameAndPassword(
    username: FormDataEntryValue | null,
    password: FormDataEntryValue | null,
): ValidationFailiure {
    return {
        usernameMissing: !username,
        passwordMissing: !password,
    };
}
