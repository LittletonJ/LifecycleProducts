<script lang="ts">
	import type { Product } from '$lib/data/products';
	import { Leaf, Heart, Clock, Star } from 'lucide-svelte';
	import ScoreBar from './ScoreBar.svelte';

	interface Props {
		product: Product;
	}

	let { product }: Props = $props();

	function getOverallScore(product: Product): number {
		const { assessment } = product;
		const healthScore = assessment.healthImpacts.score;
		const qualityScore = (assessment.useAndQuality.durability + assessment.useAndQuality.functionality + assessment.useAndQuality.userSatisfaction) / 3;
		const sustainabilityScore = (10 - assessment.negatives.pollution) * 0.5 + (assessment.positives.recyclability.effectiveRecyclability / 10) * 0.5;
		return Math.round((healthScore + qualityScore + sustainabilityScore) / 3 * 10) / 10;
	}
</script>

<a
	href="/assessments/{product.id}"
	class="block bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden group cursor-pointer"
>
	<article class="p-6">
		<div class="flex items-start justify-between mb-4">
			<div>
				<span class="text-xs font-medium px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full">
					{product.category}
				</span>
				<h3 class="text-lg font-semibold mt-2 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
					{product.name}
				</h3>
			</div>
			<div class="text-right">
				<div class="text-2xl font-bold text-slate-700 dark:text-slate-300">
					{getOverallScore(product)}
				</div>
				<div class="text-xs text-slate-500">Overall</div>
			</div>
		</div>

		<p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
			{product.description}
		</p>

		<div class="space-y-3 mb-4">
			<div class="flex items-center space-x-2 text-sm">
				<Heart class="w-4 h-4 text-stone-600 dark:text-stone-400" />
				<ScoreBar score={product.assessment.healthImpacts.score} label="Health" />
			</div>
			<div class="flex items-center space-x-2 text-sm">
				<Star class="w-4 h-4 text-slate-600 dark:text-slate-400" />
				<ScoreBar score={Math.round((product.assessment.useAndQuality.durability + product.assessment.useAndQuality.functionality + product.assessment.useAndQuality.userSatisfaction) / 3 * 10) / 10} label="Quality" />
			</div>
			<div class="flex items-center space-x-2 text-sm">
				<Leaf class="w-4 h-4 text-slate-700 dark:text-slate-300" />
				<ScoreBar score={Math.round(product.assessment.positives.recyclability.effectiveRecyclability / 10)} label="Sustainability" />
			</div>
		</div>

		<div class="flex items-center text-sm">
			<div class="flex items-center space-x-1 text-slate-500">
				<Clock class="w-4 h-4" />
				<span>
					{product.assessment.lifetime >= 1
						? `${product.assessment.lifetime} year${product.assessment.lifetime !== 1 ? 's' : ''}`
						: `${Math.round(product.assessment.lifetime * 12)} months`}
				</span>
			</div>
		</div>
	</article>
</a>
