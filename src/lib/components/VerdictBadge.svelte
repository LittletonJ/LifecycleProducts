<script lang="ts">
	import type { VerdictTier } from '$lib/data/products';

	interface Props {
		tier: VerdictTier;
		size?: 'sm' | 'lg';
	}

	let { tier, size = 'sm' }: Props = $props();

	const config: Record<VerdictTier, { label: string; dot: string; text: string }> = {
		genuine: {
			label: 'Genuinely better',
			dot: 'bg-moss-500',
			text: 'text-moss-700 dark:text-moss-300'
		},
		conditional: {
			label: 'Depends on your habits',
			dot: 'bg-ochre-400',
			text: 'text-ochre-700 dark:text-ochre-300'
		},
		marginal: {
			label: 'Mostly marketing',
			dot: 'bg-clay-400',
			text: 'text-clay-700 dark:text-clay-300'
		}
	};

	const c = config[tier];
</script>

<span class="inline-flex items-center gap-2 {c.text} {size === 'lg' ? 'text-sm' : 'text-xs'} font-medium uppercase tracking-[0.14em]">
	<span class="rounded-full {c.dot} {size === 'lg' ? 'h-2 w-2' : 'h-1.5 w-1.5'}"></span>
	{c.label}
</span>
