<script lang="ts">
	export let isLoading = false;
</script>

<button
	on:click
	disabled={isLoading}
	class="button-paint {isLoading ? 'cursor-wait' : 'cursor-pointer'}"
	title="Prompt and Paint"
>
	{#if isLoading}
		<span>painting... </span>{:else}
		<span
			class="rounded-sm h-4 w-4 flex justify-center items-center border-2 border-dashed border-violet-700 mr-2"
		>
			+
		</span>
		<span>Prompt + Paint</span>
	{/if}
</button>

<style lang="postcss" scoped>
	/* .button {
		@apply disabled:opacity-50 dark:bg-white dark:text-black bg-black text-white rounded-2xl text-xs shadow-sm focus:outline-none focus:border-gray-400;
	} */
	.button-paint {
		@apply text-xs md:text-sm font-mono bg-blue-100 text-blue-900 min-w-[25ch] flex justify-center items-center disabled:opacity-50 rounded-xl px-3 py-1 shadow-sm focus:outline-none focus:border-gray-400;
	}
</style>
