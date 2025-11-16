<script lang="ts">
	import { ArrowLeft, Wrench, Shield, Cog, ThumbsUp, Clock } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Use & Quality - Methodology - LifecycleProducts</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<a href="/methodology" class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline mb-6">
		<ArrowLeft class="w-4 h-4 mr-1" />
		Back to Methodology
	</a>

	<div class="flex items-center space-x-4 mb-8">
		<div class="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
			<Wrench class="w-6 h-6 text-amber-600 dark:text-amber-400" />
		</div>
		<h1 class="text-3xl font-bold">Use & Quality</h1>
	</div>

	<div class="prose dark:prose-invert max-w-none mb-8">
		<p>
			We assess the practical aspects of each product to ensure you're getting real value. A sustainable product is only truly sustainable if it performs well and lasts.
		</p>
	</div>

	<div class="space-y-6">
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Shield class="w-5 h-5 text-blue-600" />
				<h2 class="text-lg font-bold">Durability (1-10)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				How well the product withstands regular use over time. We consider material strength, build quality, resistance to wear and tear, and performance under stress. Products that maintain their integrity through years of use score higher.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Cog class="w-5 h-5 text-slate-600" />
				<h2 class="text-lg font-bold">Functionality (1-10)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				How effectively the product performs its intended purpose. Does it do what it's designed to do well? We evaluate core performance, ease of use, feature completeness, and whether sustainable choices compromise functionality.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<ThumbsUp class="w-5 h-5 text-emerald-600" />
				<h2 class="text-lg font-bold">User Satisfaction (1-10)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Aggregated user feedback and reviews on overall satisfaction. This metric incorporates real-world experiences from users, including comfort, aesthetics, value perception, and whether the product meets expectations over time.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Clock class="w-5 h-5 text-purple-600" />
				<h2 class="text-lg font-bold">Expected Lifetime</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Estimated useful lifespan under normal use conditions. This is based on manufacturer specifications, user reports, material science, and industry standards. Products with longer lifetimes spread their environmental impact over more uses, making them more sustainable per use.
			</p>
		</div>
	</div>
</div>
