<script lang="ts">
	import { ArrowLeft, ArrowUpRight } from 'lucide-svelte';

	interface Reference {
		title: string;
		source: string;
		url?: string;
	}

	interface Section {
		label: string;
		items: Reference[];
	}

	const sections: Section[] = [
		{
			label: 'Global Disease Burden & Environmental Health',
			items: [
				{
					title:
						'Global burden and strength of evidence for 88 risk factors in 204 countries and 811 subnational locations, 1990–2021',
					source: 'Global Burden of Disease Study 2021 · The Lancet, 2024',
					url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)00933-4/fulltext'
				},
				{
					title: 'Global Burden of Disease Study — environmental risk factors and health impact assessment',
					source: 'World Health Organization (WHO), Global Health Observatory',
					url: 'https://www.who.int/data/gho'
				},
				{
					title: 'State of Global Air 2024 Report',
					source: 'Air quality and health impact assessment'
				}
			]
		},
		{
			label: 'Air Pollution & Particulate Matter (PM2.5)',
			items: [
				{
					title: 'Inhalable Particulate Matter and Health (PM2.5 and PM10)',
					source: 'California Air Resources Board (CARB)',
					url: 'https://ww2.arb.ca.gov/resources/inhalable-particulate-matter-and-health'
				},
				{
					title: 'Health and Environmental Effects of Particulate Matter (PM)',
					source: 'U.S. EPA',
					url: 'https://www.epa.gov/pm-pollution/health-and-environmental-effects-particulate-matter-pm'
				},
				{
					title:
						'Burden of Cause-Specific Mortality Associated With PM2.5 Air Pollution in the United States',
					source: 'JAMA Network Open, 2022',
					url: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2755672'
				}
			]
		},
		{
			label: 'Microplastics',
			items: [
				{
					title: 'Microplastics in Body: Polluted Tiny Plastic Fragments',
					source: 'Stanford Medicine Insights, 2025',
					url: 'https://med.stanford.edu/news/insights/2025/01/microplastics-in-body-polluted-tiny-plastic-fragments.html'
				},
				{
					title:
						'Microplastics are everywhere — we need to understand how they affect human health',
					source: 'Nature Medicine, 2024',
					url: 'https://www.nature.com/articles/s41591-024-02968-x'
				},
				{
					title: 'Potential Health Impact of Microplastics',
					source: 'ACS Environmental Health, 2024',
					url: 'https://pubs.acs.org/doi/10.1021/envhealth.3c00052'
				},
				{
					title: 'Microplastics Everywhere',
					source: 'Harvard Medicine Magazine',
					url: 'https://magazine.hms.harvard.edu/articles/microplastics-everywhere'
				},
				{
					title: 'Impact of Microplastics on Human Health',
					source: 'MDPI Environmental Health Journal, 2024',
					url: 'https://www.mdpi.com/2673-8929/4/2/23'
				}
			]
		},
		{
			label: 'Lead Exposure',
			items: [
				{
					title: 'Lead Exposure in Children',
					source: 'American Academy of Pediatrics (AAP)',
					url: 'https://www.aap.org/en/patient-care/lead-exposure/lead-exposure-in-children/'
				},
				{
					title: 'Lead Poisoning and Health',
					source: 'WHO Fact Sheets',
					url: 'https://www.who.int/news-room/fact-sheets/detail/lead-poisoning-and-health'
				},
				{
					title: 'Lead Exposure In Children Affects Brain And Behavior',
					source: 'American Academy of Child & Adolescent Psychiatry (AACAP)',
					url: 'https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Lead-Exposure-In-Children-Affects-Brain-And-Behavior-045.aspx'
				},
				{
					title: 'Neurotoxicity and Outcomes from Developmental Lead Exposure',
					source: 'NIH / PMC Research',
					url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10461788/'
				}
			]
		},
		{
			label: 'PFAS (“Forever Chemicals”)',
			items: [
				{
					title: 'PFAS Emerging Contaminant Assessment',
					source: 'U.S. EPA',
					url: 'https://www.epa.gov/pfas'
				},
				{
					title: 'PFAS Health Effects',
					source: 'National Institute of Environmental Health Sciences (NIEHS)',
					url: 'https://www.niehs.nih.gov/health/topics/agents/pfas/index.cfm'
				}
			]
		},
		{
			label: 'Endocrine-Disrupting Chemicals',
			items: [
				{
					title: '9 Ways to Avoid Hormone-Disrupting Chemicals',
					source: 'Natural Resources Defense Council (NRDC)',
					url: 'https://www.nrdc.org/stories/9-ways-avoid-hormone-disrupting-chemicals'
				},
				{
					title:
						'The impact of perfumes and cosmetic products on human health: a narrative review',
					source: 'Frontiers in Toxicology, 2025',
					url: 'https://www.frontiersin.org/journals/toxicology/articles/10.3389/ftox.2025.1646075/full'
				},
				{
					title: 'Synthetic Endocrine Disruptors in Fragranced Products',
					source: 'MDPI Journal, 2024',
					url: 'https://www.mdpi.com/2673-396X/5/3/27'
				},
				{
					title: 'What are phthalates?',
					source: 'Environmental Working Group (EWG), 2024',
					url: 'https://www.ewg.org/news-insights/news/2024/09/what-are-phthalates'
				},
				{
					title: 'What Are “Hormone-Disrupting Chemicals”?',
					source: 'Cleveland Clinic',
					url: 'https://health.clevelandclinic.org/what-are-hormone-disrupting-chemicals'
				}
			]
		},
		{
			label: 'Flame Retardants',
			items: [
				{
					title: 'Flame Retardants',
					source: 'National Institute of Environmental Health Sciences (NIEHS)',
					url: 'https://www.niehs.nih.gov/health/topics/agents/flame_retardants'
				},
				{
					title: 'Toxic comeback looms for upholstered furniture',
					source: 'UC Riverside News, 2025',
					url: 'https://news.ucr.edu/articles/2025/05/02/toxic-comeback-looms-upholstered-furniture'
				},
				{
					title: 'The Fight Against Flame Retardants',
					source: 'Natural Resources Defense Council (NRDC)',
					url: 'https://www.nrdc.org/stories/fight-against-flame-retardants'
				},
				{
					title: 'Flame Retardants in Furniture',
					source: 'Green Science Policy Institute',
					url: 'https://greensciencepolicy.org/our-work/furniture/'
				}
			]
		},
		{
			label: 'Livestock & Agricultural Emissions',
			items: [
				{
					title:
						'Accelerating climate solutions in agriculture: why reducing methane from livestock is an urgent opportunity',
					source: 'Clean Air Task Force, 2024',
					url: 'https://www.catf.us/2024/10/accelerating-climate-solutions-in-agriculture-why-reducing-methane-from-livestock-is-an-urgent-opportunity/'
				},
				{
					title:
						'Animal Agriculture Leads U.S. Methane Emissions — 36% of U.S. methane from animal agriculture',
					source: 'EPA Report, 2024',
					url: 'https://biologicaldiversity.org/w/news/press-releases/new-epa-report-animal-agriculture-leads-u-s-methane-emissions-2024-04-17/'
				},
				{
					title:
						'Climate-Warming Methane Emissions from the World’s Biggest Livestock Companies',
					source: 'Inside Climate News, 2025',
					url: 'https://insideclimatenews.org/news/21102025/livestock-industry-methane-emissions/'
				}
			]
		},
		{
			label: 'Food Waste',
			items: [
				{
					title:
						'Food loss and waste account for 8–10% of annual global greenhouse gas emissions',
					source: 'UNFCCC',
					url: 'https://unfccc.int/news/food-loss-and-waste-account-for-8-10-of-annual-global-greenhouse-gas-emissions-cost-usd-1-trillion'
				},
				{
					title: 'Food waste makes up “half” of global food system emissions',
					source: 'Carbon Brief',
					url: 'https://www.carbonbrief.org/food-waste-makes-up-half-of-global-food-system-emissions/'
				},
				{
					title: 'Food Waste and its Links to Greenhouse Gases and Climate Change',
					source: 'USDA',
					url: 'https://www.usda.gov/about-usda/news/blog/food-waste-and-its-links-greenhouse-gases-and-climate-change'
				},
				{
					title: 'Food waste is responsible for 6% of global greenhouse gas emissions',
					source: 'Our World in Data',
					url: 'https://ourworldindata.org/food-waste-emissions'
				}
			]
		},
		{
			label: 'Electronics & E-Waste',
			items: [
				{
					title: '53% jump in e-waste greenhouse gas emissions between 2014 and 2020',
					source: 'UC Irvine News, 2022',
					url: 'https://news.uci.edu/2022/10/26/uci-study-finds-53-percent-jump-in-e-waste-greenhouse-gas-emissions-between-2014-2020/'
				},
				{
					title: 'The Growing Environmental Risks of E-Waste',
					source: 'Geneva Environment Network',
					url: 'https://www.genevaenvironmentnetwork.org/resources/updates/the-growing-environmental-risks-of-e-waste/'
				},
				{
					title:
						'Climate change implications of electronic waste: strategies for sustainable management',
					source: 'Bulletin of the National Research Centre, 2023',
					url: 'https://bnrc.springeropen.com/articles/10.1186/s42269-023-01124-8'
				}
			]
		},
		{
			label: 'Plastic Pollution',
			items: [
				{
					title: 'How Single Use Plastics Hurt Our Oceans and Warm Our Planet',
					source: 'PBS, 2023',
					url: 'https://www.pbs.org/wnet/peril-and-promise/2023/11/how-single-use-plastics-hurt-our-oceans-and-warm-our-planet/'
				},
				{
					title: 'The world’s plastic pollution crisis, explained',
					source: 'National Geographic',
					url: 'https://www.nationalgeographic.com/environment/article/plastic-pollution'
				},
				{
					title: 'A Guide to Plastic in the Ocean',
					source: 'NOAA Ocean Service',
					url: 'https://oceanservice.noaa.gov/hazards/marinedebris/plastics-in-the-ocean.html'
				},
				{
					title: 'Plastic pollution — 40% of all plastic produced is single-use',
					source: 'IUCN issues brief',
					url: 'https://www.iucn.org/resources/issues-brief/plastic-pollution'
				}
			]
		},
		{
			label: 'Ultra-Processed Foods',
			items: [
				{
					title:
						'Ultra-processed food exposure and adverse health outcomes: umbrella review of epidemiological meta-analyses',
					source: 'BMJ, 2024',
					url: 'https://www.bmj.com/content/378/bmj.o1049'
				},
				{
					title: 'Are Ultraprocessed Foods Bad for Your Health?',
					source: 'Yale Medicine',
					url: 'https://www.yalemedicine.org/news/ultraprocessed-foods-bad-for-you'
				},
				{
					title: 'What doctors wish patients knew about ultraprocessed foods',
					source: 'American Medical Association (AMA)',
					url: 'https://www.ama-assn.org/public-health/prevention-wellness/what-doctors-wish-patients-knew-about-ultraprocessed-foods'
				},
				{
					title:
						'Ultra-processed foods linked to increased cancer risk, diabetes, and heart disease',
					source: 'World Cancer Research Fund',
					url: 'https://www.wcrf.org/about-us/news-and-blogs/ultra-processed-foods-linked-to-increased-cancer-risk-diabetes-and-heart-disease/'
				},
				{
					title:
						'Spotlight on UPFs: NIH explores link between ultra-processed foods and heart disease',
					source: 'NIH / NHLBI, 2025',
					url: 'https://www.nhlbi.nih.gov/news/2025/spotlight-upfs-nih-explores-link-between-ultra-processed-foods-and-heart-disease'
				}
			]
		},
		{
			label: 'Lifecycle Assessment Methodology',
			items: [
				{
					title: 'How Bad Are Bananas? The Carbon Footprint of Everything',
					source:
						'Mike Berners-Lee — order-of-magnitude assessment framework that inspired our methodology'
				},
				{
					title: 'ISO 14040 / 14044',
					source: 'International standards for lifecycle assessment (LCA)'
				},
				{
					title: 'Ecoinvent Database',
					source: 'Lifecycle inventory data for products and processes',
					url: 'https://ecoinvent.org/'
				},
				{
					title: 'GaBi Database',
					source: 'Environmental product lifecycle data',
					url: 'https://www.gabi-software.com/'
				}
			]
		},
		{
			label: 'Standards, Certifications & Databases',
			items: [
				{
					title: 'Intergovernmental Panel on Climate Change (IPCC)',
					source: 'Global warming potential (GWP) calculations and climate science',
					url: 'https://www.ipcc.ch/'
				},
				{
					title: 'U.S. Environmental Protection Agency (EPA)',
					source: 'Greenhouse gas equivalencies, environmental standards, and health guidance',
					url: 'https://www.epa.gov/'
				},
				{
					title: 'Centers for Disease Control and Prevention (CDC)',
					source: 'Health impact data, exposure guidelines, and disease burden assessments',
					url: 'https://www.cdc.gov/'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>References — Lifecycle</title>
	<meta
		name="description"
		content="Research sources and citations grounding the Lifecycle methodology"
	/>
</svelte:head>

<div class="mx-auto max-w-3xl px-6 py-16 lg:px-8">
	<a
		href="/methodology"
		class="mb-12 inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200"
	>
		<ArrowLeft class="h-3.5 w-3.5" />
		Methodology
	</a>

	<header class="mb-16">
		<p class="eyebrow mb-3">Methodology</p>
		<h1 class="font-display text-4xl text-stone-900 dark:text-stone-100">References</h1>
		<p class="prose-quiet mt-5">
			Every assessment and claim in the Lifecycle methodology is grounded in peer-reviewed
			research, authoritative health organizations, and scientific consensus. The sources below
			are organized by topic.
		</p>
	</header>

	{#each sections as section}
		<section class="mb-14">
			<h2 class="eyebrow mb-4">{section.label}</h2>
			<ul class="hairline divide-y divide-stone-200 border-t dark:divide-[#2e2a26]">
				{#each section.items as item}
					<li>
						{#if item.url}
							<a
								href={item.url}
								target="_blank"
								rel="noopener noreferrer"
								class="group flex items-start justify-between gap-4 py-3.5"
							>
								<span>
									<span
										class="block text-sm text-stone-600 transition-colors group-hover:text-stone-900 dark:text-stone-400 dark:group-hover:text-stone-100"
									>
										{item.title}
									</span>
									<span class="mt-0.5 block text-xs text-stone-400 dark:text-stone-500">
										{item.source}
									</span>
								</span>
								<ArrowUpRight
									class="mt-1 h-3.5 w-3.5 shrink-0 text-stone-300 transition-colors group-hover:text-stone-500 dark:text-stone-600 dark:group-hover:text-stone-400"
								/>
							</a>
						{:else}
							<div class="py-3.5">
								<span class="block text-sm text-stone-600 dark:text-stone-400">{item.title}</span>
								<span class="mt-0.5 block text-xs text-stone-400 dark:text-stone-500">
									{item.source}
								</span>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</section>
	{/each}

	<footer class="hairline border-t pt-10">
		<h2 class="eyebrow mb-4">Research Standards</h2>
		<p class="prose-quiet text-sm">
			The Lifecycle methodology is built on peer-reviewed scientific literature, WHO and CDC
			reports, and established epidemiological studies with large sample sizes. We prioritize
			research from institutions with rigorous standards and transparent methodologies over
			anecdotal claims. All priority categories and impact assessments reflect current scientific
			consensus on the most significant health and environmental impacts of consumer products.
		</p>
	</footer>
</div>
