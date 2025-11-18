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
		GlassWater,
		Shirt,
		UtensilsCrossed,
		Sofa,
		Smartphone,
		Baby,
		Flame,
		Recycle,
		BookOpen
	} from 'lucide-svelte';

	// High-impact product categories - what to assess first
	const highImpactCategories = [
		{
			category: 'Reusable Bottles with Plastic Lids/Seals',
			severity: 9,
			description: 'Glass or metal bottles are great, but the plastic lid is often the main source of microplastic ingestion. Silicone gaskets and plastic spouts degrade with heat and repeated use, releasing microplastics directly into your drink.',
			easePersonal: 9,
			easeManufacturing: 7,
			icon: GlassWater,
			keyInsight: 'Switch to all-metal or glass lids. Stainless steel caps with no plastic gaskets exist.'
		},
		{
			category: 'Non-Stick Cookware (PFAS)',
			severity: 10,
			description: 'PFAS ("forever chemicals") in non-stick coatings are linked to cancer, thyroid disease, and immune suppression. They bioaccumulate and persist in the environment for millennia. Even "PFOA-free" often contains other PFAS.',
			easePersonal: 9,
			easeManufacturing: 6,
			icon: UtensilsCrossed,
			keyInsight: 'Cast iron, stainless steel, or ceramic-coated (verify no PFAS). One easy swap eliminates decades of exposure.'
		},
		{
			category: 'Fast Fashion Textiles',
			severity: 8,
			description: 'Synthetic fabrics (polyester, nylon) shed 700,000 microplastic fibers per wash. Cotton uses 2,700 liters of water per shirt. Fast fashion has 52 "micro-seasons" encouraging disposability.',
			easePersonal: 7,
			easeManufacturing: 4,
			icon: Shirt,
			keyInsight: 'Each synthetic garment pollutes waterways for its entire life. Natural fibers or secondhand are far better.'
		},
		{
			category: 'Baby Products (Bottles, Toys, Mats)',
			severity: 10,
			description: 'Infants have higher exposure per body weight and developing systems. Plastic baby bottles can release millions of microplastics when heated. Foam play mats often contain formamide (toxic).',
			easePersonal: 8,
			easeManufacturing: 7,
			icon: Baby,
			keyInsight: 'Glass bottles, natural rubber toys, cork/natural mats. Children are most vulnerable to chemical exposure.'
		},
		{
			category: 'Upholstered Furniture (Flame Retardants)',
			severity: 8,
			description: 'Most furniture contains brominated or organophosphate flame retardants linked to cancer, endocrine disruption, and developmental issues. These chemicals off-gas into your home for years.',
			easePersonal: 5,
			easeManufacturing: 6,
			icon: Sofa,
			keyInsight: 'Look for TB117-2013 compliant (allows no flame retardants) or naturally fire-resistant materials like wool.'
		},
		{
			category: 'Electronics & E-Waste',
			severity: 9,
			description: 'Smartphones have massive carbon footprints (60-80 kg CO₂e), use conflict minerals, and create toxic e-waste. Short upgrade cycles multiply the impact. Lithium mining devastates ecosystems.',
			easePersonal: 6,
			easeManufacturing: 3,
			icon: Smartphone,
			keyInsight: 'Extending phone life by 1 year reduces lifetime impact by ~30%. Buy refurbished when possible.'
		},
		{
			category: 'Heating & Cooling Appliances',
			severity: 10,
			description: 'Some refrigerants (HFCs) are 1000-4000x more potent than CO₂ as greenhouse gases. One old AC unit leak can equal driving a car for 6 months. Inefficient appliances waste huge amounts of energy.',
			easePersonal: 6,
			easeManufacturing: 8,
			icon: Flame,
			keyInsight: 'Proper disposal is critical. New units use less harmful refrigerants and are far more efficient.'
		}
	];

	// Sort by combined severity and ease score
	const prioritizedCategories = [...highImpactCategories].sort((a, b) => {
		const scoreA = a.severity * a.easePersonal;
		const scoreB = b.severity * b.easePersonal;
		return scoreB - scoreA;
	});
</script>

<svelte:head>
	<title>Assessment Framework - Methodology - LifecycleProducts</title>
	<meta name="description" content="Which product categories have the largest health and environmental impact" />
</svelte:head>

