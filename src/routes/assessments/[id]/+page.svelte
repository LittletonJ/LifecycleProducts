<script lang="ts">
	import type { PageData } from './$types';
	import ScoreBar from '$lib/components/ScoreBar.svelte';
	import {
		ArrowLeft,
		Leaf,
		Droplets,
		Trash2,
		Mountain,
		Factory,
		Heart,
		Clock,
		Wrench,
		Recycle,
		CheckCircle,
		AlertTriangle,
		Star,
		DollarSign,
		Calculator,
		TrendingDown,
		PieChart
	} from 'lucide-svelte';

	let { data }: { data: PageData } = $props();
	const product = data.product;

	// Calculate lifetime metrics
	const lifetimeUses = Math.round(product.usesPerYear * product.assessment.lifetime);
	const costPerUse = product.price / lifetimeUses;
	const costPerYear = product.price / product.assessment.lifetime;

	// Cost breakdown data
	const costBreakdownItems = [
		{ label: 'Raw Materials', value: product.costBreakdown.rawMaterials, color: 'bg-emerald-600 dark:bg-emerald-700', textColor: 'text-emerald-700 dark:text-emerald-400' },
		{ label: 'Manufacturing', value: product.costBreakdown.manufacturing, color: 'bg-slate-500 dark:bg-slate-600', textColor: 'text-slate-600 dark:text-slate-400' },
		{ label: 'Labor', value: product.costBreakdown.labor, color: 'bg-amber-600 dark:bg-amber-700', textColor: 'text-amber-700 dark:text-amber-400' },
		{ label: 'Transportation', value: product.costBreakdown.transportation, color: 'bg-stone-500 dark:bg-stone-600', textColor: 'text-stone-600 dark:text-stone-400' },
		{ label: 'Marketing', value: product.costBreakdown.marketing, color: 'bg-stone-600 dark:bg-stone-700', textColor: 'text-stone-700 dark:text-stone-400' },
		{ label: 'Retail', value: product.costBreakdown.retail, color: 'bg-slate-600 dark:bg-slate-700', textColor: 'text-slate-700 dark:text-slate-400' },
		{ label: 'Profit', value: product.costBreakdown.profit, color: 'bg-slate-500', textColor: 'text-slate-600 dark:text-slate-400' }
	];
</script>

