<script lang="ts">
	import { base } from '$app/paths';
	import type { Product } from '$lib/data/products';
	import VerdictBadge from './VerdictBadge.svelte';

	interface Props {
		product: Product;
	}

	let { product }: Props = $props();

	const breakEven = product.assessment.comparison.breakEven;

	function breakEvenText(): string {
		if (breakEven.value === null) return 'Never breaks even';
		if (breakEven.value === 0) return 'Like-for-like swap';
		return `Pays off in ~${breakEven.value} ${breakEven.unit}`;
	}
</script>

<a
	href="{base}/assessments/{product.id}"
	class="surface group block p-7 transition-colors hover:border-stone-300 dark:hover:border-stone-600"
>
	<article>
		<div class="mb-4 flex items-center justify-between gap-4">
			<span class="eyebrow">{product.category}</span>
			<VerdictBadge tier={product.assessment.verdict.tier} />
		</div>

		<h3 class="font-display mb-2 text-xl text-stone-900 dark:text-stone-100">
			{product.name}
		</h3>

		<p class="mb-6 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
			{product.assessment.verdict.headline}
		</p>

		<div class="hairline flex items-center justify-between border-t pt-4 text-xs text-stone-500 dark:text-stone-400">
			<span>{breakEvenText()}</span>
			<span class="text-stone-400 transition-colors group-hover:text-stone-600 dark:text-stone-500 dark:group-hover:text-stone-300">Read assessment →</span>
		</div>
	</article>
</a>
