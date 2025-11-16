<script lang="ts">
	import { ArrowLeft, PieChart, Package, Factory, Users, Truck, Megaphone, Store, TrendingUp } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Cost Breakdown - Methodology - LifecycleProducts</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<a href="/methodology" class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline mb-6">
		<ArrowLeft class="w-4 h-4 mr-1" />
		Back to Methodology
	</a>

	<div class="flex items-center space-x-4 mb-8">
		<div class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
			<PieChart class="w-6 h-6 text-purple-600 dark:text-purple-400" />
		</div>
		<h1 class="text-3xl font-bold">Cost Breakdown Estimate</h1>
	</div>

	<div class="prose dark:prose-invert max-w-none mb-8">
		<p>
			We estimate how the purchase price is distributed across different cost factors to provide transparency into product economics. This helps you understand where your money goes and identify ethically-sourced products.
		</p>
	</div>

	<div class="space-y-6">
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Package class="w-5 h-5 text-emerald-600" />
				<h2 class="text-lg font-bold">Raw Materials (%)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Cost of sourcing and procuring base materials (e.g., bamboo, steel, cotton fiber). Higher percentages often indicate quality materials and sustainable sourcing.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Factory class="w-5 h-5 text-blue-600" />
				<h2 class="text-lg font-bold">Manufacturing (%)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Production costs including machinery, energy, and facility overhead. This covers the actual transformation of materials into finished products.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Users class="w-5 h-5 text-amber-600" />
				<h2 class="text-lg font-bold">Labor (%)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Wages paid to workers throughout the production process. <strong>Higher percentages often indicate fair trade or domestic production.</strong> A product with 30% labor costs likely pays better wages than one with 8%.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Truck class="w-5 h-5 text-purple-600" />
				<h2 class="text-lg font-bold">Transportation (%)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Shipping and logistics costs from manufacturing to retail, including packaging. Lower percentages often indicate local production, which also means lower carbon emissions.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Megaphone class="w-5 h-5 text-rose-600" />
				<h2 class="text-lg font-bold">Marketing (%)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Advertising, branding, and promotional expenses. Lower percentages suggest word-of-mouth or values-driven sales rather than heavy advertising spending.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Store class="w-5 h-5 text-orange-600" />
				<h2 class="text-lg font-bold">Retail (%)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Retailer margins including store operations, staff, and distribution network costs. Direct-to-consumer brands typically have lower retail margins.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<TrendingUp class="w-5 h-5 text-slate-600" />
				<h2 class="text-lg font-bold">Profit (%)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Manufacturer and brand profit margins. Sustainable brands often have modest margins (4-10%) focused on long-term viability rather than maximizing short-term profits.
			</p>
		</div>
	</div>

	<div class="mt-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
		<h3 class="font-bold text-lg mb-3">Data Sources</h3>
		<p class="text-slate-600 dark:text-slate-400">
			Cost breakdowns are estimated using industry reports, company disclosures (when available), academic research on product economics, and supply chain analysis. These are approximations and may vary by manufacturer, region, and market conditions.
		</p>
	</div>
</div>
