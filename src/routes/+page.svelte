<script lang="ts">
    import Form from "./Form.svelte";
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

    <!-- <Form action="?/login">Register</Form> -->
    <Form action="./some/other/route">Register</Form>
</section>
