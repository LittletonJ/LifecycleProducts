<script lang="ts">
	import {
		ArrowLeft,
		Target,
		AlertTriangle,
		Zap,
		Scale,
		Brain,
		Database,
		Calculator,
		TrendingUp,
		Skull,
		Factory,
		Droplets,
		Recycle,
		Heart,
		Leaf
	} from 'lucide-svelte';

	// Severity rankings (10 = most severe global impact)
	const severityRankings = [
		{
			category: 'Carbon Emissions',
			severity: 10,
			description: 'Climate change affects all life on Earth. Each kg CO₂e contributes to global warming with effects lasting centuries.',
			easePersonal: 7,
			easeManufacturing: 6,
			icon: Factory,
			color: 'text-red-600 dark:text-red-400',
			bgColor: 'bg-red-100 dark:bg-red-900/30'
		},
		{
			category: 'Water Depletion',
			severity: 9,
			description: 'Fresh water is finite. Water-intensive products strain local ecosystems and communities, especially in water-scarce regions.',
			easePersonal: 8,
			easeManufacturing: 5,
			icon: Droplets,
			color: 'text-blue-600 dark:text-blue-400',
			bgColor: 'bg-blue-100 dark:bg-blue-900/30'
		},
		{
			category: 'Toxic Pollution',
			severity: 9,
			description: 'Persistent pollutants (PFAS, heavy metals, microplastics) bioaccumulate and cause long-term health and ecological damage.',
			easePersonal: 6,
			easeManufacturing: 4,
			icon: Skull,
			color: 'text-purple-600 dark:text-purple-400',
			bgColor: 'bg-purple-100 dark:bg-purple-900/30'
		},
		{
			category: 'Health Hazards',
			severity: 8,
			description: 'Direct health impacts from product use including carcinogens, endocrine disruptors, and allergens.',
			easePersonal: 9,
			easeManufacturing: 7,
			icon: Heart,
			color: 'text-rose-600 dark:text-rose-400',
			bgColor: 'bg-rose-100 dark:bg-rose-900/30'
		},
		{
			category: 'Land Use & Biodiversity',
			severity: 8,
			description: 'Habitat destruction and monocultures threaten species extinction and ecosystem collapse.',
			easePersonal: 5,
			easeManufacturing: 4,
			icon: Leaf,
			color: 'text-emerald-600 dark:text-emerald-400',
			bgColor: 'bg-emerald-100 dark:bg-emerald-900/30'
		},
		{
			category: 'Waste & End-of-Life',
			severity: 7,
			description: 'Non-recyclable waste accumulates in landfills and oceans. Plastics that downcycle are nearly as bad as single-use.',
			easePersonal: 8,
			easeManufacturing: 6,
			icon: Recycle,
			color: 'text-amber-600 dark:text-amber-400',
			bgColor: 'bg-amber-100 dark:bg-amber-900/30'
		}
	];

	// Sort by priority score (severity * ease of fixing)
	const prioritizedImpacts = [...severityRankings].sort((a, b) => {
		const scoreA = a.severity * ((a.easePersonal + a.easeManufacturing) / 2);
		const scoreB = b.severity * ((b.easePersonal + b.easeManufacturing) / 2);
		return scoreB - scoreA;
	});
</script>

<svelte:head>
	<title>Assessment Framework - Methodology - LifecycleProducts</title>
	<meta name="description" content="Priority-based assessment framework for product lifecycle impacts" />
</svelte:head>

