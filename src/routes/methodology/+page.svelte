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
		Clock,
		Calculator,
		DollarSign,
		TrendingDown,
		PieChart
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

		<div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-emerald-900/20 rounded-xl shadow-sm border border-emerald-200 dark:border-emerald-700 p-6">
			<div class="flex items-start space-x-4">
				<div class="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
					<Calculator class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
				</div>
				<div>
					<h2 class="text-xl font-bold mb-3">Lifetime Value Analysis</h2>
					<p class="text-slate-600 dark:text-slate-400 mb-4">
						We calculate the true economic value of each product over its lifetime:
					</p>
					<ul class="space-y-3">
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Purchase Price ($)</strong> - The typical retail cost of the product at time of assessment.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Uses Per Year</strong> - Estimated number of times the product is used annually based on typical usage patterns (e.g., toothbrush = 730 uses/year for 2x daily brushing).
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Lifetime Uses</strong> - Total uses over the product's lifespan, calculated as: Uses Per Year × Expected Lifetime (years).
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Cost Per Use</strong> - The amortized cost for each use, calculated as: Purchase Price ÷ Lifetime Uses. This reveals the true value of durable products.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Cost Per Year</strong> - Annual cost of ownership, calculated as: Purchase Price ÷ Expected Lifetime (years). Useful for budgeting and comparing alternatives.
							</div>
						</li>
					</ul>
					<div class="mt-4 p-4 bg-white/50 dark:bg-slate-900/30 rounded-lg">
						<p class="text-sm text-slate-600 dark:text-slate-400">
							<strong>Why this matters:</strong> A $50 cast iron skillet that lasts 100 years costs only $0.50/year and $0.003 per use, while a $10 non-stick pan that lasts 2 years costs $5/year and $0.03 per use. The "expensive" option is actually 10x cheaper over time.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
			<div class="flex items-start space-x-4">
				<div class="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
					<PieChart class="w-5 h-5 text-purple-600 dark:text-purple-400" />
				</div>
				<div>
					<h2 class="text-xl font-bold mb-3">Cost Breakdown Estimate</h2>
					<p class="text-slate-600 dark:text-slate-400 mb-4">
						We estimate how the purchase price is distributed across different cost factors to provide transparency into product economics:
					</p>
					<ul class="space-y-3">
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Raw Materials (%)</strong> - Cost of sourcing and procuring base materials (e.g., bamboo, steel, cotton fiber).
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Manufacturing (%)</strong> - Production costs including machinery, energy, and facility overhead.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Labor (%)</strong> - Wages paid to workers throughout the production process. Higher percentages often indicate fair trade or domestic production.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Transportation (%)</strong> - Shipping and logistics costs from manufacturing to retail, including packaging.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Marketing (%)</strong> - Advertising, branding, and promotional expenses. Lower percentages suggest word-of-mouth or values-driven sales.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Retail (%)</strong> - Retailer margins including store operations, staff, and distribution network costs.
							</div>
						</li>
						<li class="flex items-start">
							<CheckCircle2 class="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
							<div>
								<strong>Profit (%)</strong> - Manufacturer and brand profit margins. Sustainable brands often have modest margins focused on long-term viability.
							</div>
						</li>
					</ul>
					<div class="mt-4 p-4 bg-slate-50 dark:bg-slate-900/30 rounded-lg">
						<p class="text-sm text-slate-600 dark:text-slate-400">
							<strong>Data Sources:</strong> Cost breakdowns are estimated using industry reports, company disclosures (when available), academic research on product economics, and supply chain analysis. These are approximations and may vary by manufacturer, region, and market conditions.
						</p>
					</div>
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
