/**
 * Product assessment data.
 *
 * The core idea of this evaluation system: an "eco" product is never good or
 * bad in isolation. It is only better or worse than the thing it replaces,
 * under real usage habits. Every assessment therefore carries:
 *
 *  - a baseline comparison (what habit does this actually replace?)
 *  - a break-even analysis (how long until it beats that baseline, if ever?)
 *  - use-phase impacts (washing, energy, maintenance — often dominant)
 *  - an honest verdict (including "this is mostly marketing")
 *  - a confidence level and the sources behind the numbers
 */

export type VerdictTier = 'genuine' | 'conditional' | 'marginal';

export type Achievability = 'easy' | 'realistic' | 'demanding' | 'never';

export interface Source {
	title: string;
	org: string;
	year: number;
	url: string;
}

export interface Verdict {
	tier: VerdictTier;
	headline: string; // one honest sentence
	bottomLine: string; // short plain-language summary
	caveats: string[]; // the things marketing won't tell you
	smarterMove?: string; // the genuinely best option, if it isn't this product
}

export interface BreakEven {
	value: number | null; // null = no break-even exists; 0 = immediate (like-for-like swap)
	unit: 'uses' | 'months' | 'years';
	against: string; // the habit assumed in the comparison
	achievability: Achievability;
	note: string;
}

export interface AnnualImpactRow {
	carbon: number; // kg CO2e per year
	water: number; // liters per year
	waste: number; // kg per year
	landUse: number; // m² per year
}

export interface AnnualImpacts {
	baselineLabel: string; // short column label for the baseline habit
	product: AnnualImpactRow; // this product, production amortized per year
	baseline: AnnualImpactRow; // the baseline habit per year
	note: string; // assumptions and what's excluded
}

export interface Comparison {
	baseline: string; // the conventional product/habit this replaces
	baselineNote: string;
	productionCarbon: number; // kg CO2e to manufacture this product
	baselineAnnualCarbon: number; // kg CO2e/year of the baseline habit
	breakEven: BreakEven;
	annualImpacts: AnnualImpacts; // absolute impacts, both sides normalized per year of the habit
}

export interface UsePhase {
	shareOfFootprint: number; // % of lifetime footprint that occurs during use (washing, energy, upkeep)
	drivers: string[];
	hygiene: { risk: 'low' | 'medium' | 'high'; note: string };
	careRequired: string; // what the advertised lifetime actually depends on
}

export interface Confidence {
	level: 'high' | 'medium' | 'low';
	note: string;
}

export interface LifecycleNegatives {
	carbon: number; // kg CO2e (production, cradle-to-gate)
	water: number; // liters (irrigation/process "blue" water, not rainfall)
	waste: number; // kg
	landUse: number; // m²
	pollution: number; // 1-10 scale (10 = worst)
}

export interface RecyclabilityInfo {
	percentage: number; // nominal recyclability percentage
	materialType: 'metal' | 'glass' | 'paper' | 'natural' | 'plastic' | 'mixed' | 'composite';
	downcyclingPenalty: number; // 0-1 penalty factor (0 = no penalty, 1 = complete penalty)
	effectiveRecyclability: number; // calculated: percentage * (1 - downcyclingPenalty)
	notes: string;
}

export interface LifecyclePositives {
	livingWages: boolean;
	environmentalImprovements: string[];
	recyclability: RecyclabilityInfo;
	repairability: number; // 1-10 scale
}

export interface CostBreakdown {
	rawMaterials: number; // percentage
	manufacturing: number;
	labor: number;
	transportation: number;
	marketing: number;
	retail: number;
	profit: number;
}

export interface Assessment {
	negatives: LifecycleNegatives;
	positives: LifecyclePositives;
	lifetime: number; // years (realistic, not aspirational)
	comparison: Comparison;
	usePhase: UsePhase;
	verdict: Verdict;
	confidence: Confidence;
	healthImpacts: {
		score: number; // 1-10 (10 being safest)
		concerns: string[];
		benefits: string[];
	};
	useAndQuality: {
		durability: number; // 1-10
		functionality: number; // 1-10
		userSatisfaction: number; // 1-10
	};
}

export interface Product {
	id: string;
	name: string;
	category: string;
	description: string;
	imageUrl: string;
	price: number; // USD
	usesPerYear: number;
	costBreakdown: CostBreakdown;
	assessment: Assessment;
	sources: Source[];
}

export const verdictLabels: Record<VerdictTier, string> = {
	genuine: 'Genuinely better',
	conditional: 'Depends on your habits',
	marginal: 'Mostly marketing'
};

