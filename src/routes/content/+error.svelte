<script lang="ts">
	import { page } from "$app/stores";
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
<h2 class="text-2xl font-bold">Content Error page</h2>
