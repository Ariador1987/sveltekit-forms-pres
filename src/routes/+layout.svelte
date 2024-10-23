<script lang="ts">
	import type { LayoutData } from "./$types";
	import "../style.css";

	export let data: LayoutData;
</script>

<main class="min-h-screen grid place-items-center bg-gray-100 px-4 py-8">
	<slot />
</main>
