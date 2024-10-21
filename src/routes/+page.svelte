<script lang="ts">
    import type { ActionData } from "./$types";
    import Form from "./Form.svelte";

    export let form: ActionData;
</script>

<section
    class="m-auto max-w-2xl w-full shadow-md flex justify-between flex-col items-center h-fit bg-white p-12"
>
    <div>
        <h1 class="text-3xl">Welcome to SvelteKit</h1>
        <p>
            Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
            documentation
        </p>
    </div>

    <Form
        action="?/login"
        {form}>Register</Form
    >
    <!-- <Form action="./some/other/route">Register</Form> -->
</section>
