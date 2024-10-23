<script lang="ts">
	import Form from "./../Form.svelte";
	import type { PageData } from "./$types";
	// IMPORT SIDE ACTION DATA PREVENT DUPLICATION
	import type { ActionData } from "../$types";
	import { page } from "$app/stores";

	export let data: PageData;
	export let form: ActionData;
</script>

<h1 class="my-4 text-center capitalize font-medium text-2xl">
	Superawesome content
</h1>

{#await data.streamed.todoDataPromise then todoArr}
	<div
		class="container p-6 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 mb-8"
	>
		{#each todoArr.slice(0, 6) as todo (todo.id)}
			{@const { title, completed } = todo}
			<article class="min-h-fit bg-white p-6 rounded shadow-lg capitalize">
				<h2>{title}</h2>
				<span class="font-semibold">Completed: {completed}</span>
			</article>
		{/each}
	</div>
{/await}

{#if !data?.user}
	<Form action="/?/login&redirectTo={$page.url.pathname}" {form}
		>re-using actionType from login</Form
	>
	<!-- <form
		class="container p-6 w-full bg-white shadow-lg rounded-md"
		action="/?/login&redirectTo={$page.url.pathname}"
		method="POST"
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
	</form> -->
{:else}
	<h2 class="text-center text-2xl p4">Hello {data?.user.username}</h2>
{/if}
