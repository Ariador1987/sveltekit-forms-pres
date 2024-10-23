<script lang="ts">
	import type { ActionData, PageData } from "./$types";
	import Form from "./Form.svelte";
	import FormCustomized from "./FormCustomized.svelte";

	export let form: ActionData;
	export let data: PageData;
</script>

<section
	class="m-auto max-w-2xl w-full shadow-md flex justify-between flex-col items-center h-fit bg-white p-4"
>
	<div class="text-center">
		<h1 class="text-3xl">Welcome to Forms presentation</h1>
		<p>
			Visit the <a
				href="https://github.com/Ariador1987/sveltekit-forms-pres"
				target="_blank"
				class="link text-blue-400">Github link</a
			> to clone the repo
		</p>
		{#if form?.success || data?.user?.username}
			<h2 class="text-primary text-xl text-center mt-6">
				Welcome {data?.user?.username}!
			</h2>
		{/if}
	</div>

	{#if !data?.user}
		<!-- <Form action="?/login" {form}>Register</Form> -->
		<!-- <Form action="./some/other/route">Register</Form> -->
		<FormCustomized action="?/login" {form}
			>Register Form Customized</FormCustomized
		>
	{:else}
		<form
			class="p-6 w-full bg-white shadow-lg rounded-md"
			action="?/logout"
			method="POST"
		>
			<button class="btn btn-block btn-primary uppercase text-white text-lg"
				>Logout</button
			>
		</form>
	{/if}
</section>
