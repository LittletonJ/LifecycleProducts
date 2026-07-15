<script lang="ts">
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import ScoreBar from '$lib/components/ScoreBar.svelte';
	import VerdictBadge from '$lib/components/VerdictBadge.svelte';
	import { ArrowLeft, ArrowUpRight } from 'lucide-svelte';

	let { data }: { data: PageData } = $props();
	const product = data.product;
	const a = product.assessment;

	const lifetimeUses = Math.round(product.usesPerYear * a.lifetime);
	const costPerUse = product.price / lifetimeUses;
	const costPerYear = product.price / a.lifetime;

	function formatCost(value: number): string {
		if (value < 1) return `${(value * 100).toFixed(1)}¢`;
		return `$${value.toFixed(2)}`;
	}

	function formatLifetime(years: number): string {
		return years >= 1 ? `${years} yr${years !== 1 ? 's' : ''}` : `${Math.round(years * 12)} mo`;
	}

	const breakEven = a.comparison.breakEven;

	function breakEvenStat(): string {
		if (breakEven.value === null) return 'Never';
		if (breakEven.value === 0) return 'Immediate';
		return `~${breakEven.value} ${breakEven.unit}`;
	}

	const achievabilityLabel: Record<string, string> = {
		easy: 'easy to achieve',
		realistic: 'realistic for most people',
		demanding: 'demands commitment',
		never: 'unachievable'
	};

	const keyStats = [
		{ label: 'Payback vs. baseline', value: breakEvenStat(), detail: achievabilityLabel[breakEven.achievability] },
		{ label: 'To manufacture', value: `${a.comparison.productionCarbon} kg CO₂e`, detail: `baseline habit: ~${a.comparison.baselineAnnualCarbon} kg/yr` },
		{ label: 'Realistic lifetime', value: formatLifetime(a.lifetime), detail: `${lifetimeUses.toLocaleString()} uses` },
		{ label: 'Cost per use', value: formatCost(costPerUse), detail: `$${costPerYear.toFixed(2)} per year` }
	];

	const costBreakdownItems = [
		{ label: 'Raw materials', value: product.costBreakdown.rawMaterials },
		{ label: 'Manufacturing', value: product.costBreakdown.manufacturing },
		{ label: 'Labor', value: product.costBreakdown.labor },
		{ label: 'Transportation', value: product.costBreakdown.transportation },
		{ label: 'Marketing', value: product.costBreakdown.marketing },
		{ label: 'Retail', value: product.costBreakdown.retail },
		{ label: 'Profit', value: product.costBreakdown.profit }
	];

	const negativeItems = [
		{ label: 'Carbon (production)', value: `${a.negatives.carbon} kg CO₂e` },
		{ label: 'Irrigation & process water', value: `${a.negatives.water} L` },
		{ label: 'Waste', value: `${a.negatives.waste} kg` },
		{ label: 'Land use', value: `${a.negatives.landUse} m²` }
	];

	const hygieneRiskLabel: Record<string, string> = {
		low: 'Low',
		medium: 'Worth attention',
		high: 'Significant'
	};
</script>

<svelte:head>
	<title>{product.name} — Lifecycle</title>
	<meta name="description" content="{a.verdict.headline} — an honest lifecycle assessment of the {product.name.toLowerCase()}." />
</svelte:head>