<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Back Link -->
	<a
		href="/methodology"
		class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-8"
	>
		<ArrowLeft class="w-4 h-4 mr-2" />
		Back to Methodology
	</a>

	<!-- Header -->
	<div class="flex items-center space-x-4 mb-8">
		<div class="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
			<Target class="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
		</div>
		<h1 class="text-3xl font-bold text-gray-900 dark:text-white">Assessment Framework</h1>
	</div>

	<!-- Introduction -->
	<div class="prose dark:prose-invert max-w-none mb-8">
		<p class="text-lg text-gray-600 dark:text-gray-300">
			Our assessment framework prioritizes impacts by <strong>severity</strong> (how bad is the problem?) and
			<strong>ease of solution</strong> (how easily can you or manufacturers fix it?). This helps you focus on
			changes that matter most.
		</p>
	</div>

	<!-- Priority Matrix -->
	<div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
		<h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
			<Scale class="w-5 h-5 mr-2 text-indigo-500" />
			Impact Priority Matrix
		</h2>
		<p class="text-sm text-gray-600 dark:text-gray-300 mb-6">
			Ranked by priority score: Severity × Ease of Solution. Higher scores indicate impacts that are both severe AND relatively easy to address.
		</p>

		<div class="space-y-4">
			{#each prioritizedImpacts as impact, index}
				{@const priorityScore = Math.round(impact.severity * ((impact.easePersonal + impact.easeManufacturing) / 2))}
				<div class="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
					<div class="flex items-start justify-between mb-3">
						<div class="flex items-center space-x-3">
							<div class="text-2xl font-bold text-gray-400">#{index + 1}</div>
							<div class="w-10 h-10 rounded-lg {impact.bgColor} flex items-center justify-center">
								<impact.icon class="w-5 h-5 {impact.color}" />
							</div>
							<div>
								<h3 class="font-semibold text-gray-900 dark:text-white">{impact.category}</h3>
								<div class="text-xs text-gray-500">Priority Score: {priorityScore}</div>
							</div>
						</div>
					</div>
					<p class="text-sm text-gray-600 dark:text-gray-300 mb-3">{impact.description}</p>
					<div class="grid grid-cols-3 gap-4 text-xs">
						<div>
							<div class="text-gray-500 mb-1">Severity</div>
							<div class="flex items-center space-x-1">
								<div class="h-2 flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
									<div class="h-full bg-red-500" style="width: {impact.severity * 10}%"></div>
								</div>
								<span class="font-medium">{impact.severity}/10</span>
							</div>
						</div>
						<div>
							<div class="text-gray-500 mb-1">Ease (Personal)</div>
							<div class="flex items-center space-x-1">
								<div class="h-2 flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
									<div class="h-full bg-emerald-500" style="width: {impact.easePersonal * 10}%"></div>
								</div>
								<span class="font-medium">{impact.easePersonal}/10</span>
							</div>
						</div>
						<div>
							<div class="text-gray-500 mb-1">Ease (Manufacturing)</div>
							<div class="flex items-center space-x-1">
								<div class="h-2 flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
									<div class="h-full bg-blue-500" style="width: {impact.easeManufacturing * 10}%"></div>
								</div>
								<span class="font-medium">{impact.easeManufacturing}/10</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Assessment Methodology Approaches -->
	<div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
		<h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
			<Brain class="w-5 h-5 mr-2 text-purple-500" />
			Assessment Approaches Without Detailed Data
		</h2>
		<p class="text-sm text-gray-600 dark:text-gray-300 mb-6">
			Inspired by Mike Berners-Lee's <em>"How Bad Are Bananas?"</em> approach, we use order-of-magnitude estimates
			and life cycle thinking even when precise data isn't available.
		</p>

		<div class="space-y-6">
			<!-- Order of Magnitude -->
			<div class="flex items-start space-x-4">
				<div class="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
					<Calculator class="w-5 h-5 text-amber-600 dark:text-amber-400" />
				</div>
				<div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Order of Magnitude Estimates</h3>
					<p class="text-gray-600 dark:text-gray-300 text-sm mb-2">
						For carbon footprints, knowing whether something is 0.1 kg, 1 kg, or 10 kg CO₂e is more
						useful than precise figures. We categorize products into ranges:
					</p>
					<ul class="text-sm space-y-1 text-gray-600 dark:text-gray-300">
						<li>• <strong>Negligible:</strong> &lt;0.1 kg CO₂e (a banana)</li>
						<li>• <strong>Low:</strong> 0.1-1 kg CO₂e (a book, bamboo toothbrush)</li>
						<li>• <strong>Medium:</strong> 1-10 kg CO₂e (a pair of jeans)</li>
						<li>• <strong>High:</strong> 10-100 kg CO₂e (a smartphone)</li>
						<li>• <strong>Very High:</strong> 100+ kg CO₂e (a computer, car tire)</li>
					</ul>
				</div>
			</div>

			<!-- Spend-Based LCA -->
			<div class="flex items-start space-x-4">
				<div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
					<Database class="w-5 h-5 text-blue-600 dark:text-blue-400" />
				</div>
				<div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Spend-Based LCA (EEIO)</h3>
					<p class="text-gray-600 dark:text-gray-300 text-sm">
						When product-specific data isn't available, we use environmentally extended input-output analysis.
						This estimates emissions based on economic sectors. For example: $1 spent on textiles ≈ 0.5 kg CO₂e,
						$1 on electronics ≈ 0.3 kg CO₂e. Rough but useful for comparisons.
					</p>
				</div>
			</div>

			<!-- Material Type Proxies -->
			<div class="flex items-start space-x-4">
				<div class="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
					<TrendingUp class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
				</div>
				<div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Material Type Proxies</h3>
					<p class="text-gray-600 dark:text-gray-300 text-sm mb-2">
						Common materials have known impact ranges. When exact figures aren't available, we use proxies:
					</p>
					<ul class="text-sm space-y-1 text-gray-600 dark:text-gray-300">
						<li>• <strong>Aluminum:</strong> ~10 kg CO₂e/kg (but infinitely recyclable)</li>
						<li>• <strong>Steel:</strong> ~2 kg CO₂e/kg (highly recyclable)</li>
						<li>• <strong>Plastic:</strong> ~3 kg CO₂e/kg (poor end-of-life)</li>
						<li>• <strong>Cotton:</strong> ~5 kg CO₂e/kg (high water use)</li>
						<li>• <strong>Wood/Bamboo:</strong> Often carbon-negative during growth</li>
					</ul>
				</div>
			</div>

			<!-- Uncertainty Acknowledgment -->
			<div class="flex items-start space-x-4">
				<div class="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center flex-shrink-0">
					<AlertTriangle class="w-5 h-5 text-rose-600 dark:text-rose-400" />
				</div>
				<div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Embracing Uncertainty</h3>
					<p class="text-gray-600 dark:text-gray-300 text-sm">
						Following Berners-Lee's honest approach, we acknowledge when numbers are fuzzy. We provide
						confidence levels and ranges rather than false precision. A rough estimate that captures the
						right magnitude is more useful than no estimate at all.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Recyclability Penalties -->
	<div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
		<h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
			<Recycle class="w-5 h-5 mr-2 text-amber-500" />
			Recyclability Penalties (Downcycling)
		</h2>
		<p class="text-sm text-gray-600 dark:text-gray-300 mb-6">
			Not all recycling is equal. We apply penalties to materials that degrade during recycling or require
			energy-intensive processing that approaches the cost of virgin material production.
		</p>

		<div class="overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-gray-200 dark:border-gray-700">
						<th class="text-left py-2 font-medium">Material Type</th>
						<th class="text-left py-2 font-medium">Typical Penalty</th>
						<th class="text-left py-2 font-medium">Reason</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-100 dark:divide-gray-700">
					<tr>
						<td class="py-2 font-medium text-emerald-600 dark:text-emerald-400">Metal (Steel, Aluminum)</td>
						<td class="py-2">0% penalty</td>
						<td class="py-2 text-gray-600 dark:text-gray-300">Infinitely recyclable without quality loss</td>
					</tr>
					<tr>
						<td class="py-2 font-medium text-blue-600 dark:text-blue-400">Glass</td>
						<td class="py-2">0% penalty</td>
						<td class="py-2 text-gray-600 dark:text-gray-300">Infinitely recyclable, maintains purity</td>
					</tr>
					<tr>
						<td class="py-2 font-medium text-amber-600 dark:text-amber-400">Paper/Cardboard</td>
						<td class="py-2">10-30% penalty</td>
						<td class="py-2 text-gray-600 dark:text-gray-300">Fiber shortens each cycle, limited loops (5-7 times)</td>
					</tr>
					<tr>
						<td class="py-2 font-medium text-green-600 dark:text-green-400">Natural Fibers (Cotton)</td>
						<td class="py-2">10-20% penalty</td>
						<td class="py-2 text-gray-600 dark:text-gray-300">Can be recycled but quality degrades; better composted</td>
					</tr>
					<tr>
						<td class="py-2 font-medium text-red-600 dark:text-red-400">Plastic (Single-type)</td>
						<td class="py-2">50-70% penalty</td>
						<td class="py-2 text-gray-600 dark:text-gray-300">Polymer chains break down, typically recyclable once. PET bottles become fibers, not new bottles.</td>
					</tr>
					<tr>
						<td class="py-2 font-medium text-red-700 dark:text-red-500">Plastic (Mixed)</td>
						<td class="py-2">80-95% penalty</td>
						<td class="py-2 text-gray-600 dark:text-gray-300">Difficult separation, severe downcycling. Only 5% of material value retained.</td>
					</tr>
					<tr>
						<td class="py-2 font-medium text-purple-600 dark:text-purple-400">Composites/Mixed Materials</td>
						<td class="py-2">30-60% penalty</td>
						<td class="py-2 text-gray-600 dark:text-gray-300">Separation required, specialized facilities, often downcycled</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
			<p class="text-sm text-amber-800 dark:text-amber-200">
				<strong>Why This Matters:</strong> A product marketed as "70% recyclable" made of mixed plastics
				might have an effective recyclability of only 10-15% when downcycling is accounted for. This
				dramatically changes the true environmental cost calculation.
			</p>
		</div>
	</div>

	<!-- What to Focus On -->
	<div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-indigo-900/20 rounded-xl p-6">
		<h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
			<Zap class="w-5 h-5 mr-2 text-indigo-500" />
			What Should You Prioritize?
		</h2>
		<div class="space-y-4 text-sm">
			<div>
				<h3 class="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">High Priority (Severe + Easy to Fix)</h3>
				<p class="text-gray-700 dark:text-gray-300">
					Health hazards from product materials (easy: just avoid bad products), carbon emissions from
					high-use items (choose durable alternatives), water usage in textiles (choose organic/recycled).
				</p>
			</div>
			<div>
				<h3 class="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Medium Priority (Severe but Harder)</h3>
				<p class="text-gray-700 dark:text-gray-300">
					Toxic pollution (requires systemic change), land use (complex supply chains). Support legislation
					and choose certified products.
				</p>
			</div>
			<div>
				<h3 class="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Impactful Personal Choices</h3>
				<ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
					<li>Choose products with true recyclability (metals, glass) over marketed recyclability (plastics)</li>
					<li>Prioritize durability and repairability over initial price</li>
					<li>Avoid PFAS, BPA, and known health hazards</li>
					<li>Consider water footprint, especially for textiles</li>
					<li>Buy used or refurbished electronics</li>
				</ul>
			</div>
		</div>
	</div>
</div>
