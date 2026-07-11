<script lang="ts">
	interface Props {
		score: number;
		maxScore?: number;
		label: string;
		showValue?: boolean;
	}

	let { score, maxScore = 10, label, showValue = true }: Props = $props();

	const percentage = Math.max(0, Math.min(100, (score / maxScore) * 100));
</script>

<div class="w-full">
	<div class="mb-1.5 flex items-baseline justify-between gap-4">
		<span class="text-sm text-stone-600 dark:text-stone-400">{label}</span>
		{#if showValue}
			<span class="text-xs tabular-nums text-stone-500 dark:text-stone-500">{score}/{maxScore}</span>
		{/if}
	</div>
	<div class="h-px w-full bg-stone-200 dark:bg-stone-700">
		<div
			class="h-[3px] -translate-y-[1px] rounded-full bg-moss-500 transition-all duration-700 dark:bg-moss-400"
			style="width: {percentage}%"
		></div>
	</div>
</div>