<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Back Link -->
	<a
		href="/methodology"
		class="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 mb-8"
	>
		<ArrowLeft class="w-4 h-4 mr-2" />
		Back to Methodology
	</a>

	<!-- Header -->
	<div class="flex items-center space-x-4 mb-8">
		<div class="w-12 h-12 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
			<Target class="w-6 h-6 text-slate-700 dark:text-slate-300" />
		</div>
		<h1 class="text-3xl font-bold text-slate-900 dark:text-white">Assessment Framework</h1>
	</div>

	<!-- Introduction -->
	<div class="prose dark:prose-invert max-w-none mb-8">
		<p class="text-lg text-slate-600 dark:text-slate-300">
			Not all product categories are equal. Some have <strong>outsized impacts</strong> on your health or the environment.
			This framework identifies which products to assess first based on severity of harm and how easy it is to find better alternatives.
		</p>
	</div>

	<!-- Table of Contents -->
	<div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 mb-8">
		<h2 class="font-bold text-blue-900 dark:text-blue-300 mb-4">Table of Contents</h2>
		<ul class="text-sm space-y-2 text-blue-800 dark:text-blue-300">
			<li><a href="#env-context" class="hover:underline">→ Where Most Environmental Damage Occurs</a></li>
			<li><a href="#product-categories" class="hover:underline">→ Highest Impact Product Categories</a></li>
			<li><a href="#gas-potency" class="hover:underline">→ Greenhouse Gas Potency</a></li>
			<li><a href="#estimation" class="hover:underline">→ Estimating Impact Without Data</a></li>
			<li><a href="#recyclability" class="hover:underline">→ Recyclability Penalties</a></li>
		</ul>
	</div>

	<!-- Environmental Impact Context -->
	<div id="env-context" class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 mb-8">
		<h2 class="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3">Where Most Environmental Damage Occurs</h2>
		<p class="text-sm text-blue-800 dark:text-blue-200 mb-4">
			Global environmental impact is concentrated in a few product categories and sectors. Understanding these priorities helps focus efforts where they matter most:
		</p>
		<div class="space-y-3 text-sm text-blue-800 dark:text-blue-200">
			<div class="flex items-start space-x-3">
				<div class="font-bold text-blue-900 dark:text-blue-300 flex-shrink-0">1.</div>
				<div>
					<strong>Livestock & Animal Agriculture</strong> — 36-40% of methane emissions; methane is 80× more potent than CO₂ over 20 years. 45 major livestock companies emit ~1 billion tons CO₂e annually (equivalent to Saudi Arabia's oil emissions).
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<div class="font-bold text-blue-900 dark:text-blue-300 flex-shrink-0">2.</div>
				<div>
					<strong>Food Waste</strong> — 8-10% of global greenhouse gas emissions; if waste were a country, it would be the 3rd-largest emitter globally. 1.05 billion tons wasted annually.
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<div class="font-bold text-blue-900 dark:text-blue-300 flex-shrink-0">3.</div>
				<div>
					<strong>Electronics Manufacturing & E-Waste</strong> — 80% of lifecycle emissions occur during manufacturing. E-waste emissions jumped 53% between 2014-2020. Only 17.4% properly recycled globally.
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<div class="font-bold text-blue-900 dark:text-blue-300 flex-shrink-0">4.</div>
				<div>
					<strong>Textiles & Fast Fashion</strong> — Synthetic fabrics shed 700,000 microplastic fibers per wash. Cotton uses 2,700 liters of water per shirt. 52 "micro-seasons" encourage disposability.
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<div class="font-bold text-blue-900 dark:text-blue-300 flex-shrink-0">5.</div>
				<div>
					<strong>Single-Use Plastics</strong> — 33 billion pounds enter oceans annually (2 garbage trucks/minute). 15-51 trillion microplastic particles in oceans. 40% of all plastic produced is single-use.
				</div>
			</div>
		</div>
	</div>

	<!-- High Impact Product Categories -->
	<div id="product-categories" class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-8">
		<h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
			<Scale class="w-5 h-5 mr-2 text-slate-500" />
			Highest Impact Product Categories
		</h2>
		<p class="text-sm text-slate-600 dark:text-slate-300 mb-6">
			Ranked by: <strong>Severity of problem × Ease of finding alternatives</strong>. These are where your assessment efforts matter most.
		</p>

		<div class="space-y-6">
			{#each prioritizedCategories as item, index}
				{@const priorityScore = Math.round(item.severity * item.easePersonal)}
				<div class="border border-slate-200 dark:border-slate-600 rounded-lg p-5">
					<div class="flex items-start justify-between mb-4">
						<div class="flex items-center space-x-3">
							<div class="text-2xl font-bold text-slate-400">#{index + 1}</div>
							<div class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
								<item.icon class="w-5 h-5 text-slate-600 dark:text-slate-300" />
							</div>
							<div>
								<h3 class="font-semibold text-slate-900 dark:text-white">{item.category}</h3>
								<div class="text-xs text-slate-500">Priority Score: {priorityScore}/100</div>
							</div>
						</div>
					</div>

					<p class="text-sm text-slate-600 dark:text-slate-300 mb-4">{item.description}</p>

					<div class="bg-slate-50 dark:bg-slate-900/50 rounded p-3 mb-4">
						<p class="text-sm">
							<span class="font-medium text-slate-700 dark:text-slate-200">Key Insight:</span>
							<span class="text-slate-600 dark:text-slate-300"> {item.keyInsight}</span>
						</p>
					</div>

					<div class="grid grid-cols-2 gap-4 text-xs">
						<div>
							<div class="text-slate-500 mb-1">Problem Severity</div>
							<div class="flex items-center space-x-1">
								<div class="h-2 flex-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
									<div class="h-full bg-slate-600 dark:bg-slate-400" style="width: {item.severity * 10}%"></div>
								</div>
								<span class="font-medium">{item.severity}/10</span>
							</div>
						</div>
						<div>
							<div class="text-slate-500 mb-1">Ease of Better Alternative</div>
							<div class="flex items-center space-x-1">
								<div class="h-2 flex-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
									<div class="h-full bg-slate-600 dark:bg-slate-400" style="width: {item.easePersonal * 10}%"></div>
								</div>
								<span class="font-medium">{item.easePersonal}/10</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Greenhouse Gas Potency -->
	<div id="gas-potency" class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-8">
		<h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
			<Flame class="w-5 h-5 mr-2 text-slate-500" />
			Not All Emissions Are Equal
		</h2>
		<p class="text-sm text-slate-600 dark:text-slate-300 mb-6">
			Different greenhouse gases have vastly different global warming potentials (GWP). CO₂ is the baseline (GWP = 1), but other gases are far more potent:
		</p>

		<div class="overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-slate-200 dark:border-slate-700">
						<th class="text-left py-2 font-medium">Gas</th>
						<th class="text-left py-2 font-medium">GWP (100-year)</th>
						<th class="text-left py-2 font-medium">Common Sources</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-100 dark:divide-slate-700">
					<tr>
						<td class="py-2 font-medium">Carbon Dioxide (CO₂)</td>
						<td class="py-2">1×</td>
						<td class="py-2 text-slate-600 dark:text-slate-300">Fossil fuels, manufacturing, transport</td>
					</tr>
					<tr>
						<td class="py-2 font-medium">Methane (CH₄)</td>
						<td class="py-2 text-amber-700 dark:text-amber-400">28-36×</td>
						<td class="py-2 text-slate-600 dark:text-slate-300">Livestock, landfills, natural gas leaks</td>
					</tr>
					<tr>
						<td class="py-2 font-medium">Nitrous Oxide (N₂O)</td>
						<td class="py-2 text-amber-700 dark:text-amber-400">265-298×</td>
						<td class="py-2 text-slate-600 dark:text-slate-300">Fertilizers, industrial processes</td>
					</tr>
					<tr>
						<td class="py-2 font-medium">HFCs (Refrigerants)</td>
						<td class="py-2 text-red-700 dark:text-red-400">1,000-4,000×</td>
						<td class="py-2 text-slate-600 dark:text-slate-300">Air conditioning, refrigeration</td>
					</tr>
					<tr>
						<td class="py-2 font-medium">SF₆ (Sulfur Hexafluoride)</td>
						<td class="py-2 text-red-700 dark:text-red-400">23,500×</td>
						<td class="py-2 text-slate-600 dark:text-slate-300">Electrical equipment, some consumer products</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="mt-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
			<p class="text-sm text-slate-700 dark:text-slate-300">
				<strong>Implication:</strong> A small refrigerant leak can have more climate impact than years of driving.
				When assessing products, consider not just total CO₂e but the specific gases involved. Proper disposal of
				appliances with high-GWP refrigerants is critical.
			</p>
		</div>
	</div>

	<!-- Assessment Methodology Approaches -->
	<div id="estimation" class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-8">
		<h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
			<Brain class="w-5 h-5 mr-2 text-slate-500" />
			Estimating Impact Without Detailed Data
		</h2>
		<p class="text-sm text-slate-600 dark:text-slate-300 mb-6">
			Inspired by Mike Berners-Lee's <em>"How Bad Are Bananas?"</em>, we use order-of-magnitude estimates when precise data isn't available. Getting the right ballpark is more useful than false precision.
		</p>

		<div class="space-y-6">
			<!-- Order of Magnitude -->
			<div class="flex items-start space-x-4">
				<div class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
					<Calculator class="w-5 h-5 text-slate-600 dark:text-slate-300" />
				</div>
				<div>
					<h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Order of Magnitude Thinking</h3>
					<p class="text-slate-600 dark:text-slate-300 text-sm mb-2">
						For carbon footprints, knowing whether something is 0.1 kg, 1 kg, 10 kg, or 100 kg CO₂e matters more than exact figures:
					</p>
					<ul class="text-sm space-y-1 text-slate-600 dark:text-slate-300">
						<li>• <strong>&lt;1 kg CO₂e:</strong> A banana, a book, a bamboo toothbrush</li>
						<li>• <strong>1-10 kg CO₂e:</strong> A pair of jeans, a stainless bottle</li>
						<li>• <strong>10-100 kg CO₂e:</strong> A smartphone, a cast iron skillet</li>
						<li>• <strong>100-1000 kg CO₂e:</strong> A laptop, a mattress</li>
						<li>• <strong>1000+ kg CO₂e:</strong> A car, a refrigerator</li>
					</ul>
				</div>
			</div>

			<!-- Material Type Proxies -->
			<div class="flex items-start space-x-4">
				<div class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
					<TrendingUp class="w-5 h-5 text-slate-600 dark:text-slate-300" />
				</div>
				<div>
					<h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Material-Based Estimates</h3>
					<p class="text-slate-600 dark:text-slate-300 text-sm mb-2">
						When you don't have specific data, use material composition as a proxy:
					</p>
					<ul class="text-sm space-y-1 text-slate-600 dark:text-slate-300">
						<li>• <strong>Aluminum:</strong> ~10 kg CO₂e/kg (energy-intensive, but infinitely recyclable)</li>
						<li>• <strong>Steel:</strong> ~2 kg CO₂e/kg (highly recyclable)</li>
						<li>• <strong>Plastic:</strong> ~3-6 kg CO₂e/kg (varies by type, poor end-of-life)</li>
						<li>• <strong>Cotton:</strong> ~5 kg CO₂e/kg + 2,700 liters water per kg</li>
						<li>• <strong>Glass:</strong> ~1 kg CO₂e/kg (infinitely recyclable)</li>
						<li>• <strong>Wood/Bamboo:</strong> Often net-negative during growth phase</li>
					</ul>
				</div>
			</div>

			<!-- Uncertainty -->
			<div class="flex items-start space-x-4">
				<div class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
					<AlertTriangle class="w-5 h-5 text-slate-600 dark:text-slate-300" />
				</div>
				<div>
					<h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Acknowledging Uncertainty</h3>
					<p class="text-slate-600 dark:text-slate-300 text-sm">
						We're honest about uncertainty. A rough estimate that's within 2-3× of reality is far more useful than no estimate at all.
						When data is sparse, we provide ranges and confidence levels. The goal is informed decision-making, not false precision.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Recyclability Penalties -->
	<div id="recyclability" class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-8">
		<h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
			<Recycle class="w-5 h-5 mr-2 text-slate-500" />
			Recyclability Penalties (Downcycling)
		</h2>
		<p class="text-sm text-slate-600 dark:text-slate-300 mb-6">
			Not all recycling is equal. Materials that degrade during recycling or require energy similar to virgin production receive penalties:
		</p>

		<div class="overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-slate-200 dark:border-slate-700">
						<th class="text-left py-2 font-medium">Material Type</th>
						<th class="text-left py-2 font-medium">Penalty</th>
						<th class="text-left py-2 font-medium">Reality</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-100 dark:divide-slate-700">
					<tr>
						<td class="py-2 font-medium">Metal (Steel, Aluminum)</td>
						<td class="py-2">0%</td>
						<td class="py-2 text-slate-600 dark:text-slate-300">Infinitely recyclable without quality loss</td>
					</tr>
					<tr>
						<td class="py-2 font-medium">Glass</td>
						<td class="py-2">0%</td>
						<td class="py-2 text-slate-600 dark:text-slate-300">Infinitely recyclable, maintains purity</td>
					</tr>
					<tr>
						<td class="py-2 font-medium">Paper/Cardboard</td>
						<td class="py-2">10-30%</td>
						<td class="py-2 text-slate-600 dark:text-slate-300">Fiber shortens each cycle (5-7 loops max)</td>
					</tr>
					<tr>
						<td class="py-2 font-medium">Natural Fibers (Cotton)</td>
						<td class="py-2">10-20%</td>
						<td class="py-2 text-slate-600 dark:text-slate-300">Quality degrades; often better composted</td>
					</tr>
					<tr>
						<td class="py-2 font-medium">Plastic (Single-type)</td>
						<td class="py-2 font-medium text-amber-700 dark:text-amber-400">50-70%</td>
						<td class="py-2 text-slate-600 dark:text-slate-300">Polymer chains break down. PET bottles → fibers, not new bottles.</td>
					</tr>
					<tr>
						<td class="py-2 font-medium">Plastic (Mixed)</td>
						<td class="py-2 font-medium text-red-700 dark:text-red-400">80-95%</td>
						<td class="py-2 text-slate-600 dark:text-slate-300">Only ~5% of material value retained</td>
					</tr>
					<tr>
						<td class="py-2 font-medium">Composites</td>
						<td class="py-2">30-60%</td>
						<td class="py-2 text-slate-600 dark:text-slate-300">Separation required, often energy-intensive</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="mt-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
			<p class="text-sm text-slate-700 dark:text-slate-300">
				<strong>Example:</strong> A product marketed as "70% recyclable" made of mixed plastics with a 0.85 penalty
				has an <em>effective recyclability of only 10.5%</em>. Marketing vs. reality.
			</p>
		</div>
	</div>

	<!-- What to Focus On -->
	<div class="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 mb-8">
		<h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
			<Zap class="w-5 h-5 mr-2 text-slate-500" />
			Where to Start
		</h2>
		<div class="space-y-4 text-sm">
			<div>
				<h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-1">Immediate Wins (High Impact, Easy Swaps)</h3>
				<ul class="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
					<li>Replace non-stick cookware with cast iron or stainless steel</li>
					<li>Switch to all-metal water bottle caps (no plastic/silicone gaskets)</li>
					<li>Glass baby bottles instead of plastic</li>
					<li>Choose natural fiber clothing over synthetic</li>
				</ul>
			</div>
			<div>
				<h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-1">Longer-Term Focus</h3>
				<ul class="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
					<li>When replacing furniture, seek flame-retardant-free options</li>
					<li>Extend electronics lifespan—repair over replace</li>
					<li>Ensure proper disposal of refrigerants from old appliances</li>
					<li>Buy secondhand when possible (clothing, furniture, electronics)</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Research Sources -->
	<div class="mt-12 pt-8 border-t border-slate-300 dark:border-slate-600">
		<div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800 mb-8">
			<div class="flex items-center space-x-3 mb-3">
				<BookOpen class="w-5 h-5 text-emerald-600" />
				<h2 class="text-lg font-bold text-emerald-900 dark:text-emerald-300">Research Sources</h2>
			</div>
			<p class="text-sm text-emerald-800 dark:text-emerald-200 mb-4">
				All sources, citations, and detailed references for this assessment framework are compiled on a comprehensive references page, which is maintained as a single authoritative source across all methodology sections.
			</p>
			<a href="/methodology/references" class="inline-flex items-center space-x-2 text-emerald-700 dark:text-emerald-300 hover:underline font-semibold">
				<span>View All Research Sources & References</span>
				<span class="text-lg">→</span>
			</a>
		</div>

		<div class="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
			<p class="text-sm text-blue-800 dark:text-blue-200">
				<strong>Assessment Framework Philosophy:</strong> This framework prioritizes product categories and environmental impacts based on peer-reviewed research, global burden assessments, and scientific consensus. We focus on categories where individual consumer choices have the potential to create meaningful cumulative impact when multiplied across many people. The ranking reflects both the severity of harm and the practical ease of identifying and choosing better alternatives.
			</p>
		</div>
	</div>
</div>
