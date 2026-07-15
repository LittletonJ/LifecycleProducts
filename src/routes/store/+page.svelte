<script lang="ts">
	import { base } from '$app/paths';
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Store — Lifecycle</title>
	<meta name="description" content="A store for products that survive our assessments — coming soon." />
</svelte:head>

<div class="mx-auto flex min-h-[60vh] max-w-3xl items-center px-6 py-16 lg:px-8">
	<div>
		<p class="eyebrow mb-4">Store · Coming soon</p>
		<h1 class="font-display mb-6 text-4xl leading-tight text-stone-900 md:text-5xl dark:text-stone-100">
			A store where the honest verdict comes first
		</h1>
		<p class="prose-quiet mb-12 max-w-xl text-lg">
			Only products that survive our assessments — with the break-even math and the caveats
			printed right next to the buy button. Secondhand options listed before new ones,
			because that's usually the better answer.
		</p>

		<div class="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
			<div>
				<p class="mb-2 text-sm font-medium text-stone-800 dark:text-stone-200">Used first</p>
				<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
					Pre-owned listings shown before new — near-zero marginal footprint.
				</p>
			</div>
			<div>
				<p class="mb-2 text-sm font-medium text-stone-800 dark:text-stone-200">Verdicts attached</p>
				<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
					Every listing links its full assessment, including when not to buy.
				</p>
			</div>
			<div>
				<p class="mb-2 text-sm font-medium text-stone-800 dark:text-stone-200">Spare parts</p>
				<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
					Repair parts stocked for everything we sell, for as long as we sell it.
				</p>
			</div>
		</div>

		<a
			href="{base}/assessments"
			class="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-300"
		>
			Browse the assessments
			<ArrowRight class="h-4 w-4" />
		</a>
	</div>
</div>
