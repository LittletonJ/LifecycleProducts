<script lang="ts">
	import { Sun, Moon } from 'lucide-svelte';
	import { browser } from '$app/environment';

	let isDark = $state(false);

	// Initialize on client side
	$effect(() => {
		if (browser) {
			// Check localStorage first, then system preference
			const savedTheme = localStorage.getItem('theme');
			if (savedTheme) {
				isDark = savedTheme === 'dark';
			} else {
				isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			}
			applyTheme();
		}
	});

	function toggleTheme() {
		isDark = !isDark;
		applyTheme();
	}

	function applyTheme() {
		if (!browser) return;

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
	type="button"
>
	{#if isDark}
		<Sun class="w-5 h-5" />
	{:else}
		<Moon class="w-5 h-5" />
	{/if}
</button>
