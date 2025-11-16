<script lang="ts">
	import { Sun, Moon } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let isDark = $state(false);

	onMount(() => {
		isDark = document.documentElement.classList.contains('dark') ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
		updateTheme();
	});

	function toggleTheme() {
		isDark = !isDark;
		updateTheme();
	}

	function updateTheme() {
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<button
	onclick={toggleTheme}
	class="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
	aria-label="Toggle theme"
>
	{#if isDark}
		<Sun class="w-5 h-5" />
	{:else}
		<Moon class="w-5 h-5" />
	{/if}
</button>