<div class="mx-auto max-w-3xl px-6 py-16 lg:px-8">
	<a
		href="{base}/assessments"
		class="mb-12 inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200"
	>
		<ArrowLeft class="h-3.5 w-3.5" />
		All assessments
	</a>

	<!-- Header: verdict first -->
	<header class="mb-14">
		<p class="eyebrow mb-4">{product.category}</p>
		<h1 class="font-display mb-5 text-4xl text-stone-900 md:text-5xl dark:text-stone-100">
			{product.name}
		</h1>
		<VerdictBadge tier={a.verdict.tier} size="lg" />
		<p class="font-display mt-4 text-xl leading-snug text-stone-700 md:text-2xl dark:text-stone-300">
			{a.verdict.headline}
		</p>
	</header>

	<!-- The bottom line -->
	<section class="mb-14">
		<h2 class="eyebrow mb-4">The bottom line</h2>
		<p class="prose-quiet text-[1.0625rem]">{a.verdict.bottomLine}</p>

		{#if a.verdict.smarterMove}
			<div class="mt-6 border-l-2 border-moss-400 pl-5 dark:border-moss-600">
				<p class="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-moss-700 dark:text-moss-400">The smarter move</p>
				<p class="text-sm leading-relaxed text-stone-600 dark:text-stone-400">{a.verdict.smarterMove}</p>
			</div>
		{/if}
	</section>

	<!-- Key numbers -->
	<section class="mb-14">
		<div class="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 md:grid-cols-4 dark:border-[#2e2a26] dark:bg-[#2e2a26]">
			{#each keyStats as stat}
				<div class="bg-white p-5 dark:bg-[#1e1b18]">
					<p class="eyebrow mb-2 !text-[0.625rem]">{stat.label}</p>
					<p class="font-display text-xl text-stone-900 dark:text-stone-100">{stat.value}</p>
					<p class="mt-1 text-xs text-stone-500 dark:text-stone-500">{stat.detail}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Compared against what? -->
	<section class="mb-14">
		<h2 class="eyebrow mb-4">Compared against what?</h2>
		<p class="font-display mb-3 text-lg text-stone-800 dark:text-stone-200">{a.comparison.baseline}</p>
		<p class="prose-quiet mb-6 text-sm">{a.comparison.baselineNote}</p>
		<div class="surface p-5">
			<p class="mb-1 text-sm font-medium text-stone-800 dark:text-stone-200">
				Break-even: {breakEvenStat()}
				<span class="font-normal text-stone-500 dark:text-stone-400"> · vs. {breakEven.against}</span>
			</p>
			<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">{breakEven.note}</p>
		</div>
	</section>

	<!-- What marketing won't tell you -->
	<section class="mb-14">
		<h2 class="eyebrow mb-5">What marketing won't tell you</h2>
		<ul class="space-y-3.5">
			{#each a.verdict.caveats as caveat}
				<li class="flex gap-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
					<span class="mt-[0.55rem] h-1 w-1 flex-shrink-0 rounded-full bg-clay-400"></span>
					{caveat}
				</li>
			{/each}
		</ul>
	</section>

	<!-- Life in use -->
	<section class="mb-14">
		<h2 class="eyebrow mb-5">Life in use</h2>
		<div class="surface space-y-6 p-6">
			<div>
				<div class="mb-2 flex items-baseline justify-between">
					<span class="text-sm font-medium text-stone-800 dark:text-stone-200">Use phase share of lifetime footprint</span>
					<span class="font-display text-lg text-stone-900 dark:text-stone-100">~{a.usePhase.shareOfFootprint}%</span>
				</div>
				<div class="h-px w-full bg-stone-200 dark:bg-stone-700">
					<div class="h-[3px] -translate-y-[1px] rounded-full bg-moss-500 dark:bg-moss-400" style="width: {a.usePhase.shareOfFootprint}%"></div>
				</div>
				<p class="mt-2 text-xs text-stone-500 dark:text-stone-500">
					Washing, energy, and upkeep after purchase — the part most eco-marketing ignores.
				</p>
			</div>
			<ul class="space-y-2.5">
				{#each a.usePhase.drivers as driver}
					<li class="flex gap-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
						<span class="mt-[0.55rem] h-1 w-1 flex-shrink-0 rounded-full bg-stone-400"></span>
						{driver}
					</li>
				{/each}
			</ul>
			{#if a.usePhase.hygiene.risk !== 'low'}
				<div class="hairline border-t pt-5">
					<p class="mb-1.5 text-sm font-medium text-stone-800 dark:text-stone-200">
						Cleanliness: {hygieneRiskLabel[a.usePhase.hygiene.risk]}
					</p>
					<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">{a.usePhase.hygiene.note}</p>
				</div>
			{/if}
			<div class="hairline border-t pt-5">
				<p class="mb-1.5 text-sm font-medium text-stone-800 dark:text-stone-200">For the lifetime claim to hold</p>
				<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">{a.usePhase.careRequired}</p>
			</div>
		</div>
	</section>

	<!-- The details -->
	<section class="mb-14">
		<h2 class="eyebrow mb-5">The details</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<!-- Production footprint -->
			<div class="surface p-6">
				<h3 class="mb-4 text-sm font-medium text-stone-800 dark:text-stone-200">Production footprint</h3>
				<dl class="space-y-3">
					{#each negativeItems as item}
						<div class="flex items-baseline justify-between gap-4">
							<dt class="text-sm text-stone-500 dark:text-stone-400">{item.label}</dt>
							<dd class="text-sm tabular-nums text-stone-700 dark:text-stone-300">{item.value}</dd>
						</div>
					{/each}
				</dl>
			</div>

			<!-- End of life -->
			<div class="surface p-6">
				<h3 class="mb-4 text-sm font-medium text-stone-800 dark:text-stone-200">End of life</h3>
				<div class="mb-4 space-y-4">
					<ScoreBar
						score={a.positives.recyclability.effectiveRecyclability}
						maxScore={100}
						label="Effective recyclability ({a.positives.recyclability.materialType})"
					/>
					<ScoreBar score={a.positives.repairability} label="Repairability" />
				</div>
				<p class="text-xs leading-relaxed text-stone-500 dark:text-stone-500">
					{a.positives.recyclability.notes}
				</p>
			</div>

			<!-- Health -->
			<div class="surface p-6">
				<h3 class="mb-4 text-sm font-medium text-stone-800 dark:text-stone-200">Health</h3>
				<div class="mb-4">
					<ScoreBar score={a.healthImpacts.score} label="Safety score" />
				</div>
				<ul class="space-y-2">
					{#each a.healthImpacts.benefits as benefit}
						<li class="flex gap-2.5 text-xs leading-relaxed text-stone-500 dark:text-stone-400">
							<span class="mt-[0.4rem] h-1 w-1 flex-shrink-0 rounded-full bg-moss-400"></span>
							{benefit}
						</li>
					{/each}
					{#each a.healthImpacts.concerns as concern}
						<li class="flex gap-2.5 text-xs leading-relaxed text-stone-500 dark:text-stone-400">
							<span class="mt-[0.4rem] h-1 w-1 flex-shrink-0 rounded-full bg-clay-400"></span>
							{concern}
						</li>
					{/each}
				</ul>
			</div>

			<!-- Quality -->
			<div class="surface p-6">
				<h3 class="mb-4 text-sm font-medium text-stone-800 dark:text-stone-200">Use & quality</h3>
				<div class="space-y-4">
					<ScoreBar score={a.useAndQuality.durability} label="Durability" />
					<ScoreBar score={a.useAndQuality.functionality} label="Functionality" />
					<ScoreBar score={a.useAndQuality.userSatisfaction} label="User satisfaction" />
				</div>
			</div>
		</div>

		<!-- What the genuine improvements are -->
		<div class="surface mt-4 p-6">
			<h3 class="mb-4 text-sm font-medium text-stone-800 dark:text-stone-200">What's genuinely better about it</h3>
			<ul class="space-y-2.5">
				{#each a.positives.environmentalImprovements as improvement}
					<li class="flex gap-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
						<span class="mt-[0.55rem] h-1 w-1 flex-shrink-0 rounded-full bg-moss-400"></span>
						{improvement}
					</li>
				{/each}
			</ul>
		</div>

		<!-- Where the price goes -->
		<div class="surface mt-4 p-6">
			<h3 class="mb-1 text-sm font-medium text-stone-800 dark:text-stone-200">Where the ${product.price.toFixed(0)} goes</h3>
			<p class="mb-5 text-xs text-stone-500 dark:text-stone-500">Estimated from industry averages — actual splits vary by brand.</p>
			<div class="mb-5 flex h-1.5 overflow-hidden rounded-full bg-stone-100 dark:bg-stone-800">
				{#each costBreakdownItems as item, i}
					<div
						class={i % 2 === 0 ? 'bg-stone-400 dark:bg-stone-500' : 'bg-stone-300 dark:bg-stone-600'}
						style="width: {item.value}%"
						title="{item.label}: {item.value}%"
					></div>
				{/each}
			</div>
			<div class="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
				{#each costBreakdownItems as item}
					<div class="flex items-baseline justify-between text-xs">
						<span class="text-stone-500 dark:text-stone-400">{item.label}</span>
						<span class="tabular-nums text-stone-600 dark:text-stone-300">{item.value}%</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Confidence & sources -->
	<section>
		<h2 class="eyebrow mb-4">How sure are we?</h2>
		<p class="mb-6 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
			<span class="font-medium capitalize text-stone-700 dark:text-stone-300">{a.confidence.level} confidence.</span>
			{a.confidence.note}
		</p>
		{#if product.sources.length > 0}
			<ul class="hairline divide-y divide-stone-200 border-t dark:divide-[#2e2a26]">
				{#each product.sources as source}
					<li>
						<a
							href={source.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex items-baseline justify-between gap-4 py-3.5"
						>
							<span class="text-sm text-stone-600 transition-colors group-hover:text-stone-900 dark:text-stone-400 dark:group-hover:text-stone-200">
								{source.title}
								<span class="text-stone-400 dark:text-stone-500"> — {source.org}, {source.year}</span>
							</span>
							<ArrowUpRight class="h-3.5 w-3.5 flex-shrink-0 text-stone-400 transition-colors group-hover:text-stone-600 dark:group-hover:text-stone-300" />
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</section>
</div>