export const products: Product[] = [
	{
		id: 'bamboo-toothbrush',
		name: 'Bamboo Toothbrush',
		category: 'Personal Care',
		description: 'Manual toothbrush with a bamboo handle and nylon bristles',
		imageUrl: '/images/bamboo-toothbrush.svg',
		price: 5.0,
		usesPerYear: 730,
		costBreakdown: {
			rawMaterials: 15,
			manufacturing: 20,
			labor: 15,
			transportation: 12,
			marketing: 15,
			retail: 15,
			profit: 8
		},
		assessment: {
			negatives: {
				carbon: 0.2,
				water: 10,
				waste: 0.015,
				landUse: 0.05,
				pollution: 2
			},
			positives: {
				livingWages: false,
				environmentalImprovements: [
					'Meaningfully lower climate impact than a virgin-plastic manual brush (per the BDJ toothbrush LCA)',
					'Bamboo grows fast without irrigation or replanting',
					'Usually paper packaging instead of plastic blisters'
				],
				recyclability: {
					percentage: 60,
					materialType: 'composite',
					downcyclingPenalty: 0.4,
					effectiveRecyclability: 36,
					notes:
						'The handle only composts if you pull out the nylon bristles with pliers first — almost nobody does. Landfilled whole, the bamboo decays anaerobically and can emit methane, eroding the "natural end-of-life" story.'
				},
				repairability: 1
			},
			lifetime: 0.25,
			comparison: {
				baseline: 'Conventional plastic manual toothbrush',
				baselineNote:
					'Both are replaced every ~3 months and used identically — a like-for-like swap, not an investment. The much bigger fork in the road is manual vs. electric: the same LCA found an electric brush has ~11× the climate impact of a bamboo one.',
				productionCarbon: 0.2,
				baselineAnnualCarbon: 5,
				annualImpacts: {
					baselineLabel: 'Plastic manual brush (4/yr)',
					product: { carbon: 0.8, water: 40, waste: 0.06, landUse: 0.2 },
					baseline: { carbon: 5, water: 8, waste: 0.07, landUse: 0.01 },
					note: 'Production only, four brushes a year on either side, scaled from the BDJ LCA ratios — medium confidence on absolutes. Brushing itself (tap water, toothpaste) is excluded and outweighs either brush.'
				},
				breakEven: {
					value: 0,
					unit: 'uses',
					against: 'a plastic manual brush replaced on the same schedule',
					achievability: 'easy',
					note: 'No payback needed — the swap saves roughly 4 kg CO2e per year versus virgin plastic (medium confidence on the absolute number). Real, but tiny: about the footprint of driving 15–20 km. Skipping an electric brush saves ~10× more.'
				}
			},
			usePhase: {
				shareOfFootprint: 55,
				drivers: [
					'Running the tap while brushing wastes more water than any handle material saves',
					'Toothpaste production and packaging exceed the brush footprint over a year'
				],
				hygiene: {
					risk: 'medium',
					note: 'Bamboo absorbs water — the handle can mold at the base if it sits wet in a cup. It needs to dry fully between uses; plastic does not. Some handles get borax or carbonization anti-mold treatments that brands rarely disclose.'
				},
				careRequired: 'Store upright to dry fully between uses; replace every 3 months like any brush.'
			},
			verdict: {
				tier: 'marginal',
				headline: 'Better than virgin plastic — but not the way it\'s marketed',
				bottomLine:
					'The peer-reviewed LCA does show a real climate advantage over a virgin-plastic manual brush. But the marketing is dishonest: the bristles are nylon, "compostable" fails in practice (landfilled bamboo can emit methane), and a plastic brush with a replaceable head scored just as well. The absolute stakes — a few kg CO2e a year — are among the smallest environmental decisions you will make.',
				caveats: [
					'Bristles are plastic and must be pulled out with pliers before composting — almost nobody does',
					'"Biodegradable" in a landfill can mean anaerobic decay releasing methane',
					'Statistically tied with a replaceable-head plastic brush; a recycled-plastic brush modeled even better',
					'Bamboo farmland carries a land-use cost the "it\'s just grass" framing hides',
					'Charcoal-infused bristles have no proven dental benefit'
				],
				smarterMove:
					'The biggest real decision is skipping the electric brush (~11× the climate impact). Among manuals, a replaceable-head brush minimizes material per use. And turn off the tap — it outweighs any handle choice.'
			},
			confidence: {
				level: 'medium',
				note: 'Rankings and ratios (manual ≪ electric; bamboo ≈ replaceable-head) are high-confidence from the BDJ LCA; absolute kg CO2e values are medium-confidence and brand-dependent.'
			},
			healthImpacts: {
				score: 8,
				concerns: [
					'Handle can harbor mold if not dried between uses',
					'Anti-mold treatments and coatings are rarely disclosed'
				],
				benefits: ['Cleans identically to a plastic manual brush']
			},
			useAndQuality: {
				durability: 6,
				functionality: 8,
				userSatisfaction: 7
			}
		},
		sources: [
			{
				title: 'Combining evidence-based healthcare with environmental sustainability: using the toothbrush as a model',
				org: 'British Dental Journal (Lyne et al.)',
				year: 2020,
				url: 'https://www.nature.com/articles/s41415-020-1981-0'
			},
			{
				title: 'Life cycle assessment of manual toothbrush materials',
				org: 'Discover Environment (Springer)',
				year: 2024,
				url: 'https://link.springer.com/article/10.1007/s44274-024-00119-0'
			},
			{
				title: 'Bamboo toothbrushes aren\'t the most environmentally friendly option',
				org: 'Dentistry Today',
				year: 2020,
				url: 'https://www.dentistrytoday.com/bamboo-toothbrushes-aren-t-the-most-environmentally-friendly-option/'
			}
		]
	},
	{
		id: 'stainless-water-bottle',
		name: 'Stainless Steel Water Bottle',
		category: 'Drinkware',
		description: 'Double-walled insulated 500 ml bottle',
		imageUrl: '/images/water-bottle.svg',
		price: 35.0,
		usesPerYear: 365,
		costBreakdown: {
			rawMaterials: 25,
			manufacturing: 20,
			labor: 12,
			transportation: 8,
			marketing: 18,
			retail: 12,
			profit: 5
		},
		assessment: {
			negatives: {
				carbon: 4,
				water: 260,
				waste: 0.4,
				landUse: 0.1,
				pollution: 4
			},
			positives: {
				livingWages: false,
				environmentalImprovements: [
					'Can displace hundreds of single-use bottles per year — if you had that habit',
					'Stainless steel recycles indefinitely without quality loss',
					'No microplastic shedding, unlike single-use and reusable plastic'
				],
				recyclability: {
					percentage: 90,
					materialType: 'metal',
					downcyclingPenalty: 0.05,
					effectiveRecyclability: 85.5,
					notes:
						'The steel body recycles indefinitely. The plastic lid, gasket, and vacuum-seal construction are the weak points — in practice the bottle goes in as mixed scrap.'
				},
				repairability: 3
			},
			lifetime: 8,
			comparison: {
				baseline: 'What you were actually drinking from before',
				baselineNote:
					'The baseline changes everything here. Against a daily bottled-water habit (~0.09 kg CO2e per 500 ml PET bottle), the steel bottle wins within weeks. Against tap water in a glass you already own, it never wins — the glass had no footprint to beat.',
				productionCarbon: 4,
				baselineAnnualCarbon: 33,
				annualImpacts: {
					baselineLabel: 'One 500 ml PET bottle a day',
					product: { carbon: 0.5, water: 33, waste: 0.05, landUse: 0.01 },
					baseline: { carbon: 33, water: 800, waste: 4.5, landUse: 0.1 },
					note: 'Steel bottle production amortized over its 8-year realistic lifetime; baseline is 365 bottles of bottled water a year (UNEP / Green Alliance figures). Washing energy is excluded — it can rival production and is the main use-phase cost of the steel bottle. Against tap water in a glass you already own, the baseline column is effectively zero.'
				},
				breakEven: {
					value: 25,
					unit: 'uses',
					against: 'buying one 500 ml bottled water per day',
					achievability: 'realistic',
					note: 'UNEP\'s LCA meta-review puts the carbon break-even at roughly 10–30 uses — a few weeks for a daily bottled-water buyer. But on metal-resource-depletion metrics it takes hundreds of uses, and versus tap water in an existing glass there is no break-even at all.'
				}
			},
			usePhase: {
				shareOfFootprint: 45,
				drivers: [
					'Washing dominates: heating wash water is often the largest lifetime contributor in bottle LCAs',
					'Frequent hot hand-washing is the worst case — worse than full, efficient dishwasher loads — and most insulated bottles are hand-wash-only'
				],
				hygiene: {
					risk: 'medium',
					note: 'Studies find tens of thousands of bacteria per mL in bottles that aren\'t washed daily, and coliform bacteria in over 20% of sampled bottles. Biofilm hides in threads, straws, and gaskets. Honest hygiene means daily washing — which is exactly the energy the LCAs penalize.'
				},
				careRequired:
					'Wash daily (efficiently — full dishwasher loads or cool hand-wash), disassemble and deep-clean the lid weekly, and keep this one bottle for years. Every replacement or duplicate resets the payback clock.'
			},
			verdict: {
				tier: 'conditional',
				headline: 'A win only if it replaces a bottled-water habit',
				bottomLine:
					'This purchase is a loan you repay through avoided single-use bottles: a fast payback if you actually bought bottled water daily, and a debt that never clears if you already drank tap. The two things marketing never mentions: washing energy can rival the manufacturing footprint, and surveys show people own 4–7 of these and half replace them within a year — most bottles never earn back their steel.',
				caveats: [
					'Never breaks even against tap water in a cup you already own',
					'Hot hand-washing can erase much of the reuse benefit — and most insulated bottles can\'t go in the dishwasher',
					'Owners average 4–7 bottles; ~51% replace within a year, often over odor — each duplicate restarts the math',
					'Unwashed for a few days, it\'s dirtier than the disposable it replaced',
					'On resource-depletion metrics, steel needs hundreds of uses to win'
				],
				smarterMove:
					'Use any cup or bottle you already own. Starting from zero and needing portability? Buy one — secondhand if you can — and keep it for a decade.'
			},
			confidence: {
				level: 'medium',
				note: 'Break-even range (low tens of uses for carbon) is well supported by UNEP\'s meta-review. Absolute production CO2e spans an order of magnitude across sources (~1–5 kg for insulated bottles); washing-behavior assumptions drive most of the spread.'
			},
			healthImpacts: {
				score: 8,
				concerns: [
					'Rapid biofilm growth without daily washing; coliform found in >20% of sampled bottles',
					'Lid gaskets and straws trap mold'
				],
				benefits: [
					'No chemical leaching from food-grade steel',
					'No microplastics, unlike plastic bottles'
				]
			},
			useAndQuality: {
				durability: 9,
				functionality: 9,
				userSatisfaction: 8
			}
		},
		sources: [
			{
				title: 'Single-use plastic bottles and their alternatives: Recommendations from Life Cycle Assessments',
				org: 'UNEP / Life Cycle Initiative',
				year: 2020,
				url: 'https://www.lifecycleinitiative.org/library/single-use-plastic-bottles-and-their-alternatives-recommendations-from-life-cycle-assessments/'
			},
			{
				title: 'How sustainable and safe is drinking from refill-and-reuse bottles? An LCA and microbiological analysis',
				org: 'Science of the Total Environment',
				year: 2025,
				url: 'https://www.sciencedirect.com/science/article/pii/S001393512502465X'
			},
			{
				title: 'The Cleanliness of Reusable Water Bottles',
				org: 'Food Protection Trends',
				year: 2017,
				url: 'https://www.foodprotection.org/members/fpt-archive-articles/2017-11-the-cleanliness-of-reusable-water-bottles-how-contamination-levels-are-affected-by-bottle-us/'
			},
			{
				title: 'Losing the bottle: methodology',
				org: 'Green Alliance',
				year: 2021,
				url: 'https://green-alliance.org.uk/wp-content/uploads/2021/11/losing_the_bottle_methodology.pdf'
			}
		]
	},
	{
		id: 'organic-cotton-tshirt',
		name: 'Organic Cotton T-Shirt',
		category: 'Clothing',
		description: 'Fair-trade certified organic cotton t-shirt',
		imageUrl: '/images/tshirt.svg',
		price: 30.0,
		usesPerYear: 52,
		costBreakdown: {
			rawMaterials: 15,
			manufacturing: 15,
			labor: 25,
			transportation: 8,
			marketing: 15,
			retail: 17,
			profit: 5
		},
		assessment: {
			negatives: {
				carbon: 3.5,
				water: 480,
				waste: 0.7,
				landUse: 10,
				pollution: 3
			},
			positives: {
				livingWages: true,
				environmentalImprovements: [
					'No synthetic pesticides — a real reduction in farm toxicity, ecotoxicity, and worker exposure',
					'Better-verified labor conditions under fair-trade certification',
					'Pure cotton sheds no microplastics in the wash, unlike polyester'
				],
				recyclability: {
					percentage: 70,
					materialType: 'natural',
					downcyclingPenalty: 0.35,
					effectiveRecyclability: 45.5,
					notes:
						'Textile-to-textile recycling barely exists at scale; most "recycled" clothing becomes rags and insulation. Pure cotton composts, but only if it actually reaches a compost stream.'
				},
				repairability: 8
			},
			lifetime: 4,
			comparison: {
				baseline: 'Conventional cotton t-shirt worn the same number of times',
				baselineNote:
					'Organic vs. conventional is a farming difference, not a fiber difference — and fiber is only ~13% of a shirt\'s lifecycle CO2. Manufacturing energy (~50%) and your washing habits (~25–37%) are the big blocks. The famous "2,700 liters per shirt" counts mostly rain: actual irrigation water is closer to 500 L.',
				productionCarbon: 3.5,
				baselineAnnualCarbon: 1,
				annualImpacts: {
					baselineLabel: 'Conventional tee (same schedule)',
					product: { carbon: 0.9, water: 120, waste: 0.18, landUse: 2.5 },
					baseline: { carbon: 1, water: 110, waste: 0.18, landUse: 2 },
					note: 'Both shirts amortized over the same four-year, 52-wears-a-year life; production only. Every difference here sits inside LCA error bars except land use — organic yields run 10–30% lower, so each organic shirt needs more farmland. Washing and drying (~25–37% of lifetime footprint) are excluded and identical for both.'
				},
				breakEven: {
					value: 0,
					unit: 'uses',
					against: 'a conventional cotton tee replaced on the same schedule',
					achievability: 'easy',
					note: 'No payback period — but also little climate difference. Organic\'s genuine wins are pesticides and worker health, not carbon or water. The variable that dwarfs everything: how many times any shirt is worn. Impact per wear scales with 1/n.'
				}
			},
			usePhase: {
				shareOfFootprint: 30,
				drivers: [
					'Washing and tumble-drying are ~25–37% of a tee\'s lifetime footprint',
					'Cold washes and line-drying eliminate most of it'
				],
				hygiene: {
					risk: 'low',
					note: 'Washable at any temperature; no special concerns.'
				},
				careRequired:
					'Wash cold, line-dry, mend small holes. The footprint is fixed at purchase — wears are what amortize it, and most garments are discarded long before they wear out.'
			},
			verdict: {
				tier: 'conditional',
				headline: 'The label matters less than how long you wear it',
				bottomLine:
					'Organic cotton genuinely reduces pesticide use and farm-worker exposure — those benefits are real. Its climate and water advantages are not: yields run 10–30% lower (more land per shirt), the "91% less water" claim traces to an LCA its own authors said can\'t support comparisons, and the 2,700 L figure is ~75% rainfall. A conventional tee worn 100 times beats an organic tee worn 10 times by an order of magnitude per wear.',
				caveats: [
					'The 2,700 L water figure is mostly rain that would have fallen anyway; irrigation is ~500 L',
					'Lower organic yields mean 10–30% more land per kg of fiber',
					'Headline organic-vs-conventional claims were ruled misleading by Norway\'s consumer authority (Higg, 2022)',
					'"Organic" says nothing about dyeing, spinning, or sewing unless separately certified',
					'Buying more shirts because they\'re "sustainable" swamps any per-shirt gain'
				],
				smarterMove:
					'Wear what you own until it wears out, then buy fewer, better shirts — secondhand first. Wash cold, skip the dryer. Aim for 30+ wears minimum from anything you buy.'
			},
			confidence: {
				level: 'medium',
				note: 'Carbon range and use-phase share converge across independent LCAs. The green/blue water critique is well documented. Organic-vs-conventional deltas remain contested and region-dependent.'
			},
			healthImpacts: {
				score: 9,
				concerns: [],
				benefits: [
					'No pesticide residues; meaningfully safer for farm workers',
					'Breathable, hypoallergenic, no microplastic shedding'
				]
			},
			useAndQuality: {
				durability: 7,
				functionality: 8,
				userSatisfaction: 8
			}
		},
		sources: [
			{
				title: 'Cotton: A Case Study in Misinformation',
				org: 'Transformers Foundation',
				year: 2021,
				url: 'https://www.transformersfoundation.org/cotton-report-2021'
			},
			{
				title: 'The green, blue and grey water footprint of crops and derived crop products',
				org: 'Mekonnen & Hoekstra, UNESCO-IHE',
				year: 2011,
				url: 'https://www.waterfootprint.org/resources/Mekonnen-Hoekstra-2011-WaterFootprintCrops.pdf'
			},
			{
				title: 'Extending product lifetimes: clothing durability',
				org: 'WRAP',
				year: 2022,
				url: 'https://www.wrap.ngo/resources/case-study/extending-product-lifetimes-wraps-work-clothing-durability'
			},
			{
				title: 'The Higg Index consumer-label suspension',
				org: 'Norwegian Consumer Authority / SAC',
				year: 2022,
				url: 'https://www.thefashionlaw.com/the-higg-index/'
			}
		]
	},
	{
		id: 'cast-iron-skillet',
		name: 'Cast Iron Skillet',
		category: 'Kitchenware',
		description: 'Pre-seasoned 12-inch cast iron skillet',
		imageUrl: '/images/skillet.svg',
		price: 50.0,
		usesPerYear: 156,
		costBreakdown: {
			rawMaterials: 30,
			manufacturing: 28,
			labor: 18,
			transportation: 6,
			marketing: 6,
			retail: 8,
			profit: 4
		},
		assessment: {
			negatives: {
				carbon: 7,
				water: 300,
				waste: 0.3,
				landUse: 0.2,
				pollution: 5
			},
			positives: {
				livingWages: true,
				environmentalImprovements: [
					'Realistically lasts 50+ years — durability does all the environmental work here',
					'Fully restorable: rust, damage, and ruined seasoning are all reversible',
					'Thriving secondhand market; a used skillet has near-zero marginal footprint'
				],
				recyclability: {
					percentage: 100,
					materialType: 'metal',
					downcyclingPenalty: 0,
					effectiveRecyclability: 100,
					notes:
						'Single material, no coatings — melts down and reforms without quality loss. In practice it rarely needs to: skillets outlive their owners. PTFE-coated pans, by contrast, are often rejected by aluminum scrap streams.'
				},
				repairability: 10
			},
			lifetime: 50,
			comparison: {
				baseline: 'PTFE non-stick pan replaced every 2–5 years',
				baselineNote:
					'Non-stick coatings fail on a schedule; the pan is disposable by design. Its aluminum body carries a comparable or larger embodied footprint (~5–15 kg CO2e) than the skillet — and it recurs with every replacement.',
				productionCarbon: 7,
				baselineAnnualCarbon: 2.8,
				annualImpacts: {
					baselineLabel: 'Non-stick pan every 2–5 yrs',
					product: { carbon: 0.14, water: 6, waste: 0.01, landUse: 0.004 },
					baseline: { carbon: 2.8, water: 30, waste: 0.3, landUse: 0.01 },
					note: 'Skillet production amortized over 50 years of use; baseline amortizes a ~10 kg CO₂e aluminum non-stick pan over its typical 3–4 year coating life. Cooking energy and seasoning oil are excluded — the extra mass of cast iron costs slightly more stove energy, which narrows the gap in real kitchens.'
				},
				breakEven: {
					value: 3,
					unit: 'years',
					against: 'replacing a non-stick pan every 2–5 years',
					achievability: 'easy',
					note: 'The skillet is ahead by roughly the first non-stick replacement cycle. Over 30 years that\'s ~6–15 avoided pans: on the order of 50–150 kg CO2e plus several kg of unrecyclable coated aluminum. A secondhand skillet is ahead from day one.'
				}
			},
			usePhase: {
				shareOfFootprint: 85,
				drivers: [
					'Lifetime cooking energy dwarfs the embodied carbon of either pan by an order of magnitude',
					'No rigorous study shows a meaningful cooking-energy difference between pan materials — cast iron heats slower but retains heat well; don\'t overclaim either way'
				],
				hygiene: {
					risk: 'low',
					note: 'A well-seasoned surface cleans easily. It must be dried promptly to prevent rust — a maintenance issue, not a health one.'
				},
				careRequired:
					'Dry after washing, oil occasionally, re-season when needed. The 50-year lifetime is real but assumes this small habit — though even a rusted, neglected skillet is fully recoverable.'
			},
			verdict: {
				tier: 'genuine',
				headline: 'The rare product that earns the hype',
				bottomLine:
					'One material, no coatings, indefinitely repairable, a real secondhand market, and a baseline that fails on a schedule — this is what genuine sustainability looks like. It pays back within a few years and removes PTFE-degradation risk from your kitchen. Honest scale check: the total stakes are tens of kg CO2e over decades — real, but small next to diet or driving. The main risk is behavioral: it demands minor upkeep and real weight tolerance.',
				caveats: [
					'Only pays off if you actually keep cooking with it — an abandoned skillet helps nothing',
					'Needs drying and occasional re-seasoning; neglect means rust (fixable, but a common quitting point)',
					'Heavy and slow to heat; poorly suited to delicate acidic dishes — it won\'t replace every pan',
					'Buying it while a working pan sits in the cupboard wastes the pan you own'
				],
				smarterMove:
					'Buy it used — thrift stores and estate sales are full of century-old skillets that restore perfectly, at near-zero marginal footprint.'
			},
			confidence: {
				level: 'medium',
				note: 'Iron-casting emission factors (1.6–3.0 kg CO2e/kg) and non-stick replacement cycles are well documented. The non-stick pan embodied estimate is derived from material factors — no direct head-to-head pan LCA exists. Cooking-energy differences are an evidence gap.'
			},
			healthImpacts: {
				score: 8,
				concerns: [
					'Iron leaching is a risk for people with hemochromatosis',
					'Very heavy — a genuine usability limit for some people'
				],
				benefits: [
					'No PTFE coating to overheat (fume risk above ~260°C) or chip into food',
					'Meaningful dietary iron transfer — a documented benefit for iron-deficient populations',
					'No plastic components'
				]
			},
			useAndQuality: {
				durability: 10,
				functionality: 8,
				userSatisfaction: 9
			}
		},
		sources: [
			{
				title: 'Comparison of Carbon Footprints in Sourcing of Cast Components',
				org: 'International Journal of Metalcasting',
				year: 2025,
				url: 'https://link.springer.com/article/10.1007/s40962-025-01608-5'
			},
			{
				title: 'What\'s Cooking? Non-stick cookware testing report',
				org: 'Ecology Center Healthy Stuff Lab',
				year: 2024,
				url: 'https://www.ecocenter.org/our-work/healthy-stuff-lab/reports/whats-cooking'
			},
			{
				title: 'Food prepared in iron cooking pots and iron-deficiency anaemia: systematic review',
				org: 'PLOS ONE',
				year: 2019,
				url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0221094'
			},
			{
				title: 'How does nonstick cookware work, and should you switch?',
				org: 'C&EN, American Chemical Society',
				year: 2025,
				url: 'https://cen.acs.org/environment/persistent-pollutants/does-nonstick-cookware-work-should/103/web/2025/04'
			}
		]
	},
	{
		id: 'led-desk-lamp',
		name: 'Repairable LED Desk Lamp',
		category: 'Electronics',
		description:
			'A representative $120-class desk lamp designed for repair — replaceable driver, serviceable body, published spare parts. An archetype, not a specific brand.',
		imageUrl: '/images/desk-lamp.svg',
		price: 120.0,
		usesPerYear: 365,
		costBreakdown: {
			rawMaterials: 22,
			manufacturing: 18,
			labor: 12,
			transportation: 6,
			marketing: 16,
			retail: 14,
			profit: 12
		},
		assessment: {
			negatives: {
				carbon: 15,
				water: 800,
				waste: 0.6,
				landUse: 0.4,
				pollution: 6
			},
			positives: {
				livingWages: false,
				environmentalImprovements: [
					'Replaceable driver targets the real failure point — LEDs rarely die; their power electronics do',
					'Aluminum body recycles well and opens for repair',
					'Published spare-parts availability, unlike glued disposable lamps'
				],
				recyclability: {
					percentage: 70,
					materialType: 'mixed',
					downcyclingPenalty: 0.35,
					effectiveRecyclability: 45.5,
					notes:
						'The aluminum recycles; the PCB, driver, and wiring need e-waste processing. Only 22% of global e-waste is formally collected and recycled — assume small mixed-material devices mostly are not.'
				},
				repairability: 9
			},
			lifetime: 15,
			comparison: {
				baseline: 'A $20 glued LED lamp replaced when its driver fails',
				baselineNote:
					'Both lamps use efficient LEDs, so electricity — 85–96% of an LED lamp\'s lifecycle footprint on today\'s grids — is nearly identical. The comparison is really about embodied hardware: a cheap lamp dying at year 3–5 from a $0.50 capacitor strands an LED with 90% of its rated life left.',
				productionCarbon: 15,
				baselineAnnualCarbon: 1.5,
				annualImpacts: {
					baselineLabel: 'Glued $20 lamp every 3–5 yrs',
					product: { carbon: 1, water: 53, waste: 0.04, landUse: 0.03 },
					baseline: { carbon: 1.5, water: 38, waste: 0.13, landUse: 0.02 },
					note: 'Hardware only: the repairable lamp amortized over 15 years versus a cheap lamp failing every ~4 years. Electricity — roughly 10 kg CO₂e a year for either lamp — is excluded because it is identical for both, and it is larger than every number in this table.'
				},
				breakEven: {
					value: 10,
					unit: 'years',
					against: 'cheap lamps failing every 3–5 years',
					achievability: 'demanding',
					note: 'Avoiding 4–6 cheap-lamp replacements saves roughly 20–100 kg CO2e of embodied impact plus several kg of effectively unrecyclable e-waste — but only if you keep this lamp 15+ years and actually order the spare part when it fails. Electricity use is a wash either way.'
				}
			},
			usePhase: {
				shareOfFootprint: 90,
				drivers: [
					'A ~400 kWh lifetime of electricity (~150 kg CO2e on the current US grid) dwarfs any lamp\'s embodied ~5–20 kg',
					'Efficacy (lumens per watt) and hours-on matter more than what the lamp is made of — though embodied impact grows as grids decarbonize'
				],
				hygiene: { risk: 'low', note: 'No hygiene considerations.' },
				careRequired:
					'The 15-year story requires follow-through: keeping the lamp through moves and redecorating, and repairing instead of replacing when a part fails. Repairability you never exercise is just marketing.'
			},
			verdict: {
				tier: 'conditional',
				headline: 'Repairable beats disposable — if you actually repair it',
				bottomLine:
					'First, what this is: not a specific brand, but the small class of ~$120 desk lamps designed for repair — the body opens, the driver (the power module that usually fails first) can be swapped, and spare parts are published. The comparison is against the $20 glued-shut lamp most people actually buy. For LED lighting, electricity is 85–96% of the footprint and a $20 lamp runs just as efficiently — efficiency is not what the $120 buys. It buys insurance on the weakest component: sealed lamps die when their driver fails and become unrecyclable e-waste. That benefit is real but smaller than the marketing implies, and it depends entirely on you still owning and repairing this lamp a decade from now. A "50,000-hour LED" claim on a non-repairable lamp is near-meaningless — the driver dies first.',
				caveats: [
					'A $20 lamp uses the same electricity — check lumens-per-watt, not the housing material',
					'Break-even takes roughly a decade of committed ownership and at least one actual repair',
					'"Repairable" only counts while spare parts remain available',
					'Discarded at year 5 for style reasons, it\'s worse than the cheap lamp it replaced',
					'The payback is environmental, not financial — 6× the price never pays itself back in bulbs'
				],
				smarterMove:
					'Keep whatever lamp you own until it truly dies; repair it if you can. Buy this class of product only at genuine end-of-life — and check efficacy first.'
			},
			confidence: {
				level: 'medium',
				note: 'Use-phase dominance (DOE/PNNL) and e-waste rates (ITU/UNITAR, 22.3% in 2022) are high-confidence. No published desk-lamp LCA exists — embodied figures are derived from luminaire LCAs with stated assumptions.'
			},
			healthImpacts: {
				score: 8,
				concerns: ['Blue-light exposure in evening use, as with any LED'],
				benefits: ['Flicker-free driver', 'Adjustable color temperature', 'No mercury (unlike CFL)']
			},
			useAndQuality: {
				durability: 8,
				functionality: 9,
				userSatisfaction: 9
			}
		},
		sources: [
			{
				title: 'Life-Cycle Assessment of Energy and Environmental Impacts of LED Lighting Products',
				org: 'US DOE / Pacific Northwest National Laboratory',
				year: 2012,
				url: 'https://www1.eere.energy.gov/buildings/publications/pdfs/ssl/2012_LED_Lifecycle_Report.pdf'
			},
			{
				title: 'Life cycle assessment of LED luminaire and impact on lighting installation',
				org: 'Alexandria Engineering Journal',
				year: 2023,
				url: 'https://www.sciencedirect.com/science/article/pii/S1110016823007597'
			},
			{
				title: 'Global E-waste Monitor 2024',
				org: 'ITU / UNITAR',
				year: 2024,
				url: 'https://ewastemonitor.info/the-global-e-waste-monitor-2024/'
			},
			{
				title: 'Fairphone 4 Life Cycle Assessment',
				org: 'Fraunhofer IZM',
				year: 2022,
				url: 'https://www.fairphone.com/wp-content/uploads/2022/07/Fairphone-4-Life-Cycle-Assessment-22.pdf'
			}
		]
	}
];

export const categories = [...new Set(products.map((p) => p.category))];
