<script lang="ts">
	import { enhance, applyAction } from "$app/forms";
	import type { ActionData } from "./$types";
	import type { SubmitFunction } from "@sveltejs/kit";

	export let action: string;
	export let form: ActionData | undefined;

	let isSubmitting = false;

	let errorMessage = "";

	const handleSubmit: SubmitFunction = (input) => {
		/* Trigged 'onSubmitting' */
		const { action, formData, formElement, cancel, controller, submitter } =
			input;
		console.log(action, " action");
		console.log(formData, " formData");
		console.log(formElement, " formElement");
		console.log(controller, " controller");
		console.log(submitter, " submitter");

		/* if we want to raise a spinner while we're **onSubmitting** we do it here */
		isSubmitting = true;

		return async ({ result, update }) => {
			/* Trigged 'onSubmittied' */
			/* Update => Triggers the default behaviour we get on the type without attaching a handler function to use:enhance */
			/* update” is used to apply the default enhancement behavior, so it does invalidates all load functions. */
			if (result.type === "success" || result.type === "failure") {
				isSubmitting = false;
				update();
			}

			if (result.type === "redirect") {
				// Goto will be called
				update();
			}

			if (result.type === "error") {
				isSubmitting = false;
				setErrorMessage();
				// Performing Default Behaviour of that specific type
				// applyAction(result);
			}
		};
	};

	const setErrorMessage = (errMsg = "Otišlo kabooom") => {
		errorMessage = errMsg;
	};
	// $: console.log(isSubmitting, " IS SUB");
	// $: console.log(errorMessage, " IS SUB");
</script>

{#if isSubmitting}
	<h2 class="text-xl text-semibold text-center">We are currently submitting</h2>
{:else if errorMessage}
	<h3>Something went terribly wrong {errorMessage}</h3>
{:else}
	<form
		class="container p-4 w-full bg-white shadow-lg rounded-md"
		{action}
		method="POST"
		use:enhance={handleSubmit}
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
{/if}
