<script lang="ts">
	import Move from '$lib/Icons/Move.svelte';
	export let isActive = false;
	export let isLoading = false;
	export let className = '';
</script>

<button
	on:click
	disabled={isLoading}
	class="{className} shadow-lg bg-white rounded-full disabled:opacity-50 {isActive
		? 'text-blue-700'
		: 'text-gray-800'}"
	title="Drag to Move"
>
	<Move />
</button>

<style lang="postcss" scoped>
</style>
