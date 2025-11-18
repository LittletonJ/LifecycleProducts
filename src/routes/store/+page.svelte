<script lang="ts">
	import { Store, Clock, Bell, ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Store - LifecycleProducts</title>
	<meta name="description" content="Shop sustainable products with verified lifecycle assessments" />
</svelte:head>

<div class="min-h-[60vh] flex items-center justify-center px-4">
	<div class="max-w-2xl text-center">
		<div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 mb-6">
			<Store class="w-10 h-10" />
		</div>

		<h1 class="text-4xl font-bold mb-4">Store Coming Soon</h1>

		<p class="text-lg text-slate-600 dark:text-slate-400 mb-8">
			We're building a marketplace where you can purchase products with verified lifecycle assessments.
			Our store will feature directly made products, affiliate options, and quality used alternatives.
		</p>

		<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-8">
			<h2 class="text-xl font-semibold mb-4 flex items-center justify-center">
				<Clock class="w-5 h-5 mr-2 text-slate-600 dark:text-slate-400" />
				What to Expect
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
				<div class="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
					<h3 class="font-semibold mb-2">Directly Made</h3>
					<p class="text-slate-600 dark:text-slate-400">
						Products we've verified meet our sustainability standards
					</p>
				</div>
				<div class="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
					<h3 class="font-semibold mb-2">Affiliates</h3>
					<p class="text-slate-600 dark:text-slate-400">
						Curated links to trusted retailers with transparent assessments
					</p>
				</div>
				<div class="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
					<h3 class="font-semibold mb-2">Used Options</h3>
					<p class="text-slate-600 dark:text-slate-400">
						Pre-owned products to extend lifecycles and reduce waste
					</p>
				</div>
			</div>
		</div>

		<div class="space-y-4">
			<p class="text-slate-500 dark:text-slate-400">
				In the meantime, explore our product assessments to learn about sustainable alternatives.
			</p>
			<a
				href="/assessments"
				class="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
			>
				Browse Assessments
				<ArrowRight class="w-5 h-5 ml-2" />
			</a>
		</div>
	</div>
</div>