<svelte:head>
	<title>{product.name} Assessment - LifecycleProducts</title>
	<meta name="description" content="Detailed lifecycle assessment for {product.name}" />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Back Button -->
	<a
		href="/assessments"
		class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline mb-6"
	>
		<ArrowLeft class="w-4 h-4 mr-1" />
		Back to Assessments
	</a>

	<!-- Product Header -->
	<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-8">
		<div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
			<div>
				<span class="text-sm font-medium px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full">
					{product.category}
				</span>
				<h1 class="text-3xl font-bold mt-3 mb-2">{product.name}</h1>
				<p class="text-slate-600 dark:text-slate-400 max-w-2xl">
					{product.description}
				</p>
			</div>
			<div class="flex items-center space-x-2">
				<Clock class="w-5 h-5 text-slate-400" />
				<span class="text-lg font-medium">
					Expected Lifetime:
					{product.assessment.lifetime >= 1
						? `${product.assessment.lifetime} year${product.assessment.lifetime !== 1 ? 's' : ''}`
						: `${Math.round(product.assessment.lifetime * 12)} months`}
				</span>
			</div>
		</div>
	</div>

	<!-- Lifetime Value & Cost Analysis -->
	<div class="bg-gradient-to-r from-slate-50 to-stone-50 dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-sm border border-slate-300 dark:border-slate-600 p-6 mb-8">
		<h2 class="text-xl font-bold mb-6 flex items-center">
			<span class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mr-3">
				<Calculator class="w-4 h-4 text-slate-700 dark:text-slate-300" />
			</span>
			Lifetime Value Analysis
		</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			<div class="bg-white/80 dark:bg-slate-900/50 rounded-lg p-4">
				<div class="flex items-center space-x-2 mb-2">
					<DollarSign class="w-5 h-5 text-slate-600 dark:text-slate-400" />
					<span class="text-sm font-medium text-slate-600 dark:text-slate-400">Purchase Price</span>
				</div>
				<div class="text-2xl font-bold text-slate-900 dark:text-white">
					${product.price.toFixed(2)}
				</div>
			</div>
			<div class="bg-white/80 dark:bg-slate-900/50 rounded-lg p-4">
				<div class="flex items-center space-x-2 mb-2">
					<Clock class="w-5 h-5 text-slate-600 dark:text-slate-400" />
					<span class="text-sm font-medium text-slate-600 dark:text-slate-400">Lifetime Uses</span>
				</div>
				<div class="text-2xl font-bold text-slate-900 dark:text-white">
					{lifetimeUses.toLocaleString()}
				</div>
				<div class="text-xs text-slate-500 mt-1">
					{product.usesPerYear} uses/year × {product.assessment.lifetime >= 1
						? `${product.assessment.lifetime} years`
						: `${Math.round(product.assessment.lifetime * 12)} months`}
				</div>
			</div>
			<div class="bg-white/80 dark:bg-slate-900/50 rounded-lg p-4">
				<div class="flex items-center space-x-2 mb-2">
					<TrendingDown class="w-5 h-5 text-slate-600 dark:text-slate-400" />
					<span class="text-sm font-medium text-slate-600 dark:text-slate-400">Cost Per Use</span>
				</div>
				<div class="text-2xl font-bold text-slate-900 dark:text-white">
					{costPerUse < 0.01
						? `$${(costPerUse * 100).toFixed(2)}¢`
						: costPerUse < 1
							? `${(costPerUse * 100).toFixed(1)}¢`
							: `$${costPerUse.toFixed(2)}`}
				</div>
				<div class="text-xs text-slate-500 mt-1">
					${product.price.toFixed(2)} ÷ {lifetimeUses.toLocaleString()} uses
				</div>
			</div>
			<div class="bg-white/80 dark:bg-slate-900/50 rounded-lg p-4">
				<div class="flex items-center space-x-2 mb-2">
					<Calculator class="w-5 h-5 text-slate-600 dark:text-slate-400" />
					<span class="text-sm font-medium text-slate-600 dark:text-slate-400">Cost Per Year</span>
				</div>
				<div class="text-2xl font-bold text-slate-900 dark:text-white">
					${costPerYear.toFixed(2)}
				</div>
				<div class="text-xs text-slate-500 mt-1">
					${product.price.toFixed(2)} ÷ {product.assessment.lifetime >= 1
						? `${product.assessment.lifetime} years`
						: `${(product.assessment.lifetime).toFixed(2)} years`}
				</div>
			</div>
		</div>
	</div>

	<!-- Cost Breakdown Estimate -->
	<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-8">
		<h2 class="text-xl font-bold mb-6 flex items-center">
			<span class="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-900/30 flex items-center justify-center mr-3">
				<PieChart class="w-4 h-4 text-stone-600 dark:text-stone-400" />
			</span>
			Cost Breakdown Estimate
		</h2>
		<p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
			Estimated distribution of the ${product.price.toFixed(2)} purchase price across different cost factors:
		</p>

		<!-- Stacked Bar -->
		<div class="h-8 rounded-full overflow-hidden flex mb-6">
			{#each costBreakdownItems as item}
				<div
					class="{item.color} transition-all duration-300"
					style="width: {item.value}%"
					title="{item.label}: {item.value}%"
				></div>
			{/each}
		</div>

		<!-- Breakdown Details -->
		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
			{#each costBreakdownItems as item}
				<div class="flex items-center space-x-2">
					<div class="w-3 h-3 rounded-full {item.color} flex-shrink-0"></div>
					<div class="min-w-0">
						<div class="text-sm font-medium truncate">{item.label}</div>
						<div class="text-xs text-slate-500">
							{item.value}% · ${(product.price * item.value / 100).toFixed(2)}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-4 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
			<p class="text-xs text-slate-500 dark:text-slate-400">
				<strong>Note:</strong> These are estimated percentages based on industry averages and product-specific research.
				Actual breakdowns may vary by manufacturer and region.
			</p>
		</div>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
		<!-- Lifecycle Negatives -->
		<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
			<h2 class="text-xl font-bold mb-6 flex items-center">
				<span class="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-900/30 flex items-center justify-center mr-3">
					<Factory class="w-4 h-4 text-stone-600 dark:text-stone-400" />
				</span>
				Lifecycle Negatives
			</h2>
			<div class="space-y-6">
				<div class="flex items-start space-x-3">
					<Leaf class="w-5 h-5 text-slate-400 mt-1" />
					<div class="flex-1">
						<div class="flex justify-between mb-1">
							<span class="font-medium">Carbon Footprint</span>
							<span class="text-sm text-slate-600 dark:text-slate-400">{product.assessment.negatives.carbon} kg CO₂e</span>
						</div>
						<p class="text-xs text-slate-500">Total greenhouse gas emissions from production to disposal</p>
					</div>
				</div>
				<div class="flex items-start space-x-3">
					<Droplets class="w-5 h-5 text-slate-400 mt-1" />
					<div class="flex-1">
						<div class="flex justify-between mb-1">
							<span class="font-medium">Water Usage</span>
							<span class="text-sm text-slate-600 dark:text-slate-400">{product.assessment.negatives.water} liters</span>
						</div>
						<p class="text-xs text-slate-500">Total water consumed throughout product lifecycle</p>
					</div>
				</div>
				<div class="flex items-start space-x-3">
					<Trash2 class="w-5 h-5 text-slate-400 mt-1" />
					<div class="flex-1">
						<div class="flex justify-between mb-1">
							<span class="font-medium">Waste Generated</span>
							<span class="text-sm text-slate-600 dark:text-slate-400">{product.assessment.negatives.waste} kg</span>
						</div>
						<p class="text-xs text-slate-500">Total waste produced during manufacturing and disposal</p>
					</div>
				</div>
				<div class="flex items-start space-x-3">
					<Mountain class="w-5 h-5 text-slate-400 mt-1" />
					<div class="flex-1">
						<div class="flex justify-between mb-1">
							<span class="font-medium">Land Use</span>
							<span class="text-sm text-slate-600 dark:text-slate-400">{product.assessment.negatives.landUse} m²</span>
						</div>
						<p class="text-xs text-slate-500">Land area required for raw materials and production</p>
					</div>
				</div>
				<div>
					<div class="flex items-center space-x-3 mb-2">
						<Factory class="w-5 h-5 text-slate-400" />
						<span class="font-medium">Pollution Score</span>
					</div>
					<ScoreBar score={10 - product.assessment.negatives.pollution} label="Lower is better (inverted)" />
				</div>
			</div>
		</div>

		<!-- Lifecycle Positives -->
		<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
			<h2 class="text-xl font-bold mb-6 flex items-center">
				<span class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mr-3">
					<CheckCircle class="w-4 h-4 text-slate-700 dark:text-slate-300" />
				</span>
				Lifecycle Positives
			</h2>
			<div class="space-y-6">
				<div class="flex items-center space-x-3">
					<div class={`w-5 h-5 rounded-full flex items-center justify-center ${product.assessment.positives.livingWages ? 'bg-emerald-600 dark:bg-emerald-700' : 'bg-stone-600 dark:bg-stone-700'}`}>
						<CheckCircle class="w-3 h-3 text-white" />
					</div>
					<span class="font-medium">Living Wages Paid</span>
					<span class={`text-sm ${product.assessment.positives.livingWages ? 'text-emerald-700 dark:text-emerald-400' : 'text-stone-700 dark:text-stone-400'}`}>
						{product.assessment.positives.livingWages ? 'Yes' : 'No'}
					</span>
				</div>
				<div>
					<div class="flex items-center space-x-3 mb-3">
						<Leaf class="w-5 h-5 text-slate-600 dark:text-slate-400" />
						<span class="font-medium">Environmental Improvements</span>
					</div>
					<ul class="space-y-2 pl-8">
						{#each product.assessment.positives.environmentalImprovements as improvement}
							<li class="text-sm text-slate-600 dark:text-slate-400 flex items-center">
								<span class="w-1.5 h-1.5 bg-slate-500 dark:bg-slate-600 rounded-full mr-2"></span>
								{improvement}
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<div class="flex items-center space-x-3 mb-2">
						<Recycle class="w-5 h-5 text-slate-600 dark:text-slate-400" />
						<span class="font-medium">Recyclability</span>
						<span class="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded">
							{product.assessment.positives.recyclability.materialType}
						</span>
					</div>
					<div class="space-y-2">
						<div>
							<div class="flex justify-between text-xs mb-1">
								<span>Nominal Recyclability</span>
								<span>{product.assessment.positives.recyclability.percentage}%</span>
							</div>
							<div class="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
								<div class="h-full bg-slate-500 dark:bg-slate-600" style="width: {product.assessment.positives.recyclability.percentage}%"></div>
							</div>
						</div>
						{#if product.assessment.positives.recyclability.downcyclingPenalty > 0}
							<div>
								<div class="flex justify-between text-xs mb-1">
									<span class="text-amber-700 dark:text-amber-400">Downcycling Penalty</span>
									<span class="text-amber-700 dark:text-amber-400">-{Math.round(product.assessment.positives.recyclability.downcyclingPenalty * 100)}%</span>
								</div>
							</div>
						{/if}
						<div>
							<div class="flex justify-between text-xs mb-1">
								<span class="font-medium">Effective Recyclability</span>
								<span class="font-medium">{product.assessment.positives.recyclability.effectiveRecyclability}%</span>
							</div>
							<div class="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
								<div class="h-full bg-emerald-600 dark:bg-emerald-700" style="width: {product.assessment.positives.recyclability.effectiveRecyclability}%"></div>
							</div>
						</div>
						<p class="text-xs text-slate-500 dark:text-slate-400 mt-2">
							{product.assessment.positives.recyclability.notes}
						</p>
					</div>
				</div>
				<div>
					<div class="flex items-center space-x-3 mb-2">
						<Wrench class="w-5 h-5 text-slate-600 dark:text-slate-400" />
						<span class="font-medium">Repairability</span>
					</div>
					<ScoreBar score={product.assessment.positives.repairability} label="Ease of repair" />
				</div>
			</div>
		</div>

		<!-- Health Impacts -->
		<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
			<h2 class="text-xl font-bold mb-6 flex items-center">
				<span class="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-900/30 flex items-center justify-center mr-3">
					<Heart class="w-4 h-4 text-stone-600 dark:text-stone-400" />
				</span>
				Health Impacts
			</h2>
			<div class="space-y-6">
				<div>
					<div class="mb-2">
						<span class="font-medium">Overall Health Safety Score</span>
					</div>
					<ScoreBar score={product.assessment.healthImpacts.score} label="10 = Safest" />
				</div>
				{#if product.assessment.healthImpacts.concerns.length > 0}
					<div>
						<div class="flex items-center space-x-2 mb-3">
							<AlertTriangle class="w-5 h-5 text-amber-700 dark:text-amber-400" />
							<span class="font-medium">Health Concerns</span>
						</div>
						<ul class="space-y-2 pl-7">
							{#each product.assessment.healthImpacts.concerns as concern}
								<li class="text-sm text-slate-600 dark:text-slate-400 flex items-center">
									<span class="w-1.5 h-1.5 bg-amber-600 dark:bg-amber-700 rounded-full mr-2"></span>
									{concern}
								</li>
							{/each}
						</ul>
					</div>
				{/if}
				{#if product.assessment.healthImpacts.benefits.length > 0}
					<div>
						<div class="flex items-center space-x-2 mb-3">
							<CheckCircle class="w-5 h-5 text-slate-600 dark:text-slate-400" />
							<span class="font-medium">Health Benefits</span>
						</div>
						<ul class="space-y-2 pl-7">
							{#each product.assessment.healthImpacts.benefits as benefit}
								<li class="text-sm text-slate-600 dark:text-slate-400 flex items-center">
									<span class="w-1.5 h-1.5 bg-slate-500 dark:bg-slate-600 rounded-full mr-2"></span>
									{benefit}
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		</div>

		<!-- Use and Quality -->
		<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
			<h2 class="text-xl font-bold mb-6 flex items-center">
				<span class="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-900/30 flex items-center justify-center mr-3">
					<Star class="w-4 h-4 text-stone-600 dark:text-stone-400" />
				</span>
				Use & Quality
			</h2>
			<div class="space-y-6">
				<ScoreBar score={product.assessment.useAndQuality.durability} label="Durability" />
				<ScoreBar score={product.assessment.useAndQuality.functionality} label="Functionality" />
				<ScoreBar score={product.assessment.useAndQuality.userSatisfaction} label="User Satisfaction" />
			</div>
		</div>
	</div>
</div>
