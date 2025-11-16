<script lang="ts">
	import { page } from '$app/stores';
	import { Menu, X } from 'lucide-svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let isMenuOpen = $state(false);

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/assessments', label: 'Assessments' },
		{ href: '/methodology', label: 'Methodology' },
		{ href: '/store', label: 'Store' }
	];
</script>

<nav class="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex items-center">
				<a href="/" class="text-xl font-bold text-emerald-600 dark:text-emerald-400">
					LifecycleProducts
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navItems as item}
					<a
						href={item.href}
						class="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium {$page.url.pathname === item.href || ($page.url.pathname.startsWith(item.href) && item.href !== '/') ? 'text-emerald-600 dark:text-emerald-400' : ''}"
					>
						{item.label}
					</a>
				{/each}
				<ThemeToggle />
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center space-x-2">
				<ThemeToggle />
				<button
					onclick={() => isMenuOpen = !isMenuOpen}
					class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
					aria-label="Toggle menu"
				>
					{#if isMenuOpen}
						<X class="w-6 h-6" />
					{:else}
						<Menu class="w-6 h-6" />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if isMenuOpen}
		<div class="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
			<div class="px-4 py-2 space-y-1">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={() => isMenuOpen = false}
						class="block px-3 py-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors {$page.url.pathname === item.href || ($page.url.pathname.startsWith(item.href) && item.href !== '/') ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400' : ''}"
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
