<script lang="ts">
	import { ArrowLeft, Factory, Leaf, Droplets, Trash2, Mountain, Wind, BookOpen } from 'lucide-svelte';
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
			We quantify the environmental costs of each product across five key metrics, measuring the total impact from raw material extraction through manufacturing, use, and disposal. These metrics are prioritized based on global research about which environmental factors create the most significant harm.
		</p>
	</div>

	<div class="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800 mb-8">
		<h2 class="text-lg font-bold text-red-900 dark:text-red-300 mb-4">What Environmental Impacts Matter Most</h2>
		<p class="text-sm text-red-800 dark:text-red-200 mb-4">
			We prioritize measurement and assessment of environmental impacts that create the greatest global burden and are most addressable through consumer choices:
		</p>
		<div class="space-y-3 text-sm text-red-800 dark:text-red-200">
			<div>
				<strong>Carbon Footprint (Most Critical)</strong> — Represents cumulative climate impact. Global methane emissions from agriculture (36-40%) and food waste (8-10%) alone account for ~48-50% of total food system emissions. Electronics manufacturing alone contributes to top 8 sectors responsible for 50% of global carbon footprint.
			</div>
			<div>
				<strong>Water Usage (Regionally Critical)</strong> — Cotton production uses 2,700 liters per kg; one shirt requires that much water. In water-scarce regions, this drives depletion of aquifers and conflicts. Critical for identifying products that strain local water systems.
			</div>
			<div>
				<strong>Waste Generated (Mounting Crisis)</strong> — 1.05 billion tons of food wasted annually; only 17.4% of 57.4 million tons of e-waste properly recycled. Waste in landfills generates methane (28-36× potency of CO₂); ocean plastic reaches 15-51 trillion microparticles.
			</div>
			<div>
				<strong>Land Use (Habitat & Biodiversity)</strong> — Agriculture and resource extraction (mining, logging) are leading causes of habitat loss. 40% of habitable land is already used for agriculture; further intensification threatens remaining ecosystems.
			</div>
			<div>
				<strong>Pollution Score (Chemical Persistence)</strong> — Chemical pollution persists for decades/centuries. Flame retardants bioaccumulate in humans; PFAS don't break down; pesticides contaminate groundwater. Focus on products that introduce persistent toxins to environment and food chains.
			</div>
		</div>
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

	<div class="mt-12 pt-8 border-t border-slate-300 dark:border-slate-600">
		<div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800 mb-8">
			<div class="flex items-center space-x-3 mb-3">
				<BookOpen class="w-5 h-5 text-emerald-600" />
				<h2 class="text-lg font-bold text-emerald-900 dark:text-emerald-300">Research Sources</h2>
			</div>
			<p class="text-sm text-emerald-800 dark:text-emerald-200 mb-4">
				All sources, citations, and detailed references for this methodology are compiled on a comprehensive references page, which is maintained as a single authoritative source across all methodology sections.
			</p>
			<a href="/methodology/references" class="inline-flex items-center space-x-2 text-emerald-700 dark:text-emerald-300 hover:underline font-semibold">
				<span>View All Research Sources & References</span>
				<span class="text-lg">→</span>
			</a>
		</div>

		<div class="mt-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
			<p class="text-sm text-red-800 dark:text-red-200">
				<strong>Note on Environmental Prioritization:</strong> These metrics are prioritized based on global burden of disease/environmental impact studies, scientific consensus, and addressability through consumer and product design choices. We emphasize absolute impact (carbon, waste, water) over relative metrics because systemic reduction of global emissions, waste, and resource consumption is essential. Our assessment focuses on product categories and choices that have the greatest potential to reduce environmental harm.
			</p>
		</div>
	</div>
</div>
