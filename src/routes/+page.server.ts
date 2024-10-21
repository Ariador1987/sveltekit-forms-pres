import { fail, type Actions } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";

type ValidationFailiure = {
    usernameMissing: boolean;
    passwordMissing: boolean;
};

const defaultFailiure: ValidationFailiure = {
    usernameMissing: false,
    passwordMissing: false,
};

export const actions: Actions = {
    login: async (event) => {
        const { request } = event;
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
