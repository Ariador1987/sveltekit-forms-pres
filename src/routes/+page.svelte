<script lang="ts">
	import type { ActionData, PageData } from "./$types";
	import Form from "./Form.svelte";

	export let form: ActionData;
	export let data: PageData;
</script>

<section
	class="m-auto max-w-2xl w-full shadow-md flex justify-between flex-col items-center h-fit bg-white p-12"
>
	<div>
		<h1 class="text-3xl">Welcome to SvelteKit</h1>
		<p>
			Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
		</p>
		{#if form?.success || data?.user?.username}
			<h2 class="text-primary text-xl text-center mt-6">
				Welcome {data?.user?.username}!
			</h2>
		{/if}
	</div>

	{#if !data?.user}
		<Form action="?/login" {form}>Register</Form>
		<!-- <Form action="./some/other/route">Register</Form> -->
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
