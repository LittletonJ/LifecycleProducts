<script lang="ts">
	import {
		BookOpen,
		Target,
		Scale,
		Database,
		FlaskConical,
		CheckCircle2,
		ArrowRight,
		Leaf,
		Heart,
		Wrench,
		Clock
	} from 'lucide-svelte';
</script>

<svelte:head>
	<title>Methodology - LifecycleProducts</title>
	<meta name="description" content="Learn how we assess products for environmental impact, health, and quality" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Header -->
	<div class="text-center mb-12">
		<div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
			<BookOpen class="w-8 h-8" />
		</div>
		<h1 class="text-4xl font-bold mb-4">Our Methodology</h1>
		<p class="text-lg text-slate-600 dark:text-slate-400">
			How we assess products to give you the complete picture of their true impact
		</p>
	</div>

	<!-- Introduction -->
	<div class="prose dark:prose-invert max-w-none mb-12">
		<p class="text-lg">
			Every product assessment on LifecycleProducts follows a rigorous, transparent methodology designed to evaluate
			the full impact of a product from cradle to grave. Our goal is to help you make informed decisions by providing
			comprehensive data on environmental impact, health implications, and overall quality.
		</p>
	</div>

	<!-- Assessment Categories -->
	<div class="space-y-8 mb-12">
		<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
			<div class="flex items-start space-x-4">
				<div class="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
					<Leaf class="w-5 h-5 text-red-600 dark:text-red-400" />
				</div>
				<div>
					<h2 class="text-xl font-bold mb-3">Lifecycle Negatives</h2>
					<p class="text-slate-600 dark:text-slate-400 mb-4">
						We quantify the environmental costs of each product across five key metrics:
					</p>
					<ul class="space-y-3">
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Carbon Footprint (kg CO₂e)</strong> - Total greenhouse gas emissions from raw material extraction, manufacturing, transportation, use phase, and end-of-life disposal.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Water Usage (liters)</strong> - Total water consumed throughout the product's lifecycle, including agricultural, industrial, and cleaning processes.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Waste Generated (kg)</strong> - Total waste produced during manufacturing, packaging, and end-of-life, including both recyclable and non-recyclable materials.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Land Use (m²)</strong> - Total land area required for raw material production and manufacturing facilities.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Pollution Score (1-10)</strong> - Assessment of air, water, and soil pollution generated throughout the lifecycle, with 10 being the most polluting.
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
			<div class="flex items-start space-x-4">
				<div class="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
					<CheckCircle2 class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
				</div>
				<div>
					<h2 class="text-xl font-bold mb-3">Lifecycle Positives</h2>
					<p class="text-slate-600 dark:text-slate-400 mb-4">
						We also highlight the positive aspects of each product:
					</p>
					<ul class="space-y-3">
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Living Wages</strong> - Whether workers throughout the supply chain are paid living wages based on fair trade certifications and company disclosures.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Environmental Improvements</strong> - Specific ways the product improves upon conventional alternatives (e.g., biodegradable materials, reduced packaging).
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Recyclability (%)</strong> - Percentage of the product that can be recycled or composted at end-of-life.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Repairability (1-10)</strong> - How easy it is to repair the product to extend its lifespan, based on availability of parts and repair documentation.
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
			<div class="flex items-start space-x-4">
				<div class="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center flex-shrink-0">
					<Heart class="w-5 h-5 text-rose-600 dark:text-rose-400" />
				</div>
				<div>
					<h2 class="text-xl font-bold mb-3">Health Impacts</h2>
					<p class="text-slate-600 dark:text-slate-400 mb-4">
						We evaluate potential health effects:
					</p>
					<ul class="space-y-3">
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Safety Score (1-10)</strong> - Overall health safety rating based on materials used, chemical exposure risks, and safety certifications.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Health Concerns</strong> - Specific potential health risks (e.g., chemical leaching, allergens, safety hazards).
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Health Benefits</strong> - Positive health attributes (e.g., BPA-free, hypoallergenic, ergonomic design).
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
			<div class="flex items-start space-x-4">
				<div class="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
					<Wrench class="w-5 h-5 text-amber-600 dark:text-amber-400" />
				</div>
				<div>
					<h2 class="text-xl font-bold mb-3">Use & Quality</h2>
					<p class="text-slate-600 dark:text-slate-400 mb-4">
						We assess the practical aspects of each product:
					</p>
					<ul class="space-y-3">
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Durability (1-10)</strong> - How well the product withstands regular use over time.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Functionality (1-10)</strong> - How effectively the product performs its intended purpose.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>User Satisfaction (1-10)</strong> - Aggregated user feedback and reviews on overall satisfaction.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Expected Lifetime</strong> - Estimated useful lifespan under normal use conditions.
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Data Sources -->
	<div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 mb-12">
		<div class="flex items-center space-x-3 mb-4">
			<Database class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
			<h2 class="text-xl font-bold">Data Sources</h2>
		</div>
		<p class="text-slate-600 dark:text-slate-400 mb-4">
			Our assessments are based on research from multiple sources:
		</p>
		<ul class="space-y-2 text-slate-600 dark:text-slate-400">
			<li>• Published lifecycle assessment (LCA) studies</li>
			<li>• Manufacturer disclosures and certifications</li>
			<li>• Third-party testing organizations</li>
			<li>• Environmental databases (e.g., Ecoinvent, GaBi)</li>
			<li>• Consumer product safety databases</li>
			<li>• User reviews and satisfaction surveys</li>
		</ul>
	</div>

	<!-- Call to Action -->
	<div class="text-center">
		<p class="text-slate-600 dark:text-slate-400 mb-4">
			Ready to explore our product assessments?
		</p>
		<a
			href="/assessments"
			class="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
		>
			View Assessments
			<ArrowRight class="w-5 h-5 ml-2" />
		</a>
	</div>
</div>
