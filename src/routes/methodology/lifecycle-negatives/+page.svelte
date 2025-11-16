<script lang="ts">
	import { ArrowLeft, Factory, Leaf, Droplets, Trash2, Mountain, Wind } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Lifecycle Negatives - Methodology - LifecycleProducts</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<a href="/methodology" class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline mb-6">
		<ArrowLeft class="w-4 h-4 mr-1" />
		Back to Methodology
	</a>

	<div class="flex items-center space-x-4 mb-8">
		<div class="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
			<Factory class="w-6 h-6 text-red-600 dark:text-red-400" />
		</div>
		<h1 class="text-3xl font-bold">Lifecycle Negatives</h1>
	</div>

	<div class="prose dark:prose-invert max-w-none mb-8">
		<p>
			We quantify the environmental costs of each product across five key metrics, measuring the total impact from raw material extraction through manufacturing, use, and disposal.
		</p>
	</div>

	<div class="space-y-6">
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Leaf class="w-5 h-5 text-emerald-600" />
				<h2 class="text-lg font-bold">Carbon Footprint (kg CO₂e)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Total greenhouse gas emissions from raw material extraction, manufacturing, transportation, use phase, and end-of-life disposal. Measured in kilograms of carbon dioxide equivalent (CO₂e), which accounts for all greenhouse gases weighted by their global warming potential.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Droplets class="w-5 h-5 text-blue-600" />
				<h2 class="text-lg font-bold">Water Usage (liters)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Total water consumed throughout the product's lifecycle, including agricultural irrigation for raw materials, industrial processing water, and any water used during product use. This metric helps identify water-intensive products in regions facing water scarcity.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Trash2 class="w-5 h-5 text-orange-600" />
				<h2 class="text-lg font-bold">Waste Generated (kg)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Total waste produced during manufacturing, packaging, and end-of-life, including both recyclable and non-recyclable materials. This includes production scrap, packaging waste, and the product itself at disposal.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Mountain class="w-5 h-5 text-amber-600" />
				<h2 class="text-lg font-bold">Land Use (m²)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Total land area required for raw material production and manufacturing facilities. This includes agricultural land for natural materials, mining areas for metals, and factory footprints. Important for understanding habitat impact and land competition.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Wind class="w-5 h-5 text-slate-600" />
				<h2 class="text-lg font-bold">Pollution Score (1-10)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Assessment of air, water, and soil pollution generated throughout the lifecycle, with 10 being the most polluting. This includes toxic emissions, chemical runoff, particulate matter, and any hazardous byproducts from production processes.
			</p>
		</div>
	</div>
</div>
