<script lang="ts">
	import { ArrowLeft, Heart, ShieldCheck, AlertTriangle, Sparkles } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Health Impacts - Methodology - LifecycleProducts</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<a href="/methodology" class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline mb-6">
		<ArrowLeft class="w-4 h-4 mr-1" />
		Back to Methodology
	</a>

	<div class="flex items-center space-x-4 mb-8">
		<div class="w-12 h-12 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
			<Heart class="w-6 h-6 text-rose-600 dark:text-rose-400" />
		</div>
		<h1 class="text-3xl font-bold">Health Impacts</h1>
	</div>

	<div class="prose dark:prose-invert max-w-none mb-8">
		<p>
			We evaluate potential health effects of products, helping you avoid harmful substances while identifying products that actively promote wellbeing. This assessment is guided by the most significant and prevalent health impacts documented in global environmental health research.
		</p>
	</div>

	<div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800 mb-8">
		<h2 class="text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-4">What We Prioritize</h2>
		<p class="text-sm text-emerald-800 dark:text-emerald-200 mb-3">
			Our health impact assessments focus on the most prevalent and harmful environmental exposures identified by global health research, particularly those with irreversible effects, especially for vulnerable populations like children and pregnant people.
		</p>
		<p class="text-sm text-emerald-700 dark:text-emerald-300 font-semibold">
			Priority Categories (ordered by global disease burden and severity):
		</p>
	</div>

	<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
		<h3 class="font-bold mb-4 text-slate-900 dark:text-slate-100">1. Air Pollutants (Especially PM2.5)</h3>
		<p class="text-sm text-slate-700 dark:text-slate-300 mb-3">
			<strong>Global Impact:</strong> Responsible for 4.14 million deaths annually (62% of air pollution deaths) and 4.2% of global disability-adjusted life years (DALYs). Linked to ischemic heart disease, lung cancer, COPD, lower-respiratory infections, stroke, type 2 diabetes, and adverse birth outcomes.
		</p>
		<p class="text-sm text-slate-600 dark:text-slate-400">
			<em>How products matter:</em> Furniture off-gassing, personal care products, cleaning products, and heating systems contribute to indoor air quality.
		</p>
		<p class="text-xs text-slate-500 dark:text-slate-500 mt-2">
			Source: WHO Global Burden of Disease Study 2021; State of Global Air 2024
		</p>
	</div>

	<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
		<h3 class="font-bold mb-4 text-slate-900 dark:text-slate-100">2. Synthetic Chemicals: PFAS ("Forever Chemicals")</h3>
		<p class="text-sm text-slate-700 dark:text-slate-300 mb-3">
			<strong>Global Impact:</strong> Widespread human exposure through contaminated water, food, and consumer products. Found in non-stick cookware, water-resistant textiles, food packaging, and firefighting foams. Linked to kidney disease, liver damage, thyroid disorders, immune system suppression, and potential cancer risk.
		</p>
		<p class="text-sm text-slate-600 dark:text-slate-400">
			<em>Why critical:</em> Called "forever chemicals" because they don't break down in the environment or human body, accumulating over a lifetime. No safe exposure level identified.
		</p>
		<p class="text-xs text-slate-500 dark:text-slate-500 mt-2">
			Source: U.S. EPA PFAS Emerging Contaminant Assessment; NIEHS; Multiple epidemiological studies
		</p>
	</div>

	<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
		<h3 class="font-bold mb-4 text-slate-900 dark:text-slate-100">3. Microplastics</h3>
		<p class="text-sm text-slate-700 dark:text-slate-300 mb-3">
			<strong>Emerging Crisis:</strong> Microplastics are now found in every human biological system studied, including blood vessels, lungs, placenta, and breastmilk. Linked to cardiovascular disease (doubles risk of heart attack/stroke), cellular and genetic damage (increasing cancer risk), respiratory disorders, neurological effects, and immune system dysfunction.
		</p>
		<p class="text-sm text-slate-600 dark:text-slate-400">
			<em>How products matter:</em> Fast fashion (shedding 700,000 microplastic fibers per wash), synthetic textiles, plastic containers and bottles, non-stick cookware, and personal care products all shed microplastics.
		</p>
		<p class="text-xs text-slate-500 dark:text-slate-500 mt-2">
			Source: Stanford Medicine 2025; Nature Medicine 2024; ACS Environmental Health 2024; Multiple peer-reviewed studies
		</p>
	</div>

	<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
		<h3 class="font-bold mb-4 text-slate-900 dark:text-slate-100">4. Lead Exposure</h3>
		<p class="text-sm text-slate-700 dark:text-slate-300 mb-3">
			<strong>Irreversible Neurotoxicity:</strong> Most common preventable childhood poisoning. Causes permanent brain damage, including reduced IQ, behavioral issues, attention deficits, learning problems, and increased antisocial behavior. No safe blood lead level identified—even 3.5 µg/dL is associated with adverse effects.
		</p>
		<p class="text-sm text-slate-600 dark:text-slate-400">
			<em>Why children are vulnerable:</em> Children absorb 40% of ingested lead (vs. 5-15% in adults), spend time on contaminated floors, and have immature detoxification systems.
		</p>
		<p class="text-xs text-slate-500 dark:text-slate-500 mt-2">
			Source: WHO Fact Sheets; American Academy of Pediatrics; CDC; NIH/PMC research
		</p>
	</div>

	<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
		<h3 class="font-bold mb-4 text-slate-900 dark:text-slate-100">5. Endocrine-Disrupting Chemicals (EDCs)</h3>
		<p class="text-sm text-slate-700 dark:text-slate-300 mb-3">
			<strong>Broad Health Effects:</strong> Includes BPA, phthalates, and chemicals in synthetic fragrances. These mimic or interfere with hormones, causing fertility loss, reproductive disorders, developmental abnormalities, early/delayed puberty, obesity, diabetes, thyroid dysfunction, immune suppression, neurological problems, and increased cancer risk.
		</p>
		<p class="text-sm text-slate-600 dark:text-slate-400">
			<em>Sources:</em> Plastic bottles and containers (BPA), vinyl and flexible plastics (phthalates), fragrances and personal care products ("fragrance" label can hide 100+ chemicals).
		</p>
		<p class="text-sm text-slate-600 dark:text-slate-400 mt-2">
			<em>Vulnerable windows:</em> Greatest harm during pregnancy and childhood when development is accelerated.
		</p>
		<p class="text-xs text-slate-500 dark:text-slate-500 mt-2">
			Source: NRDC; Frontiers in Toxicology 2025; MDPI 2024; EWG; Cleveland Clinic
		</p>
	</div>

	<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
		<h3 class="font-bold mb-4 text-slate-900 dark:text-slate-100">6. Flame Retardants</h3>
		<p class="text-sm text-slate-700 dark:text-slate-300 mb-3">
			<strong>Persistent Toxins:</strong> Brominated (BFRs) and organophosphate (OPFRs) flame retardants are applied to furniture, textiles, and foam. Off-gas into homes for years. Linked to endocrine disruption, thyroid disorders, neurotoxicity, developmental/reproductive harm, immune suppression, and cancer.
		</p>
		<p class="text-sm text-slate-600 dark:text-slate-400">
			<em>Key findings:</em> TBBPA (most-produced brominated flame retardant) classified as "probably carcinogenic to humans" (IARC 2018). OPFRs have replaced legacy chemicals but show higher toxicity in cell studies. Children at higher risk due to hand-to-mouth behavior and greater hand-floor contact.
		</p>
		<p class="text-xs text-slate-500 dark:text-slate-500 mt-2">
			Source: NIEHS; Nature Environmental Science 2023; Oxford Academic/Endocrinology 2024; PubMed/JAMA Network
		</p>
	</div>

	<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
		<h3 class="font-bold mb-4 text-slate-900 dark:text-slate-100">7. Pesticides and Agricultural Chemicals</h3>
		<p class="text-sm text-slate-700 dark:text-slate-300 mb-3">
			<strong>Neurotoxicity and Beyond:</strong> Linked to neurotoxic effects (particularly in children), reproductive and developmental harm, endocrine disruption, and cancer risk. Exposure occurs through dietary residues, occupational exposure, and environmental contamination of water and soil.
		</p>
		<p class="text-sm text-slate-600 dark:text-slate-400">
			<em>How products matter:</em> Food sourcing practices, textiles (pesticides used in conventional cotton), and indoor pest management products.
		</p>
		<p class="text-xs text-slate-500 dark:text-slate-500 mt-2">
			Source: WHO; EPA; Global Burden of Disease studies; Environmental Health Perspectives
		</p>
	</div>

	<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
		<h3 class="font-bold mb-4 text-slate-900 dark:text-slate-100">8. Ultra-Processed Foods</h3>
		<p class="text-sm text-slate-700 dark:text-slate-300 mb-3">
			<strong>32+ Health Conditions Linked:</strong> Strongest evidence for cardiovascular disease (50% increased risk), type 2 diabetes (23% increased coronary heart disease risk), anxiety, depression, and metabolic disorders. Additional links to cancer, respiratory issues, and gastrointestinal disorders.
		</p>
		<p class="text-sm text-slate-600 dark:text-slate-400">
			<em>Mechanisms:</em> High free sugars, unhealthy fats, sodium, additives, and chronic inflammatory responses. Health disparities: low-income populations have higher exposure due to cost and food access.
		</p>
		<p class="text-xs text-slate-500 dark:text-slate-500 mt-2">
			Source: BMJ Umbrella Review 2024; PubMed Meta-analyses; World Cancer Research Fund; NIH/NHLBI 2025
		</p>
	</div>

	<h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 mt-8">How We Evaluate Health Impacts</h2>

	<div class="space-y-6">
		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<ShieldCheck class="w-5 h-5 text-emerald-600" />
				<h2 class="text-lg font-bold">Safety Score (1-10)</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Overall health safety rating based on materials used, chemical exposure risks, and safety certifications. A score of 10 indicates the safest products with no known health concerns. We prioritize assessment of the 8 major health threat categories documented above: PM2.5/air quality, PFAS, microplastics, lead, endocrine disruptors, flame retardants, pesticides, and food processing. Additional factors include heavy metals, VOC emissions, and allergen potential.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<AlertTriangle class="w-5 h-5 text-amber-600" />
				<h2 class="text-lg font-bold">Health Concerns</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Specific potential health risks associated with the product. This includes chemical leaching, allergens, off-gassing, microplastic shedding, ergonomic issues, or any safety hazards. We list these explicitly so you can make informed decisions based on your personal health needs.
			</p>
		</div>

		<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
			<div class="flex items-center space-x-3 mb-3">
				<Sparkles class="w-5 h-5 text-emerald-600" />
				<h2 class="text-lg font-bold">Health Benefits</h2>
			</div>
			<p class="text-slate-600 dark:text-slate-400">
				Positive health attributes of the product. Examples include BPA-free materials, hypoallergenic properties, ergonomic design, natural antimicrobial properties, breathable fabrics, or products that add beneficial elements (like cast iron adding dietary iron). These benefits can actively improve your health and wellbeing.
			</p>
		</div>
	</div>

	<div class="mt-12 pt-8 border-t border-slate-300 dark:border-slate-600">
		<h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Research Sources & References</h2>

		<div class="space-y-4 text-sm text-slate-700 dark:text-slate-300">
			<div>
				<h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Global Disease Burden & Environmental Health</h3>
				<ul class="list-disc pl-5 space-y-1">
					<li>Global Burden of Disease Study 2021, The Lancet (2024): "Global burden and strength of evidence for 88 risk factors in 204 countries and 811 subnational locations, 1990–2021"</li>
					<li>World Health Organization (WHO): Global Burden of Disease Study 2019 - Environmental Risk Factors</li>
					<li>State of Global Air 2024 Report: Air Quality and Health Impact Assessment</li>
				</ul>
			</div>

			<div>
				<h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Air Pollution (PM2.5)</h3>
				<ul class="list-disc pl-5 space-y-1">
					<li>California Air Resources Board: "Inhalable Particulate Matter and Health (PM2.5 and PM10)"</li>
					<li>EPA: "Health and Environmental Effects of Particulate Matter (PM)"</li>
					<li>JAMA Network Open (2022): "Burden of Cause-Specific Mortality Associated With PM2.5 Air Pollution in the United States"</li>
				</ul>
			</div>

			<div>
				<h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Microplastics</h3>
				<ul class="list-disc pl-5 space-y-1">
					<li>Stanford Medicine Insights (2025): "Microplastics in Body: Polluted Tiny Plastic Fragments"</li>
					<li>Nature Medicine (2024): "Microplastics are everywhere — we need to understand how they affect human health"</li>
					<li>ACS Environmental Health (2024): "Potential Health Impact of Microplastics"</li>
					<li>Harvard Medicine Magazine: "Microplastics Everywhere"</li>
					<li>MDPI Environmental Health Journal (2024): "Impact of Microplastics on Human Health"</li>
				</ul>
			</div>

			<div>
				<h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Lead Exposure</h3>
				<ul class="list-disc pl-5 space-y-1">
					<li>American Academy of Pediatrics (AAP): "Lead Exposure in Children"</li>
					<li>WHO Fact Sheets: "Lead Poisoning and Health"</li>
					<li>American Academy of Child & Adolescent Psychiatry (AACAP): "Lead Exposure In Children Affects Brain And Behavior"</li>
					<li>NIH/PMC Research: "Neurotoxicity and Outcomes from Developmental Lead Exposure" and "Neurotoxic Effects and Biomarkers of Lead Exposure"</li>
					<li>CDC: "Lead Exposure Prevention Guidelines"</li>
				</ul>
			</div>

			<div>
				<h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">PFAS ("Forever Chemicals")</h3>
				<ul class="list-disc pl-5 space-y-1">
					<li>U.S. EPA: "PFAS Emerging Contaminant Assessment"</li>
					<li>National Institute of Environmental Health Sciences (NIEHS): "PFAS Health Effects"</li>
					<li>Multiple epidemiological studies on PFAS and renal/hepatic function</li>
				</ul>
			</div>

			<div>
				<h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Endocrine-Disrupting Chemicals (BPA, Phthalates, Synthetic Fragrances)</h3>
				<ul class="list-disc pl-5 space-y-1">
					<li>NRDC: "9 Ways to Avoid Hormone-Disrupting Chemicals"</li>
					<li>Frontiers in Toxicology (2025): "The impact of perfumes and cosmetic products on human health: a narrative review"</li>
					<li>MDPI Journal (2024): "Synthetic Endocrine Disruptors in Fragranced Products"</li>
					<li>Environmental Working Group (EWG): "What are phthalates?"</li>
					<li>Cleveland Clinic: "What Are 'Hormone-Disrupting Chemicals'?"</li>
					<li>NIH/PMC: "Endocrine Disruptors and Asthma-Associated Chemicals in Consumer Products"</li>
				</ul>
			</div>

			<div>
				<h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Flame Retardants</h3>
				<ul class="list-disc pl-5 space-y-1">
					<li>National Institute of Environmental Health Sciences (NIEHS): "Flame Retardants"</li>
					<li>Nature Environmental Chemistry Letters (2023): "Brominated flame retardants, a cornelian dilemma"</li>
					<li>Oxford Academic/Endocrinology (2024): "Mechanisms of Flame Retardant Toxicity and Their Impacts on Anxiety and Cognition"</li>
					<li>Journal of Exposure Science & Environmental Epidemiology (Nature): "Flame retardant exposure assessment"</li>
					<li>PubMed: "Health toxicity effects of brominated flame retardants" and "Health consequences of exposure to brominated flame retardants"</li>
				</ul>
			</div>

			<div>
				<h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Ultra-Processed Foods</h3>
				<ul class="list-disc pl-5 space-y-1">
					<li>BMJ (2024): "Ultra-processed food exposure and adverse health outcomes: umbrella review of epidemiological meta-analyses"</li>
					<li>PubMed: "Ultra-processed foods increase noncommunicable chronic disease risk"</li>
					<li>Yale Medicine: "Are Ultraprocessed Foods Bad for Your Health?"</li>
					<li>American Medical Association (AMA): "What doctors wish patients knew about ultraprocessed foods"</li>
					<li>World Cancer Research Fund: "Ultra-processed foods linked to increased cancer risk, diabetes, and heart disease"</li>
					<li>NIH/NHLBI (2025): "Spotlight on UPFs: NIH explores link between ultra-processed foods and heart disease"</li>
				</ul>
			</div>

			<div>
				<h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Pesticides & Agricultural Chemicals</h3>
				<ul class="list-disc pl-5 space-y-1">
					<li>World Health Organization (WHO): Pesticide Health Effects & Neurotoxicity</li>
					<li>U.S. EPA: "Pesticide Health Effects"</li>
					<li>Global Burden of Disease Studies: Pesticide-Related Health Outcomes</li>
					<li>Environmental Health Perspectives: Pesticide exposure and developmental effects</li>
				</ul>
			</div>
		</div>

		<div class="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
			<p class="text-sm text-blue-800 dark:text-blue-200">
				<strong>Note on Research Standards:</strong> This health impacts methodology is based on peer-reviewed scientific literature, WHO/CDC reports, and established epidemiological studies with large sample sizes. We prioritize research from institutions with rigorous standards and transparent methodologies over anecdotal claims. All priority categories reflect current scientific consensus about the most significant and prevalent health impacts from environmental exposures and consumer products.
			</p>
		</div>
	</div>
</div>
