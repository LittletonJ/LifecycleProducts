<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import { verdictLabels } from '$lib/data/products';

	const downcyclingTable = [
		{ material: 'Steel, aluminum', penalty: '0%', reason: 'Infinitely recyclable without quality loss' },
		{ material: 'Glass', penalty: '0%', reason: 'Maintains purity through remelting' },
		{ material: 'Paper & cardboard', penalty: '10–30%', reason: 'Fibers shorten each cycle (5–7 loops max)' },
		{ material: 'Natural fibers', penalty: '10–35%', reason: 'Degrades; textile-to-textile recycling barely exists' },
		{ material: 'Single plastics', penalty: '50–70%', reason: 'Polymer chains break down; usually one cycle' },
		{ material: 'Mixed plastics & composites', penalty: '80–95%', reason: 'Separation impractical; mostly landfilled' }
	];

	const confidenceLevels = [
		{ level: 'High', text: 'Multiple independent peer-reviewed LCAs converge on the number.' },
		{ level: 'Medium', text: 'Grounded in real studies, but ranges are wide or assumptions drive the result.' },
		{ level: 'Low', text: 'Order-of-magnitude estimate from material proxies. Flagged, never hidden.' }
	];
</script>

<svelte:head>
	<title>Methodology — Lifecycle</title>
	<meta name="description" content="How we assess products: baseline comparisons, break-even analysis, use-phase impacts, and honest verdicts." />
</svelte:head>

