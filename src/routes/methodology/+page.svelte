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
		Factory,
		Target
	} from 'lucide-svelte';

	const methodologyPages = [
		{
			href: '/methodology/assessment-framework',
			title: 'Assessment Framework',
			description: 'Which product categories have the highest impact? Priority matrix for where to focus your assessments.',
			icon: Target,
			color: 'bg-slate-200 dark:bg-slate-700',
			textColor: 'text-slate-700 dark:text-slate-300',
			featured: true
		},
		{
			href: '/methodology/lifecycle-negatives',
			title: 'Lifecycle Negatives',
			description: 'Environmental costs including carbon footprint, water usage, waste, land use, and pollution',
			icon: Factory,
			color: 'bg-stone-100 dark:bg-stone-900/30',
			textColor: 'text-stone-600 dark:text-stone-400'
		},
		{
			href: '/methodology/health-impacts',
			title: 'Health Impacts',
			description: 'Safety scores, health concerns, and benefits of products',
			icon: Heart,
			color: 'bg-stone-100 dark:bg-stone-900/30',
			textColor: 'text-stone-600 dark:text-stone-400'
		},
		{
			href: '/methodology/lifecycle-positives',
			title: 'Lifecycle Positives',
			description: 'Positive impacts like fair wages, environmental improvements, recyclability with downcycling penalties, and repairability',
			icon: CheckCircle2,
			color: 'bg-stone-100 dark:bg-stone-900/30',
			textColor: 'text-stone-600 dark:text-stone-400'
		},
		{
			href: '/methodology/use-quality',
			title: 'Use & Quality',
			description: 'Durability, functionality, user satisfaction, and expected lifetime',
			icon: Wrench,
			color: 'bg-stone-100 dark:bg-stone-900/30',
			textColor: 'text-stone-600 dark:text-stone-400'
		},
		{
			href: '/methodology/lifetime-value',
			title: 'Lifetime Value Analysis',
			description: 'Cost per use, cost per year, and total lifetime value calculations',
			icon: Calculator,
			color: 'bg-stone-100 dark:bg-stone-900/30',
			textColor: 'text-stone-600 dark:text-stone-400'
		},
		{
			href: '/methodology/cost-breakdown',
			title: 'Cost Breakdown',
			description: 'How product prices are distributed across materials, labor, marketing, and profit',
			icon: PieChart,
			color: 'bg-stone-100 dark:bg-stone-900/30',
			textColor: 'text-stone-600 dark:text-stone-400'
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
		<div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 mb-4">
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

	<!-- Featured: Assessment Framework -->
	{#each methodologyPages.filter(p => p.featured) as page}
		<a
			href={page.href}
			class="group block bg-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-sm border-2 border-slate-300 dark:border-slate-600 p-6 hover:shadow-md transition-all duration-300 mb-8"
		>
			<div class="flex items-start space-x-4">
				<div class="w-14 h-14 rounded-lg {page.color} flex items-center justify-center flex-shrink-0">
					<page.icon class="w-8 h-8 {page.textColor}" />
				</div>
				<div class="flex-1">
					<div class="flex items-center space-x-2 mb-2">
						<h2 class="text-xl font-bold group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
							{page.title}
						</h2>
						<span class="text-xs font-medium px-2 py-0.5 bg-slate-600 dark:bg-slate-500 text-white rounded-full">START HERE</span>
					</div>
					<p class="text-slate-600 dark:text-slate-400">
						{page.description}
					</p>
				</div>
				<ArrowRight class="w-6 h-6 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors flex-shrink-0 mt-2" />
			</div>
		</a>
	{/each}

	<!-- Methodology Categories Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
		{#each methodologyPages.filter(p => !p.featured) as page}
			<a
				href={page.href}
				class="group bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
			>
				<div class="flex items-start space-x-4">
					<div class="w-12 h-12 rounded-lg {page.color} flex items-center justify-center flex-shrink-0">
						<page.icon class="w-6 h-6 {page.textColor}" />
					</div>
					<div class="flex-1">
						<h2 class="text-lg font-bold mb-2 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
							{page.title}
						</h2>
						<p class="text-sm text-slate-600 dark:text-slate-400">
							{page.description}
						</p>
					</div>
					<ArrowRight class="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors flex-shrink-0 mt-1" />
				</div>
			</a>
		{/each}
	</div>

	<!-- Data Sources & References -->
	<div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 mb-6">
		<h2 class="text-xl font-bold mb-4">Data Sources & Methodology</h2>
		<p class="text-slate-600 dark:text-slate-400 mb-4">
			Our assessments are based on research from multiple sources, using order-of-magnitude estimates when precise data isn't available:
		</p>
		<ul class="space-y-2 text-slate-600 dark:text-slate-400 mb-4">
			<li>• <strong>"How Bad Are Bananas?"</strong> by Mike Berners-Lee - carbon footprint estimation methodology</li>
			<li>• Published lifecycle assessment (LCA) studies</li>
			<li>• Environmentally extended input-output (EEIO) models for spend-based estimates</li>
			<li>• Manufacturer disclosures and certifications</li>
			<li>• Third-party testing organizations</li>
			<li>• Environmental databases (e.g., Ecoinvent, GaBi)</li>
			<li>• Consumer product safety databases</li>
			<li>• Downcycling research for recyclability penalties</li>
			<li>• User reviews and satisfaction surveys</li>
		</ul>
		<p class="text-sm text-slate-500 dark:text-slate-400">
			When detailed data isn't available, we use material proxies and acknowledge uncertainty ranges.
			A rough estimate that captures the right magnitude is more useful than no estimate at all.
		</p>
	</div>

	<!-- Research Sources -->
	<div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
		<div class="flex items-start justify-between">
			<div class="flex-1">
				<h2 class="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-2">Comprehensive Research Sources</h2>
				<p class="text-slate-700 dark:text-slate-300">
					All sources, citations, and detailed references supporting our methodology sections are compiled on our comprehensive references page. This includes research on environmental impacts, health impacts, and global burden of disease studies that inform our prioritization.
				</p>
			</div>
		</div>
		<a href="/methodology/references" class="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors">
			<BookOpen class="w-4 h-4" />
			<span>View All Research Sources & References</span>
			<ArrowRight class="w-4 h-4" />
		</a>
	</div>
</div>
