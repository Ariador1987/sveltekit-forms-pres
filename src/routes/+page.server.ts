import type { Actions } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";

export const actions: Actions = {
    login: async (event) => {
        const { request } = event;
        const form = await request.formData();

        console.log(form.get("username"));
        console.log(form.get("password"));

        return {};
    },
};
