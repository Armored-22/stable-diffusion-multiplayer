<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { useMyPresence } from '$lib/liveblocks';
	import { Status } from '$lib/types';

	const dispatch = createEventDispatcher();

	export let initPrompt = '';

	let prompt: string;
	let inputEl: HTMLInputElement;
	let boxEl: HTMLDivElement;
	const myPresence = useMyPresence();

	const onKeyup = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			dispatch('showModal', { showModal: false });
		}
	};

	onMount(() => {
		inputEl.focus();
		prompt = initPrompt;
		window.addEventListener('keyup', onKeyup);
		window.addEventListener('pointerdown', cancelHandler, true);

		return () => {
			window.removeEventListener('keyup', onKeyup);
			window.removeEventListener('pointerdown', cancelHandler, true);
		};
	});
	let timer: NodeJS.Timeout;
	function debouce(newPrompt: string) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			prompt = newPrompt;
			myPresence.update({
				currentPrompt: prompt,
				status: Status.prompting
			});
		}, 100);
	}
	function onPrompt(event: Event) {
		event.stopPropagation();
		event.preventDefault();
		event.stopImmediatePropagation();

		if (prompt.trim() !== '') {
			dispatch('paint');
		}
	}
	function onInput(event: Event) {
		const target = event.target as HTMLInputElement;
		debouce(target.value);
	}
	function cancelHandler(event: Event) {
		if (boxEl.contains(event.target as Node)) {
			return;
		}
		myPresence.update({
			status: Status.ready
		});
		dispatch('showModal', { showModal: false });
	}
</script>

<form
	class="fixed w-screen top-0 left-0 bottom-0 right-0 h-screen z-50 flex items-center justify-center bg-black bg-opacity-80"
	on:submit={onPrompt}
>
	<div
		class="flex bg-white overflow-hidden rounded-2xl w-full max-w-lg 2xl:max-w-xl"
		bind:this={boxEl}
	>
		<input
			value={prompt}
			bind:this={inputEl}
			on:click|stopPropagation
			on:input={onInput}
			class="flex-1 outline-none ring-0 border-none text-xl 2xl:text-2xl py-3 px-3"
			placeholder="Prompt and <Negative Prompt> between < >"
			title="Input prompt to generate image and  negative prompt inside brackets <NEGATIVE PROMPT>"
			type="text"
			name="prompt"
		/>
		<button
			class="font-semibold bg-blue-700 text-white border-l-2 px-5 text-xl 2xl:text-2xl spacing tracking-wide hover:saturate-150"
			type="submit"
			title="Input prompt to generate image and  negative prompt inside brackets <NEGATIVE PROMPT>"
			><span class="mr-2">????</span> Paint
		</button>
	</div>
</form>
