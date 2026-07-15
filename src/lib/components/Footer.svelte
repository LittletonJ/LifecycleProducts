<script lang="ts">
	import { base } from '$app/paths';
	import { Sun } from 'lucide-svelte';
</script>

<footer class="hairline mt-auto border-t">
	<div class="mx-auto max-w-5xl px-6 py-12 lg:px-8">
		<div class="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
			<div class="max-w-sm">
				<div class="mb-3 flex items-center gap-2.5">
					<span class="inline-block h-2 w-2 rounded-full bg-moss-500"></span>
					<span class="font-display text-stone-800 dark:text-stone-100">Lifecycle</span>
				</div>
				<p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
					Honest lifecycle assessments. We compare every product against what it actually
					replaces — including when the answer is "don't buy anything."
				</p>
			</div>
			<div class="flex gap-16">
				<div>
					<h4 class="eyebrow mb-4">Explore</h4>
					<ul class="space-y-2.5 text-sm">
						<li><a href="{base}/assessments" class="text-stone-500 transition-colors hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200">Assessments</a></li>
						<li><a href="{base}/methodology" class="text-stone-500 transition-colors hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200">Methodology</a></li>
						<li><a href="{base}/store" class="text-stone-500 transition-colors hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200">Store</a></li>
					</ul>
				</div>
				<div>
					<h4 class="eyebrow mb-4">Hosting</h4>
					<div class="flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400">
						<Sun class="h-3.5 w-3.5 text-ochre-400" />
						<span>Solar-powered Raspberry Pi</span>
					</div>
				</div>
			</div>
		</div>
		<div class="hairline mt-12 border-t pt-6 text-xs text-stone-400 dark:text-stone-500">
			<p>&copy; {new Date().getFullYear()} Lifecycle · A concept site for demonstration purposes only.</p>
		</div>
	</div>
</footer>
