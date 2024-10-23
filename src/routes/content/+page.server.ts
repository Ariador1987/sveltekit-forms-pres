import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

type Todo = {
	userId: string;
	id: 1;
	title: string;
	completed: boolean;
};

export const load = (async ({ fetch }) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
	if (!res.ok) {
		// throw new Error("Bad error");
		throw error(
			400,
			res?.statusText ||
				"Something went wrong or right depending on what u wanna do"
		);
	}

	const todoDataPromise: Promise<Todo> = res.json();
	console.log(todoDataPromise, " todoData");

	return {
		streamed: {
			todoDataPromise,
		},
	};
}) satisfies PageServerLoad;
