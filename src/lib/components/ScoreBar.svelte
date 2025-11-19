<script lang="ts">
	interface Props {
		score: number;
		maxScore?: number;
		label: string;
		showValue?: boolean;
	}

	let { score, maxScore = 10, label, showValue = true }: Props = $props();

	const percentage = (score / maxScore) * 100;

	function getColor(pct: number): string {
		if (pct >= 80) return 'bg-emerald-600 dark:bg-emerald-700';
		if (pct >= 60) return 'bg-slate-500 dark:bg-slate-600';
		if (pct >= 40) return 'bg-amber-600 dark:bg-amber-700';
		if (pct >= 20) return 'bg-stone-600 dark:bg-stone-700';
		return 'bg-stone-700 dark:bg-stone-800';
	}
</script>

<div class="space-y-1">
	<div class="flex justify-between text-sm">
		<span class="text-slate-600 dark:text-slate-400">{label}</span>
		{#if showValue}
			<span class="font-medium">{score}/{maxScore}</span>
		{/if}
	</div>
	<div class="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
		<div
			class="h-full rounded-full transition-all duration-500 {getColor(percentage)}"
			style="width: {percentage}%"
		></div>
	</div>
</div>
