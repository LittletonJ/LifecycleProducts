<script lang="ts">
	import { ArrowLeft, Calculator, DollarSign, Clock, TrendingDown, CalendarDays } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Lifetime Value Analysis - Methodology - LifecycleProducts</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<a href="/methodology" class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline mb-6">
		<ArrowLeft class="w-4 h-4 mr-1" />
		Back to Methodology
	</a>

	<div class="flex items-center space-x-4 mb-8">
		<div class="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
			<Calculator class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
		</div>
		<h1 class="text-3xl font-bold">Lifetime Value Analysis</h1>
	</div>

	<div class="prose dark:prose-invert max-w-none mb-8">
		<p>
			We calculate the true economic value of each product over its lifetime, revealing that durable products often cost less in the long run despite higher upfront prices.
		</p>
	</div>

	<div class="space-y-6">
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<DollarSign class="w-5 h-5 text-emerald-600" />
				<h2 class="text-lg font-bold">Purchase Price ($)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				The typical retail cost of the product at time of assessment. We use average market prices from reputable retailers to ensure accuracy.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<CalendarDays class="w-5 h-5 text-blue-600" />
				<h2 class="text-lg font-bold">Uses Per Year</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Estimated number of times the product is used annually based on typical usage patterns. For example, a toothbrush = 730 uses/year (2x daily), a water bottle = 365 uses/year (daily), clothing = 52 uses/year (weekly wear).
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Clock class="w-5 h-5 text-purple-600" />
				<h2 class="text-lg font-bold">Lifetime Uses</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Total uses over the product's lifespan, calculated as: <strong>Uses Per Year × Expected Lifetime (years)</strong>. This reveals the true utility you get from your purchase.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<TrendingDown class="w-5 h-5 text-amber-600" />
				<h2 class="text-lg font-bold">Cost Per Use</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				The amortized cost for each use, calculated as: <strong>Purchase Price ÷ Lifetime Uses</strong>. This reveals the true value of durable products. A cast iron skillet at $50 with 15,600 lifetime uses costs only $0.003 per use.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Calculator class="w-5 h-5 text-purple-600" />
				<h2 class="text-lg font-bold">Cost Per Year</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Annual cost of ownership, calculated as: <strong>Purchase Price ÷ Expected Lifetime (years)</strong>. Useful for budgeting and comparing alternatives. That same $50 skillet lasting 100 years costs only $0.50 per year.
			</p>
		</div>
	</div>

	<div class="mt-8 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
		<h3 class="font-bold text-lg mb-3">Why This Matters</h3>
		<p class="text-slate-600 dark:text-slate-400">
			A $50 cast iron skillet that lasts 100 years costs only $0.50/year and $0.003 per use, while a $10 non-stick pan that lasts 2 years costs $5/year and $0.03 per use. The "expensive" option is actually <strong>10x cheaper</strong> over time.
		</p>
	</div>
</div>
