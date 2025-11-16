<script lang="ts">
	import { ArrowLeft, Heart, ShieldCheck, AlertTriangle, Sparkles } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Health Impacts - Methodology - LifecycleProducts</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<a href="/methodology" class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline mb-6">
		<ArrowLeft class="w-4 h-4 mr-1" />
		Back to Methodology
	</a>

	<div class="flex items-center space-x-4 mb-8">
		<div class="w-12 h-12 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
			<Heart class="w-6 h-6 text-rose-600 dark:text-rose-400" />
		</div>
		<h1 class="text-3xl font-bold">Health Impacts</h1>
	</div>

	<div class="prose dark:prose-invert max-w-none mb-8">
		<p>
			We evaluate potential health effects of products, helping you avoid harmful substances while identifying products that actively promote wellbeing.
		</p>
	</div>

	<div class="space-y-6">
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<ShieldCheck class="w-5 h-5 text-emerald-600" />
				<h2 class="text-lg font-bold">Safety Score (1-10)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Overall health safety rating based on materials used, chemical exposure risks, and safety certifications. A score of 10 indicates the safest products with no known health concerns. We consider factors like BPA content, PFAS presence, heavy metals, VOC emissions, and allergen potential.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<AlertTriangle class="w-5 h-5 text-amber-600" />
				<h2 class="text-lg font-bold">Health Concerns</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Specific potential health risks associated with the product. This includes chemical leaching, allergens, off-gassing, microplastic shedding, ergonomic issues, or any safety hazards. We list these explicitly so you can make informed decisions based on your personal health needs.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Sparkles class="w-5 h-5 text-emerald-600" />
				<h2 class="text-lg font-bold">Health Benefits</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Positive health attributes of the product. Examples include BPA-free materials, hypoallergenic properties, ergonomic design, natural antimicrobial properties, breathable fabrics, or products that add beneficial elements (like cast iron adding dietary iron). These benefits can actively improve your health and wellbeing.
			</p>
		</div>
	</div>
</div>
