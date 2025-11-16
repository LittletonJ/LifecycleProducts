<script lang="ts">
	import {
		BookOpen,
		ArrowRight,
		Leaf,
		Heart,
		Wrench,
		Calculator,
		PieChart,
		CheckCircle2,
		Factory
	} from 'lucide-svelte';

	const methodologyPages = [
		{
			href: '/methodology/lifecycle-negatives',
			title: 'Lifecycle Negatives',
			description: 'Environmental costs including carbon footprint, water usage, waste, land use, and pollution',
			icon: Factory,
			color: 'bg-red-100 dark:bg-red-900/30',
			textColor: 'text-red-600 dark:text-red-400'
		},
		{
			href: '/methodology/lifecycle-positives',
			title: 'Lifecycle Positives',
			description: 'Positive impacts like fair wages, environmental improvements, recyclability, and repairability',
			icon: CheckCircle2,
			color: 'bg-emerald-100 dark:bg-emerald-900/30',
			textColor: 'text-emerald-600 dark:text-emerald-400'
		},
		{
			href: '/methodology/health-impacts',
			title: 'Health Impacts',
			description: 'Safety scores, health concerns, and benefits of products',
			icon: Heart,
			color: 'bg-rose-100 dark:bg-rose-900/30',
			textColor: 'text-rose-600 dark:text-rose-400'
		},
		{
			href: '/methodology/use-quality',
			title: 'Use & Quality',
			description: 'Durability, functionality, user satisfaction, and expected lifetime',
			icon: Wrench,
			color: 'bg-amber-100 dark:bg-amber-900/30',
			textColor: 'text-amber-600 dark:text-amber-400'
		},
		{
			href: '/methodology/lifetime-value',
			title: 'Lifetime Value Analysis',
			description: 'Cost per use, cost per year, and total lifetime value calculations',
			icon: Calculator,
			color: 'bg-emerald-100 dark:bg-emerald-900/30',
			textColor: 'text-emerald-600 dark:text-emerald-400'
		},
		{
			href: '/methodology/cost-breakdown',
			title: 'Cost Breakdown',
			description: 'How product prices are distributed across materials, labor, marketing, and profit',
			icon: PieChart,
			color: 'bg-purple-100 dark:bg-purple-900/30',
			textColor: 'text-purple-600 dark:text-purple-400'
		}
	];
</script>

<svelte:head>
	<title>Methodology - LifecycleProducts</title>
	<meta name="description" content="Learn how we assess products for environmental impact, health, and quality" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Header -->
	<div class="text-center mb-12">
		<div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
			<BookOpen class="w-8 h-8" />
		</div>
		<h1 class="text-4xl font-bold mb-4">Our Methodology</h1>
		<p class="text-lg text-slate-600 dark:text-slate-400">
			How we assess products to give you the complete picture of their true impact
		</p>
	</div>

	<!-- Introduction -->
	<div class="prose dark:prose-invert max-w-none mb-12">
		<p class="text-lg">
			Every product assessment on LifecycleProducts follows a rigorous, transparent methodology designed to evaluate
			the full impact of a product from cradle to grave. Our goal is to help you make informed decisions by providing
			comprehensive data on environmental impact, health implications, and overall quality.
		</p>
	</div>

	<!-- Methodology Categories Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
		{#each methodologyPages as page}
			<a
				href={page.href}
				class="group bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
			>
				<div class="flex items-start space-x-4">
					<div class="w-12 h-12 rounded-lg {page.color} flex items-center justify-center flex-shrink-0">
						<page.icon class="w-6 h-6 {page.textColor}" />
					</div>
					<div class="flex-1">
						<h2 class="text-lg font-bold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
							{page.title}
						</h2>
						<p class="text-sm text-slate-600 dark:text-slate-400">
							{page.description}
						</p>
					</div>
					<ArrowRight class="w-5 h-5 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex-shrink-0 mt-1" />
				</div>
			</a>
		{/each}
	</div>

	<!-- Data Sources -->
	<div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6">
		<h2 class="text-xl font-bold mb-4">Data Sources</h2>
		<p class="text-slate-600 dark:text-slate-400 mb-4">
			Our assessments are based on research from multiple sources:
		</p>
		<ul class="space-y-2 text-slate-600 dark:text-slate-400">
			<li>• Published lifecycle assessment (LCA) studies</li>
			<li>• Manufacturer disclosures and certifications</li>
			<li>• Third-party testing organizations</li>
			<li>• Environmental databases (e.g., Ecoinvent, GaBi)</li>
			<li>• Consumer product safety databases</li>
			<li>• User reviews and satisfaction surveys</li>
		</ul>
	</div>
</div>
