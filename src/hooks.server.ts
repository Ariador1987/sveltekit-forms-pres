import type { User } from "./types";

export async function handle({ event, resolve }) {
	// if route matches "/banana" return banana
	console.log(event.cookies, " RUN FROM HOOKS");
	const userData = event.cookies.get("token_user");
	console.log("user from hook ", userData);
	if (userData) {
		event.locals.user = {
			username: "Mate",
			password: "Mate",
		};
	}
	// otherwise use the default behavior
	return resolve(event);
}

export function handleError({ event, error }) {
	console.log("HANDLE ERROR HOOK RAN");
	return {
		message: "everything is fine",
	};
}
