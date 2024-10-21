import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async (event) => {
        const { request } = event;
        const form = await request.formData();
        console.log(form.get("username"));
        console.log(form.get("password"));
        console.log("We got this from some other route");

        throw redirect(301, "/");
    },
};