<div class="mx-auto max-w-3xl px-6 py-16 lg:px-8">
	<header class="mb-16">
		<p class="eyebrow mb-4">Methodology</p>
		<h1 class="font-display mb-6 text-4xl leading-tight text-stone-900 md:text-5xl dark:text-stone-100">
			The question is never "is it green?" It's "greener than what?"
		</h1>
		<p class="prose-quiet text-lg">
			Eco-marketing compares products against the worst alternative — the bottled-water habit,
			the pan replaced yearly. We compare against what you would actually do, including buying
			nothing at all. This page is the whole system.
		</p>
	</header>

	<!-- 1. Baseline -->
	<section class="mb-16">
		<h2 class="font-display mb-4 text-2xl text-stone-900 dark:text-stone-100">
			<span class="mr-2 text-stone-300 dark:text-stone-600">01</span>The honest baseline
		</h2>
		<div class="prose-quiet space-y-4 text-[0.95rem]">
			<p>
				Every assessment names the product's real counterfactual. A steel bottle's baseline is
				not "365 plastic bottles a year" unless you actually bought 365 plastic bottles a year —
				for most people it's tap water in a cup they already own, and against that baseline the
				bottle never wins.
			</p>
			<p>
				The most sustainable product is almost always the one you already have. A new purchase
				is an environmental cost paid up front; only sustained, real displacement of a worse
				habit redeems it.
			</p>
		</div>
	</section>

	<!-- 2. Break-even -->
	<section class="mb-16">
		<h2 class="font-display mb-4 text-2xl text-stone-900 dark:text-stone-100">
			<span class="mr-2 text-stone-300 dark:text-stone-600">02</span>Break-even, or it didn't happen
		</h2>
		<div class="prose-quiet space-y-4 text-[0.95rem]">
			<p>
				Durable "eco" products carry a larger manufacturing footprint than the disposables they
				replace — a steel bottle embodies the carbon of dozens of PET bottles before its first
				refill. We state how long each product takes to pay that debt back, under what
				assumptions, and how realistic those assumptions are: <em>easy</em>, <em>realistic</em>,
				<em>demanding</em>, or <em>never</em>.
			</p>
			<p>
				Behavior is part of the math. Surveys show people own four to seven reusable bottles and
				half replace them within a year — a bottle abandoned before break-even is worse than the
				habit it was meant to fix.
			</p>
		</div>
	</section>

	<!-- 3. Use phase -->
	<section class="mb-16">
		<h2 class="font-display mb-4 text-2xl text-stone-900 dark:text-stone-100">
			<span class="mr-2 text-stone-300 dark:text-stone-600">03</span>The life after purchase
		</h2>
		<div class="prose-quiet space-y-4 text-[0.95rem]">
			<p>
				Manufacturing is often the smallest chapter. Heating wash water can rival a bottle's
				production footprint; washing and drying are a quarter to a third of a t-shirt's
				lifetime emissions; electricity is ~90% of an LED lamp's. Each assessment shows the use
				phase's share of the total and what drives it.
			</p>
			<p>
				This includes cleanliness — the part eco-marketing never mentions. Reusable bottles grow
				biofilm without daily washing; bamboo handles mold if they stay wet. Honest hygiene
				costs energy, and we count it rather than pretend the trade-off away.
			</p>
		</div>
	</section>

	<!-- 4. Verdicts -->
	<section class="mb-16">
		<h2 class="font-display mb-6 text-2xl text-stone-900 dark:text-stone-100">
			<span class="mr-2 text-stone-300 dark:text-stone-600">04</span>Three honest verdicts
		</h2>
		<div class="space-y-4">
			<div class="surface flex items-start gap-4 p-5">
				<span class="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-moss-500"></span>
				<div>
					<p class="mb-1 text-sm font-medium text-stone-800 dark:text-stone-200">{verdictLabels.genuine}</p>
					<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
						The evidence holds up against the honest baseline, the break-even is short, and the
						benefit survives realistic behavior. Rare by design.
					</p>
				</div>
			</div>
			<div class="surface flex items-start gap-4 p-5">
				<span class="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-ochre-400"></span>
				<div>
					<p class="mb-1 text-sm font-medium text-stone-800 dark:text-stone-200">{verdictLabels.conditional}</p>
					<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
						A genuine win under specific conditions — a habit truly displaced, a lifetime actually
						reached, a repair actually made. We spell out exactly which.
					</p>
				</div>
			</div>
			<div class="surface flex items-start gap-4 p-5">
				<span class="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-clay-400"></span>
				<div>
					<p class="mb-1 text-sm font-medium text-stone-800 dark:text-stone-200">{verdictLabels.marginal}</p>
					<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
						The improvement is real but tiny, oversold, or available more cheaply another way.
						Buying it is fine; believing the halo is not.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- 5. End of life -->
	<section class="mb-16">
		<h2 class="font-display mb-4 text-2xl text-stone-900 dark:text-stone-100">
			<span class="mr-2 text-stone-300 dark:text-stone-600">05</span>End of life, without the fiction
		</h2>
		<p class="prose-quiet mb-6 text-[0.95rem]">
			"Recyclable" on the label and recycled in reality are different things. We apply a
			downcycling penalty by material — and note when "compostable" requires steps nobody takes,
			or when only 22% of e-waste is ever formally processed.
		</p>
		<div class="surface overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="hairline border-b text-left">
						<th class="p-4 text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">Material</th>
						<th class="p-4 text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">Penalty</th>
						<th class="hidden p-4 text-xs font-medium uppercase tracking-wider text-stone-500 sm:table-cell dark:text-stone-400">Why</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-stone-100 dark:divide-[#2e2a26]">
					{#each downcyclingTable as row}
						<tr>
							<td class="p-4 text-stone-700 dark:text-stone-300">{row.material}</td>
							<td class="p-4 tabular-nums text-stone-600 dark:text-stone-400">{row.penalty}</td>
							<td class="hidden p-4 text-stone-500 sm:table-cell dark:text-stone-400">{row.reason}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="mt-3 text-xs text-stone-500 dark:text-stone-500">
			Effective recyclability = nominal % × (1 − penalty). A "70% recyclable" mixed-plastic product
			with an 85% penalty is effectively 10% recyclable.
		</p>
	</section>

	<!-- 6. Also weighed -->
	<section class="mb-16">
		<h2 class="font-display mb-6 text-2xl text-stone-900 dark:text-stone-100">
			<span class="mr-2 text-stone-300 dark:text-stone-600">06</span>Also weighed
		</h2>
		<div class="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
			<div>
				<p class="mb-2 text-sm font-medium text-stone-800 dark:text-stone-200">Health</p>
				<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
					Chemical exposure, coatings, microplastics, and hygiene in real use — scored on
					evidence, not fear. PTFE below its degradation point is not the same risk as PTFE
					above it.
				</p>
			</div>
			<div>
				<p class="mb-2 text-sm font-medium text-stone-800 dark:text-stone-200">Use & quality</p>
				<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
					Durability, functionality, satisfaction. A sustainable product people abandon is not
					sustainable — weight, upkeep, and annoyance are environmental variables.
				</p>
			</div>
			<div>
				<p class="mb-2 text-sm font-medium text-stone-800 dark:text-stone-200">Repairability</p>
				<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
					Scored on the real failure points. A replaceable driver on a lamp matters; a
					"50,000-hour LED" glued to a disposable driver does not.
				</p>
			</div>
			<div>
				<p class="mb-2 text-sm font-medium text-stone-800 dark:text-stone-200">True cost</p>
				<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
					Cost per use and per year over a realistic lifetime, plus an estimate of where the
					purchase price actually goes — including how much buys marketing.
				</p>
			</div>
		</div>
	</section>

	<!-- 7. Confidence -->
	<section class="mb-16">
		<h2 class="font-display mb-4 text-2xl text-stone-900 dark:text-stone-100">
			<span class="mr-2 text-stone-300 dark:text-stone-600">07</span>How sure we are
		</h2>
		<p class="prose-quiet mb-6 text-[0.95rem]">
			LCA numbers are estimates with wide error bars, and single-figure "X% better" claims rarely
			survive scrutiny — the fashion industry's Higg label was suspended for exactly that. Every
			assessment carries a confidence level and its sources; a rough estimate that captures the
			right magnitude beats false precision.
		</p>
		<div class="space-y-3">
			{#each confidenceLevels as item}
				<div class="flex gap-4 text-sm">
					<span class="w-16 flex-shrink-0 font-medium text-stone-800 dark:text-stone-200">{item.level}</span>
					<span class="leading-relaxed text-stone-500 dark:text-stone-400">{item.text}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- References link -->
	<a
		href="/methodology/references"
		class="surface group flex items-center justify-between p-6 transition-colors hover:border-stone-300 dark:hover:border-stone-600"
	>
		<div>
			<p class="mb-1 text-sm font-medium text-stone-800 dark:text-stone-200">Research sources & references</p>
			<p class="text-sm text-stone-500 dark:text-stone-400">
				The studies and databases behind the methodology, in one place.
			</p>
		</div>
		<ArrowRight class="h-4 w-4 flex-shrink-0 text-stone-400 transition-transform group-hover:translate-x-1" />
	</a>
</div>
