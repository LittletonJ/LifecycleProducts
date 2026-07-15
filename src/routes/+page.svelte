<script lang="ts">
	import { base } from '$app/paths';
	import { ArrowRight } from 'lucide-svelte';
	import { products, verdictLabels } from '$lib/data/products';
	import ProductCard from '$lib/components/ProductCard.svelte';

	const featuredProducts = products.slice(0, 3);

	const principles = [
		{
			title: 'Compared against reality',
			text: 'Every product is judged against what it actually replaces — including the option of buying nothing. A steel bottle beats bottled water; it never beats the glass you already own.'
		},
		{
			title: 'The whole life, not the label',
			text: 'Manufacturing is only the beginning. Washing, energy, upkeep, and hygiene often outweigh production — a use phase most eco-marketing quietly ignores.'
		},
		{
			title: 'Break-even or it didn\'t happen',
			text: 'Durable "eco" products carry a bigger up-front footprint. We calculate how long each one takes to pay that back — and say plainly when it never will.'
		},
		{
			title: 'Honest about scale',
			text: 'A toothbrush swap saves grams; a flight skipped saves a tonne. We tell you which decisions are big and which are rounding errors.'
		}
	];
</script>

<svelte:head>
	<title>Lifecycle — Honest product assessments</title>
	<meta name="description" content="Lifecycle assessments that compare eco products against what they actually replace — including when the honest answer is to buy nothing." />
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-3xl px-6 pb-20 pt-24 md:pt-32 lg:px-8">
	<p class="eyebrow mb-6">Honest lifecycle assessments</p>
	<h1 class="font-display mb-8 text-4xl leading-[1.15] text-stone-900 md:text-6xl dark:text-stone-100">
		Most "eco" products are compared against the worst alternative.
		<span class="text-stone-400 dark:text-stone-500">We compare them against what you'd actually do.</span>
	</h1>
	<p class="prose-quiet mb-10 max-w-xl text-lg">
		Grounded in peer-reviewed lifecycle research, each assessment ends in a plain verdict:
		genuinely better, depends on your habits, or mostly marketing.
	</p>
	<div class="flex flex-wrap items-center gap-6">
		<a
			href="{base}/assessments"
			class="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-300"
		>
			Read the assessments
			<ArrowRight class="h-4 w-4" />
		</a>
		<a
			href="{base}/methodology"
			class="text-sm text-stone-500 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-800 dark:text-stone-400 dark:decoration-stone-600 dark:hover:text-stone-200"
		>
			How we judge
		</a>
	</div>
</section>

<!-- Verdict legend -->
<section class="hairline border-y">
	<div class="mx-auto grid max-w-3xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-3 lg:px-8">
		<div class="flex items-start gap-3">
			<span class="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-moss-500"></span>
			<div>
				<p class="text-sm font-medium text-stone-800 dark:text-stone-200">{verdictLabels.genuine}</p>
				<p class="mt-1 text-xs leading-relaxed text-stone-500 dark:text-stone-400">The rare product where the evidence holds up.</p>
			</div>
		</div>
		<div class="flex items-start gap-3">
			<span class="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-ochre-400"></span>
			<div>
				<p class="text-sm font-medium text-stone-800 dark:text-stone-200">{verdictLabels.conditional}</p>
				<p class="mt-1 text-xs leading-relaxed text-stone-500 dark:text-stone-400">A win under specific habits — we spell out which.</p>
			</div>
		</div>
		<div class="flex items-start gap-3">
			<span class="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-clay-400"></span>
			<div>
				<p class="text-sm font-medium text-stone-800 dark:text-stone-200">{verdictLabels.marginal}</p>
				<p class="mt-1 text-xs leading-relaxed text-stone-500 dark:text-stone-400">Real gains too small to justify the halo.</p>
			</div>
		</div>
	</div>
</section>

<!-- Principles -->
<section class="mx-auto max-w-3xl px-6 py-20 lg:px-8">
	<p class="eyebrow mb-10">How we judge</p>
	<div class="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
		{#each principles as principle, i}
			<div>
				<p class="font-display mb-3 text-lg text-stone-800 dark:text-stone-200">
					<span class="mr-2 text-stone-300 dark:text-stone-600">{String(i + 1).padStart(2, '0')}</span>
					{principle.title}
				</p>
				<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">{principle.text}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Featured assessments -->
<section class="hairline border-t">
	<div class="mx-auto max-w-5xl px-6 py-20 lg:px-8">
		<div class="mb-10 flex items-baseline justify-between">
			<p class="eyebrow">Recent assessments</p>
			<a
				href="{base}/assessments"
				class="text-sm text-stone-500 transition-colors hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200"
			>
				View all →
			</a>
		</div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			{#each featuredProducts as product}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</section>
