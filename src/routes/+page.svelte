<script lang="ts">
	import { ArrowRight, Leaf, Scale, Heart, Recycle } from 'lucide-svelte';
	import { products } from '$lib/data/products';
	import ProductCard from '$lib/components/ProductCard.svelte';

	const featuredProducts = products.slice(0, 3);
</script>

<svelte:head>
	<title>LifecycleProducts - Sustainable Product Assessments</title>
	<meta name="description" content="Make informed decisions about products with comprehensive lifecycle assessments covering environmental impact, health, and quality." />
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-slate-50 to-stone-50 dark:from-slate-900 dark:to-slate-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
		<div class="text-center">
			<h1 class="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
				Know Your Product's
				<span class="text-slate-700 dark:text-slate-300">True Impact</span>
			</h1>
			<p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
				Comprehensive lifecycle assessments that reveal the environmental footprint, health impacts,
				and true quality of everyday products. Make choices that matter.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/assessments"
					class="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-700 text-white font-medium rounded-lg transition-colors"
				>
					<span>View Assessments</span>
					<ArrowRight class="w-5 h-5 ml-2" />
				</a>
				<a
					href="/methodology"
					class="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-lg border border-slate-300 dark:border-slate-600 transition-colors"
				>
					Learn Our Methodology
				</a>
			</div>
		</div>
	</div>
</section>

<!-- What We Assess Section -->
<section class="py-16 bg-white dark:bg-slate-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">What We Assess</h2>
			<p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
				Every product is evaluated across multiple dimensions to give you a complete picture
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div class="text-center p-6 rounded-xl bg-slate-50 dark:bg-slate-800">
				<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 mb-4">
					<Leaf class="w-6 h-6" />
				</div>
				<h3 class="font-semibold mb-2">Lifecycle Impact</h3>
				<p class="text-sm text-slate-600 dark:text-slate-400">
					Carbon footprint, water usage, waste generation, land use, and pollution across the entire product lifecycle
				</p>
			</div>

			<div class="text-center p-6 rounded-xl bg-slate-50 dark:bg-slate-800">
				<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-900/30 text-stone-600 dark:text-stone-400 mb-4">
					<Heart class="w-6 h-6" />
				</div>
				<h3 class="font-semibold mb-2">Health Impacts</h3>
				<p class="text-sm text-slate-600 dark:text-slate-400">
					Safety assessment including chemical concerns, health benefits, and overall impact on wellbeing
				</p>
			</div>

			<div class="text-center p-6 rounded-xl bg-slate-50 dark:bg-slate-800">
				<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-900/30 text-stone-600 dark:text-stone-400 mb-4">
					<Scale class="w-6 h-6" />
				</div>
				<h3 class="font-semibold mb-2">Use & Quality</h3>
				<p class="text-sm text-slate-600 dark:text-slate-400">
					Durability, functionality, user satisfaction, and expected lifetime of the product
				</p>
			</div>

			<div class="text-center p-6 rounded-xl bg-slate-50 dark:bg-slate-800">
				<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-900/30 text-stone-600 dark:text-stone-400 mb-4">
					<Recycle class="w-6 h-6" />
				</div>
				<h3 class="font-semibold mb-2">Positive Impacts</h3>
				<p class="text-sm text-slate-600 dark:text-slate-400">
					Living wages, environmental improvements, recyclability, and repairability scores
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Featured Products Section -->
<section class="py-16 bg-slate-50 dark:bg-slate-800/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center mb-8">
			<h2 class="text-3xl font-bold">Featured Assessments</h2>
			<a
				href="/assessments"
				class="inline-flex items-center text-slate-700 dark:text-slate-300 hover:underline font-medium"
			>
				<span>View All</span>
				<ArrowRight class="w-4 h-4 ml-1" />
			</a>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each featuredProducts as product}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</section>
