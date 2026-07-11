<script lang="ts">
	import { page } from '$app/stores';
	import { Menu, X } from 'lucide-svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let isMenuOpen = $state(false);

	const navItems = [
		{ href: '/assessments', label: 'Assessments' },
		{ href: '/methodology', label: 'Methodology' },
		{ href: '/store', label: 'Store' }
	];

	function isActive(href: string): boolean {
		return $page.url.pathname === href || $page.url.pathname.startsWith(href + '/');
	}
</script>

<nav class="hairline sticky top-0 z-50 border-b bg-stone-50/90 backdrop-blur-md dark:bg-[#171412]/90">
	<div class="mx-auto max-w-5xl px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="flex items-center gap-2.5">
				<span class="inline-block h-2 w-2 rounded-full bg-moss-500"></span>
				<span class="font-display text-lg text-stone-800 dark:text-stone-100">Lifecycle</span>
			</a>

			<!-- Desktop navigation -->
			<div class="hidden items-center gap-8 md:flex">
				{#each navItems as item}
					<a
						href={item.href}
						class="text-sm transition-colors {isActive(item.href)
							? 'text-stone-900 dark:text-stone-100'
							: 'text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200'}"
					>
						{item.label}
					</a>
				{/each}
				<ThemeToggle />
			</div>

			<!-- Mobile menu button -->
			<div class="flex items-center gap-2 md:hidden">
				<ThemeToggle />
				<button
					onclick={() => (isMenuOpen = !isMenuOpen)}
					class="rounded-lg p-2 text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
					aria-label="Toggle menu"
				>
					{#if isMenuOpen}
						<X class="h-5 w-5" />
					{:else}
						<Menu class="h-5 w-5" />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile navigation -->
	{#if isMenuOpen}
		<div class="hairline border-t bg-stone-50 md:hidden dark:bg-[#171412]">
			<div class="space-y-1 px-6 py-3">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={() => (isMenuOpen = false)}
						class="block rounded-md px-3 py-2 text-sm {isActive(item.href)
							? 'text-stone-900 dark:text-stone-100'
							: 'text-stone-500 dark:text-stone-400'}"
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
