<script lang="ts">
	import { ArrowLeft, CheckCircle2, Users, Leaf, Recycle, Wrench } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Lifecycle Positives - Methodology - LifecycleProducts</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<a href="/methodology" class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline mb-6">
		<ArrowLeft class="w-4 h-4 mr-1" />
		Back to Methodology
	</a>

	<div class="flex items-center space-x-4 mb-8">
		<div class="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
			<CheckCircle2 class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
		</div>
		<h1 class="text-3xl font-bold">Lifecycle Positives</h1>
	</div>

	<div class="prose dark:prose-invert max-w-none mb-8">
		<p>
			We highlight the positive aspects of each product, recognizing that sustainable products often provide benefits beyond just reducing harm.
		</p>
	</div>

	<div class="space-y-6">
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Users class="w-5 h-5 text-blue-600" />
				<h2 class="text-lg font-bold">Living Wages</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Whether workers throughout the supply chain are paid living wages based on fair trade certifications and company disclosures. We verify through certifications like Fair Trade, SA8000, or company transparency reports.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Leaf class="w-5 h-5 text-emerald-600" />
				<h2 class="text-lg font-bold">Environmental Improvements</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Specific ways the product improves upon conventional alternatives. This includes biodegradable materials, reduced packaging, sustainable sourcing practices, renewable energy use in manufacturing, and any regenerative practices that improve ecosystems.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Recycle class="w-5 h-5 text-blue-600" />
				<h2 class="text-lg font-bold">Recyclability (%)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Percentage of the product that can be recycled or composted at end-of-life. We consider material composition, local recycling infrastructure availability, and whether the product can be easily disassembled for recycling. 100% indicates fully recyclable or compostable materials.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Wrench class="w-5 h-5 text-amber-600" />
				<h2 class="text-lg font-bold">Repairability (1-10)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				How easy it is to repair the product to extend its lifespan. Based on availability of replacement parts, access to repair documentation, tool requirements, and product design that allows disassembly. Higher scores indicate products designed for longevity through repair.
			</p>
		</div>
	</div>
</div>
