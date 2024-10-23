<script lang="ts">
	import { enhance } from "$app/forms";
	import type { ActionData } from "./$types";
	// import { SubmitFunction } from "@sveltejs/kit";

	export let action: string;
	export let form: ActionData | undefined;
</script>

<form
	class="container p-4 w-full bg-white shadow-lg rounded-md"
	{action}
	method="POST"
	use:enhance
>
	<h2 class="text-2xl font-bold font-sans">
		<slot>Register</slot>
	</h2>
	<label class="form-control min-h-20 w-full" for="username">
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
		{#if form?.usernameMissing}
			<div class="label">
				<span class="label-text-alt text-error"
					>Please enter a valid username</span
				>
			</div>
		{/if}
	</label>
	<label class="form-control min-h-20 w-full mb-12" for="password">
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
		{#if form?.passwordMissing}
			<div class="label">
				<span class="label-text-alt text-error"
					>Please enter a valid password</span
				>
			</div>
		{/if}
	</label>
	<button class="btn btn-block btn-primary uppercase text-white text-lg"
		>Submit</button
	>
</form>
