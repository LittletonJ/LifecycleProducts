<script lang="ts">
	import { products, categories } from '$lib/data/products';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { Search, Filter } from 'lucide-svelte';

	let searchQuery = $state('');
	let selectedCategory = $state('all');

	const filteredProducts = $derived(
		products.filter(product => {
			const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product.description.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
			return matchesSearch && matchesCategory;
		})
	);
</script>

<svelte:head>
	<title>Product Assessments - LifecycleProducts</title>
	<meta name="description" content="Browse comprehensive lifecycle assessments for sustainable products" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="mb-8">
		<h1 class="text-3xl font-bold mb-4">Product Assessments</h1>
		<p class="text-slate-600 dark:text-slate-400">
			Explore detailed lifecycle assessments for products across various categories
		</p>
	</div>

	<!-- Filters -->
	<div class="flex flex-col sm:flex-row gap-4 mb-8">
		<div class="relative flex-1">
			<Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Search products..."
				class="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
			/>
		</div>
		<div class="relative">
			<Filter class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
			<select
				bind:value={selectedCategory}
				class="pl-10 pr-8 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none appearance-none cursor-pointer"
			>
				<option value="all">All Categories</option>
				{#each categories as category}
					<option value={category}>{category}</option>
				{/each}
			</select>
		</div>
	</div>

	<!-- Results -->
	{#if filteredProducts.length > 0}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each filteredProducts as product (product.id)}
				<ProductCard {product} />
			{/each}
		</div>
	{:else}
		<div class="text-center py-12">
			<p class="text-slate-500 dark:text-slate-400">
				No products found matching your criteria. Try adjusting your search or filters.
			</p>
		</div>
	{/if}
</div>
