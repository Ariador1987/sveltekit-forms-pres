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

    <form
        class="p-6 w-full bg-white shadow-lg rounded-md"
        action="?/login"
        method="POST"
    >
        <h2 class="text-2xl font-bold font-sans">Register</h2>
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
</section>
