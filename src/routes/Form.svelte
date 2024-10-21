<script lang="ts">
    import type { ActionData } from "./$types";

    export let action: string;
    export let form: ActionData;
</script>

<form
    class="p-6 w-full bg-white shadow-lg rounded-md"
    {action}
    method="POST"
>
    <h2 class="text-2xl font-bold font-sans">
        <slot>Register</slot>
    </h2>
    <label
        class="form-control min-h-20 w-full"
        for="username"
    >
        <div class="label">
            <span class="label-text">What is your name?</span>
        </div>
        <input
            name="username"
            id="username"
            type="text"
            placeholder="Type username here"
            class="input input-bordered w-full bg-white focus:ring-2"
        />
        <div class="label">
            <span class="label-text-alt">Bottom Left label</span>
        </div>
    </label>
    <label
        class="form-control min-h-32 w-full"
        for="password"
    >
        <div class="label">
            <span class="label-text">What is your name?</span>
        </div>
        <input
            name="password"
            id="password"
            type="password"
            placeholder="Type password here"
            class="input input-bordered w-full bg-white focus:ring-2"
        />
        <div class="label">
            <span class="label-text-alt">Bottom Left label</span>
        </div>
        <button class="btn btn-primary mt-6 uppercase text-white text-lg"
            >Submit</button
        >
    </label>
</form>
