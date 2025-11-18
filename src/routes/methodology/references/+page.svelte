<script lang="ts">
	import { ArrowLeft, ExternalLink, BookOpen } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Research Sources & References - LifecycleProducts</title>
	<meta name="description" content="Comprehensive research sources and citations for all LifecycleProducts methodology" />
</svelte:head>

<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<a href="/methodology" class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline mb-6">
		<ArrowLeft class="w-4 h-4 mr-1" />
		Back to Methodology
	</a>

	<div class="flex items-center space-x-4 mb-8">
		<div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
			<BookOpen class="w-6 h-6 text-blue-600 dark:text-blue-400" />
		</div>
		<h1 class="text-3xl font-bold">Research Sources & References</h1>
	</div>

	<div class="prose dark:prose-invert max-w-none mb-8">
		<p>
			All assessments, priorities, and claims made across the LifecycleProducts methodology are grounded in peer-reviewed research, authoritative health organizations, and scientific consensus. This page provides a comprehensive list of sources organized by topic.
		</p>
	</div>

	<!-- Quick Navigation -->
	<div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 mb-8">
		<h2 class="font-bold text-blue-900 dark:text-blue-300 mb-4">Quick Navigation</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
			<a href="#global-burden" class="text-blue-700 dark:text-blue-300 hover:underline">→ Global Disease Burden</a>
			<a href="#health-impacts" class="text-blue-700 dark:text-blue-300 hover:underline">→ Health Impacts</a>
			<a href="#environmental" class="text-blue-700 dark:text-blue-300 hover:underline">→ Environmental Impact</a>
			<a href="#product-categories" class="text-blue-700 dark:text-blue-300 hover:underline">→ Product Categories</a>
			<a href="#lifecycle" class="text-blue-700 dark:text-blue-300 hover:underline">→ Lifecycle Assessment</a>
			<a href="#standards" class="text-blue-700 dark:text-blue-300 hover:underline">→ Standards & Databases</a>
		</div>
	</div>

	<!-- Global Burden of Disease -->
	<section id="global-burden" class="mb-8">
		<h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Global Disease Burden & Environmental Health</h2>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)00933-4/fulltext" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Global Burden of Disease Study 2021, The Lancet (2024)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Global burden and strength of evidence for 88 risk factors in 204 countries and 811 subnational locations, 1990–2021"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.who.int/data/gho" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						World Health Organization (WHO): Global Burden of Disease Study
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Environmental risk factors and health impact assessment</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<span class="font-semibold">State of Global Air 2024 Report</span>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Air quality and health impact assessment</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Air Pollution & PM2.5 -->
	<section id="health-impacts" class="mb-8">
		<h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Air Pollution & Particulate Matter (PM2.5)</h2>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://ww2.arb.ca.gov/resources/inhalable-particulate-matter-and-health" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						California Air Resources Board (CARB)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Inhalable Particulate Matter and Health (PM2.5 and PM10)"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.epa.gov/pm-pollution/health-and-environmental-effects-particulate-matter-pm" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						U.S. EPA: Health and Environmental Effects of Particulate Matter
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Comprehensive PM2.5 health effects documentation</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2755672" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						JAMA Network Open (2022)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Burden of Cause-Specific Mortality Associated With PM2.5 Air Pollution in the United States"</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Microplastics -->
	<section class="mb-8">
		<h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Microplastics</h3>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://med.stanford.edu/news/insights/2025/01/microplastics-in-body-polluted-tiny-plastic-fragments.html" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Stanford Medicine Insights (2025)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Microplastics in Body: Polluted Tiny Plastic Fragments"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.nature.com/articles/s41591-024-02968-x" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Nature Medicine (2024)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Microplastics are everywhere — we need to understand how they affect human health"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://pubs.acs.org/doi/10.1021/envhealth.3c00052" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						ACS Environmental Health (2024)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Potential Health Impact of Microplastics"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://magazine.hms.harvard.edu/articles/microplastics-everywhere" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Harvard Medicine Magazine
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Microplastics Everywhere"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.mdpi.com/2673-8929/4/2/23" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						MDPI Environmental Health Journal (2024)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Impact of Microplastics on Human Health"</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Lead Exposure -->
	<section class="mb-8">
		<h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Lead Exposure</h3>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.aap.org/en/patient-care/lead-exposure/lead-exposure-in-children/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						American Academy of Pediatrics (AAP)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Lead Exposure in Children"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.who.int/news-room/fact-sheets/detail/lead-poisoning-and-health" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						WHO Fact Sheets
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Lead Poisoning and Health"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Lead-Exposure-In-Children-Affects-Brain-And-Behavior-045.aspx" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						American Academy of Child & Adolescent Psychiatry (AACAP)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Lead Exposure In Children Affects Brain And Behavior"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10461788/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						NIH/PMC Research
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Neurotoxicity and Outcomes from Developmental Lead Exposure"</p>
				</div>
			</div>
		</div>
	</section>

	<!-- PFAS -->
	<section class="mb-8">
		<h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">PFAS ("Forever Chemicals")</h3>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.epa.gov/pfas" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						U.S. EPA: PFAS Emerging Contaminant Assessment
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Comprehensive PFAS health and environmental impact data</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.niehs.nih.gov/health/topics/agents/pfas/index.cfm" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						National Institute of Environmental Health Sciences (NIEHS)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"PFAS Health Effects"</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Endocrine-Disrupting Chemicals -->
	<section class="mb-8">
		<h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Endocrine-Disrupting Chemicals (BPA, Phthalates, Synthetic Fragrances)</h3>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.nrdc.org/stories/9-ways-avoid-hormone-disrupting-chemicals" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						NRDC: "9 Ways to Avoid Hormone-Disrupting Chemicals"
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Natural Resources Defense Council comprehensive guide</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.frontiersin.org/journals/toxicology/articles/10.3389/ftox.2025.1646075/full" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Frontiers in Toxicology (2025)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"The impact of perfumes and cosmetic products on human health: a narrative review"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.mdpi.com/2673-396X/5/3/27" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						MDPI Journal (2024)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Synthetic Endocrine Disruptors in Fragranced Products"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.ewg.org/news-insights/news/2024/09/what-are-phthalates" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Environmental Working Group (EWG)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"What are phthalates?"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://health.clevelandclinic.org/what-are-hormone-disrupting-chemicals" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Cleveland Clinic
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"What Are 'Hormone-Disrupting Chemicals'?"</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Flame Retardants -->
	<section class="mb-8">
		<h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Flame Retardants</h3>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.niehs.nih.gov/health/topics/agents/flame_retardants" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						National Institute of Environmental Health Sciences (NIEHS)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Flame Retardants"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://news.ucr.edu/articles/2025/05/02/toxic-comeback-looms-upholstered-furniture" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						UC Riverside News (2025)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Toxic comeback looms for upholstered furniture"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.nrdc.org/stories/fight-against-flame-retardants" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						NRDC: "The Fight Against Flame Retardants"
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Comprehensive flame retardant impact analysis</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://greensciencepolicy.org/our-work/furniture/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Green Science Policy Institute
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Flame Retardants in Furniture"</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Environmental Impact -->
	<section id="environmental" class="mb-8">
		<h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Environmental Impact & Climate</h2>

		<h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 mt-6">Livestock & Agricultural Emissions</h3>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.catf.us/2024/10/accelerating-climate-solutions-in-agriculture-why-reducing-methane-from-livestock-is-an-urgent-opportunity/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Clean Air Task Force (2024)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Accelerating climate solutions in agriculture: Why reducing methane from livestock is an urgent opportunity"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://biologicaldiversity.org/w/news/press-releases/new-epa-report-animal-agriculture-leads-u-s-methane-emissions-2024-04-17/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						EPA Report (2024)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Animal Agriculture Leads U.S Methane Emissions" — 36% of U.S. methane from animal agriculture</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://insideclimatenews.org/news/21102025/livestock-industry-methane-emissions/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Inside Climate News (2025)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Climate-Warming Methane Emissions from the World's Biggest Livestock Companies"</p>
				</div>
			</div>
		</div>

		<h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 mt-6">Food Waste</h3>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://unfccc.int/news/food-loss-and-waste-account-for-8-10-of-annual-global-greenhouse-gas-emissions-cost-usd-1-trillion" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						UNFCCC
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Food loss and waste account for 8-10% of annual global greenhouse gas emissions"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.carbonbrief.org/food-waste-makes-up-half-of-global-food-system-emissions/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Carbon Brief
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Food waste makes up 'half' of global food system emissions"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.usda.gov/about-usda/news/blog/food-waste-and-its-links-greenhouse-gases-and-climate-change" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						USDA
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Food Waste and its Links to Greenhouse Gases and Climate Change"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://ourworldindata.org/food-waste-emissions" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Our World in Data
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Food waste is responsible for 6% of global greenhouse gas emissions"</p>
				</div>
			</div>
		</div>

		<h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 mt-6">Electronics & E-Waste</h3>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://news.uci.edu/2022/10/26/uci-study-finds-53-percent-jump-in-e-waste-greenhouse-gas-emissions-between-2014-2020/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						UC Irvine News (2022)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"53% jump in e-waste greenhouse gas emissions between 2014, 2020"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.genevaenvironmentnetwork.org/resources/updates/the-growing-environmental-risks-of-e-waste/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Geneva Environment Network
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"The Growing Environmental Risks of E-Waste"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://bnrc.springeropen.com/articles/10.1186/s42269-023-01124-8" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Bulletin of the National Research Centre (2023)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Climate change implications of electronic waste: strategies for sustainable management"</p>
				</div>
			</div>
		</div>

		<h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 mt-6">Plastic Pollution</h3>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.pbs.org/wnet/peril-and-promise/2023/11/how-single-use-plastics-hurt-our-oceans-and-warm-our-planet/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						PBS (2023)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"How Single Use Plastics Hurt Our Oceans and Warm Our Planet"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.nationalgeographic.com/environment/article/plastic-pollution" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						National Geographic
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"The world's plastic pollution crisis, explained"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://oceanservice.noaa.gov/hazards/marinedebris/plastics-in-the-ocean.html" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						NOAA Ocean Service
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"A Guide to Plastic in the Ocean"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.iucn.org/resources/issues-brief/plastic-pollution" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						IUCN: "Plastic pollution" resource brief
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">40% of all plastic produced is single-use</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Ultra-Processed Foods -->
	<section class="mb-8">
		<h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Ultra-Processed Foods</h3>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.bmj.com/content/378/bmj.o1049" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						BMJ (2024)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Ultra-processed food exposure and adverse health outcomes: umbrella review of epidemiological meta-analyses"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.yalemedicine.org/news/ultraprocessed-foods-bad-for-you" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Yale Medicine
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Are Ultraprocessed Foods Bad for Your Health?"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.ama-assn.org/public-health/prevention-wellness/what-doctors-wish-patients-knew-about-ultraprocessed-foods" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						American Medical Association (AMA)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"What doctors wish patients knew about ultraprocessed foods"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.wcrf.org/about-us/news-and-blogs/ultra-processed-foods-linked-to-increased-cancer-risk-diabetes-and-heart-disease/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						World Cancer Research Fund
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Ultra-processed foods linked to increased cancer risk, diabetes, and heart disease"</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.nhlbi.nih.gov/news/2025/spotlight-upfs-nih-explores-link-between-ultra-processed-foods-and-heart-disease" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						NIH/NHLBI (2025)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">"Spotlight on UPFs: NIH explores link between ultra-processed foods and heart disease"</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Lifecycle Assessment -->
	<section id="lifecycle" class="mb-8">
		<h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Lifecycle Assessment Methodology</h2>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<span class="font-semibold mt-1">Mike Berners-Lee</span>
				<div>
					<p class="text-sm text-slate-600 dark:text-slate-400">"How Bad Are Bananas? The Carbon Footprint of Everything" — Order-of-magnitude assessment framework that inspired our methodology</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<span class="font-semibold mt-1">ISO 14040/14044</span>
				<div>
					<p class="text-sm text-slate-600 dark:text-slate-400">International standards for lifecycle assessment (LCA)</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://ecoinvent.org/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						Ecoinvent Database
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Lifecycle inventory data for products and processes</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.gabi-software.com/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						GaBi Database
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Environmental product lifecycle data</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Standards & Databases -->
	<section id="standards" class="mb-8">
		<h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Standards, Certifications & Databases</h2>
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.ipcc.ch/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						IPCC (Intergovernmental Panel on Climate Change)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Global warming potential (GWP) calculations and climate science</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.epa.gov/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						U.S. EPA
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Greenhouse gas equivalencies, environmental standards, and health guidance</p>
				</div>
			</div>
			<div class="flex items-start space-x-3">
				<ExternalLink class="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
				<div>
					<a href="https://www.cdc.gov/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
						CDC (Centers for Disease Control and Prevention)
					</a>
					<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Health impact data, exposure guidelines, and disease burden assessments</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Research Standards Note -->
	<div class="mt-12 pt-8 border-t border-slate-300 dark:border-slate-600">
		<div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
			<h3 class="font-bold text-blue-900 dark:text-blue-300 mb-3">About Our Research Standards</h3>
			<p class="text-sm text-blue-800 dark:text-blue-200 mb-3">
				LifecycleProducts methodology is built on <strong>peer-reviewed scientific literature</strong>, <strong>WHO/CDC reports</strong>, and <strong>established epidemiological studies</strong> with large sample sizes. We prioritize research from institutions with rigorous standards and transparent methodologies over anecdotal claims.
			</p>
			<p class="text-sm text-blue-800 dark:text-blue-200">
				All priority categories and environmental impact assessments reflect <strong>current scientific consensus</strong> about the most significant and prevalent health and environmental impacts from consumer products and lifestyle choices.
			</p>
		</div>
	</div>
</div>
