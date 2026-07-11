<script lang="ts">
	import { products, categories } from '$lib/data/products';
	import type { VerdictTier } from '$lib/data/products';
	import { verdictLabels } from '$lib/data/products';
	import ProductCard from '$lib/components/ProductCard.svelte';

	let searchQuery = $state('');
	let selectedCategory = $state('all');
	let selectedVerdict = $state<'all' | VerdictTier>('all');

	const verdictFilters: Array<{ value: 'all' | VerdictTier; label: string }> = [
		{ value: 'all', label: 'All verdicts' },
		{ value: 'genuine', label: verdictLabels.genuine },
		{ value: 'conditional', label: verdictLabels.conditional },
		{ value: 'marginal', label: verdictLabels.marginal }
	];

	const filteredProducts = $derived(
		products.filter((product) => {
			const q = searchQuery.toLowerCase();
			const matchesSearch =
				product.name.toLowerCase().includes(q) || product.description.toLowerCase().includes(q);
			const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
			const matchesVerdict =
				selectedVerdict === 'all' || product.assessment.verdict.tier === selectedVerdict;
			return matchesSearch && matchesCategory && matchesVerdict;
		})
	);
</script>

<svelte:head>
	<title>Assessments — Lifecycle</title>
	<meta name="description" content="Honest lifecycle assessments: each product compared against what it actually replaces." />
</svelte:head>

<div class="mx-auto max-w-5xl px-6 py-16 lg:px-8">
	<header class="mb-12 max-w-2xl">
		<p class="eyebrow mb-4">Assessments</p>
		<h1 class="font-display mb-4 text-4xl text-stone-900 dark:text-stone-100">
			Every product, compared against reality
		</h1>
		<p class="prose-quiet">
			Not against the worst-case alternative the marketing chose — against what you would
			actually be doing instead.
		</p>
	</header>

	<!-- Filters -->
	<div class="mb-10 space-y-4">
		<div class="flex flex-wrap gap-2">
			{#each verdictFilters as filter}
				<button
					onclick={() => (selectedVerdict = filter.value)}
					class="rounded-full border px-4 py-1.5 text-xs transition-colors {selectedVerdict === filter.value
						? 'border-stone-800 bg-stone-900 text-stone-50 dark:border-stone-200 dark:bg-stone-100 dark:text-stone-900'
						: 'border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-800 dark:border-stone-700 dark:text-stone-400 dark:hover:border-stone-500 dark:hover:text-stone-200'}"
				>
					{filter.label}
				</button>
			{/each}
		</div>
		<div class="flex flex-col gap-3 sm:flex-row">
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Search products…"
				class="w-full flex-1 rounded-full border border-stone-200 bg-white px-5 py-2 text-sm text-stone-800 outline-none transition-colors placeholder:text-stone-400 focus:border-stone-400 sm:max-w-xs dark:border-stone-700 dark:bg-[#1e1b18] dark:text-stone-200 dark:focus:border-stone-500"
			/>
			<select
				bind:value={selectedCategory}
				class="cursor-pointer rounded-full border border-stone-200 bg-white px-5 py-2 text-sm text-stone-600 outline-none transition-colors focus:border-stone-400 dark:border-stone-700 dark:bg-[#1e1b18] dark:text-stone-300 dark:focus:border-stone-500"
			>
				<option value="all">All categories</option>
				{#each categories as category}
					<option value={category}>{category}</option>
				{/each}
			</select>
		</div>
	</div>

	<!-- Results -->
	{#if filteredProducts.length > 0}
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProducts as product (product.id)}
				<ProductCard {product} />
			{/each}
		</div>
	{:else}
		<div class="py-20 text-center">
			<p class="text-sm text-stone-500 dark:text-stone-400">
				Nothing matches those filters. Try broadening your search.
			</p>
		</div>
	{/if}
</div>
