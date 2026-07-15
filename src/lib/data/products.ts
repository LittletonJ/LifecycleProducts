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
	},
	{
		id: 'cotton-tote-bag',
		name: 'Cotton Tote Bag',
		category: 'Household',
		description: 'Woven cotton canvas shopping bag, the free-with-purchase kind',
		imageUrl: '/images/tote-bag.svg',
		price: 15.0,
		usesPerYear: 104,
		costBreakdown: {
			rawMaterials: 20,
			manufacturing: 18,
			labor: 15,
			transportation: 7,
			marketing: 20,
			retail: 14,
			profit: 6
		},
		assessment: {
			negatives: {
				carbon: 2.5,
				water: 300,
				waste: 0.2,
				landUse: 2,
				pollution: 3
			},
			positives: {
				livingWages: false,
				environmentalImprovements: [
					'Genuinely durable — a decade of weekly shopping is realistic for a well-made bag',
					'Avoids the marine-litter pathway of thin film bags',
					'Compostable at true end of life (minus any plastic print or zipper)'
				],
				recyclability: {
					percentage: 70,
					materialType: 'natural',
					downcyclingPenalty: 0.35,
					effectiveRecyclability: 45.5,
					notes:
						'Cotton downcycles to rags and insulation at best; printed logos and coatings contaminate the stream. Most totes end up as landfill — after a life spent mostly in a cupboard with thirty others.'
				},
				repairability: 7
			},
			lifetime: 5,
			comparison: {
				baseline: 'The thin plastic bags you would have used — and reused as bin liners',
				baselineNote:
					'The two big government LCAs agree: production dominates, and a thin HDPE bag reused once as a bin liner is a remarkably efficient object. The UK Environment Agency put the climate break-even for cotton at 131 uses; the Danish EPA, counting all impact categories, at up to 7,100 (20,000 for organic cotton) — the ozone-depletion indicator alone drives that headline number.',
				productionCarbon: 2.5,
				baselineAnnualCarbon: 1.7,
				annualImpacts: {
					baselineLabel: 'HDPE bags (104/yr)',
					product: { carbon: 0.5, water: 60, waste: 0.04, landUse: 0.4 },
					baseline: { carbon: 1.7, water: 10, waste: 0.55, landUse: 0.01 },
					note: 'Production only; the tote amortized over five years of twice-weekly shopping, the baseline as ~104 thin HDPE bags. Cotton irrigation and farmland dominate the tote column; the bags win on water and land but lose on litter — a category LCAs count poorly.'
				},
				breakEven: {
					value: 131,
					unit: 'uses',
					against: 'single-use HDPE bags on the same shopping schedule',
					achievability: 'realistic',
					note: 'About 15 months of twice-weekly shopping — realistic for one tote used deliberately. The catch: households own dozens. The UK EA figure is climate-only; on all-indicator accounting (Danish EPA) the number runs into the thousands, driven by cotton farming.'
				}
			},
			usePhase: {
				shareOfFootprint: 5,
				drivers: [
					'Occasional washing is trivial; the footprint is almost entirely baked in at purchase',
					'The real use-phase variable is whether the bag is actually with you at the shop'
				],
				hygiene: {
					risk: 'low',
					note: 'Wash occasionally, especially after carrying raw meat or leaking produce — a known but manageable cross-contamination point.'
				},
				careRequired: 'Use the same bag for years and wash it cold now and then. The 131-use math assumes one bag, not a drawer full.'
			},
			verdict: {
				tier: 'marginal',
				headline: 'The mascot of green shopping barely earns its keep',
				bottomLine:
					'A cotton tote used twice a week for over a year does eventually beat thin plastic bags on climate — but a free-with-conference-swag tote used four times is strictly worse than the plastic it replaced, and on full-indicator accounting cotton may never win. The greenest carrier is whichever bag you already own, used until it falls apart.',
				caveats: [
					'Break-even is 131 uses on climate alone; up to 7,100 uses counting all impact categories (Danish EPA)',
					'Organic cotton makes it worse per bag — lower yields push the all-indicator figure toward 20,000 uses',
					'Most households accumulate totes as merchandise; each new one restarts the clock',
					'A thin HDPE bag reused as a bin liner is one of the most efficient carriers ever designed',
					'Cotton farming\'s water and land costs are real; plastic litter costs are real too — the LCAs just can\'t weigh them against each other'
				],
				smarterMove:
					'Stop acquiring totes. Use the bags you have — any material — until they die, and reuse thin plastic bags as bin liners before recycling.'
			},
			confidence: {
				level: 'high',
				note: 'Two independent government LCAs (UK EA 2011, Danish EPA 2018) converge on the ranking and the order of magnitude of reuse thresholds. Absolute figures vary with cotton sourcing assumptions.'
			},
			healthImpacts: {
				score: 8,
				concerns: ['Cross-contamination from unwashed bags that carried raw meat'],
				benefits: ['No chemical concerns in plain woven cotton']
			},
			useAndQuality: {
				durability: 8,
				functionality: 8,
				userSatisfaction: 8
			}
		},
		sources: [
			{
				title: 'Life Cycle Assessment of grocery carrier bags (Environmental Project no. 1985)',
				org: 'Danish Environmental Protection Agency',
				year: 2018,
				url: 'https://www2.mst.dk/udgiv/publications/2018/02/978-87-93614-73-4.pdf'
			},
			{
				title: 'Life cycle assessment of supermarket carrier bags (SC030148)',
				org: 'UK Environment Agency',
				year: 2011,
				url: 'https://assets.publishing.service.gov.uk/media/5a7bff74ed915d01ba1ca7c7/scho0711buan-e-e.pdf'
			}
		]
	},
	{
		id: 'reusable-coffee-cup',
		name: 'Reusable Coffee Cup',
		category: 'Drinkware',
		description: 'Insulated 350 ml travel cup for takeaway coffee',
		imageUrl: '/images/coffee-cup.svg',
		price: 25.0,
		usesPerYear: 260,
		costBreakdown: {
			rawMaterials: 22,
			manufacturing: 20,
			labor: 12,
			transportation: 8,
			marketing: 20,
			retail: 12,
			profit: 6
		},
		assessment: {
			negatives: {
				carbon: 3,
				water: 200,
				waste: 0.3,
				landUse: 0.1,
				pollution: 3
			},
			positives: {
				livingWages: false,
				environmentalImprovements: [
					'Displaces a genuinely wasteful object: the PE-lined paper cup is near-unrecyclable in practice',
					'Steel body recycles indefinitely at end of life',
					'Many cafés discount refills — the rare eco swap that pays you back'
				],
				recyclability: {
					percentage: 85,
					materialType: 'metal',
					downcyclingPenalty: 0.1,
					effectiveRecyclability: 76.5,
					notes:
						'The steel recycles well; the plastic lid and gasket don\'t. Disposable cups are worse than they look: the polyethylene lining means under 1% are actually recycled, whatever the bin says.'
				},
				repairability: 3
			},
			lifetime: 5,
			comparison: {
				baseline: 'A disposable PE-lined paper cup and plastic lid per coffee',
				baselineNote:
					'Break-even studies cluster in the tens of uses — Woods & Bakshi put a ceramic/reusable cup ahead of disposables within 20–100 uses depending on washing method and local electricity. A weekday coffee habit clears that in months. The wildcard is washing: a dedicated hot hand-wash per use can push break-even out several-fold.',
				productionCarbon: 3,
				baselineAnnualCarbon: 15,
				annualImpacts: {
					baselineLabel: '260 disposable cups a year',
					product: { carbon: 0.6, water: 40, waste: 0.06, landUse: 0.02 },
					baseline: { carbon: 15, water: 260, waste: 3.4, landUse: 0.5 },
					note: 'Production only; the cup amortized over five years of a weekday habit, the baseline as 260 lined paper cups with lids (UNEP meta-review figures). Washing energy — the reusable cup\'s main running cost — is excluded and can be significant if you hot-wash after every coffee.'
				},
				breakEven: {
					value: 30,
					unit: 'uses',
					against: 'a takeaway coffee in a disposable cup every weekday',
					achievability: 'realistic',
					note: 'Six weeks of weekday coffees, washing efficiently. Literature range is roughly 20–100 uses; wasteful washing sits you at the far end. The habit that never works: buying a new cup each time you leave yours at the office.'
				}
			},
			usePhase: {
				shareOfFootprint: 40,
				drivers: [
					'Washing energy is the dominant running cost — worst case is a hot tap running per rinse',
					'Remembering the cup is the real constraint; forgotten cups mean parallel disposable use'
				],
				hygiene: {
					risk: 'medium',
					note: 'Milk residue makes coffee cups a bacterial growth medium; lids and gaskets trap it. Daily proper washing is non-negotiable — and that\'s the energy the LCAs charge you for.'
				},
				careRequired: 'Wash daily but efficiently (in the dishwasher with a full load, or a quick cool wash), deep-clean the lid weekly, and keep one cup for years.'
			},
			verdict: {
				tier: 'conditional',
				headline: 'Pays off in weeks for a daily habit — if washing stays sane',
				bottomLine:
					'For an actual weekday takeaway habit this is one of the faster paybacks in the reusables aisle: tens of uses against a disposable cup that\'s effectively unrecyclable. The conditions: you must remember it, wash it efficiently, and not own five. For the occasional coffee, the maths never starts — the café\'s ceramic cup was already the right answer.',
				caveats: [
					'Break-even stretches several-fold with a hot hand-wash per use',
					'Only counts when it actually displaces a disposable — sit-in coffee in ceramic was already fine',
					'Lid and gasket are the hygiene and recycling weak points',
					'Owning several resets the math, same as water bottles',
					'Café discounts (10–50p) mean this is one of few eco products with a financial payback'
				],
				smarterMove:
					'Drink in, in ceramic, when you can. Otherwise one cup, kept in the bag you actually carry, washed with the dishes rather than under a running hot tap.'
			},
			confidence: {
				level: 'medium',
				note: 'Break-even in the tens of uses is consistent across Woods & Bakshi (2014) and UNEP\'s 2021 meta-review; washing behavior and local grid carbon drive the spread.'
			},
			healthImpacts: {
				score: 8,
				concerns: ['Milk residue and biofilm in lids without daily washing'],
				benefits: ['Food-grade steel; no lining chemicals', 'Insulation prevents scald-temperature spills better than a flimsy lid']
			},
			useAndQuality: {
				durability: 9,
				functionality: 9,
				userSatisfaction: 8
			}
		},
		sources: [
			{
				title: 'Reusable vs. disposable cups revisited: guidance in life cycle comparisons',
				org: 'International Journal of Life Cycle Assessment (Woods & Bakshi)',
				year: 2014,
				url: 'https://link.springer.com/article/10.1007/s11367-013-0697-7'
			},
			{
				title: 'Single-use beverage cups and their alternatives: Recommendations from Life Cycle Assessments',
				org: 'UNEP / Life Cycle Initiative',
				year: 2021,
				url: 'https://www.lifecycleinitiative.org/wp-content/uploads/2021/02/UNEP_-LCA-Beverage-Cups-Report_Web.pdf'
			}
		]
	},
	{
		id: 'safety-razor',
		name: 'Metal Safety Razor',
		category: 'Personal Care',
		description: 'Double-edge safety razor with replaceable steel blades',
		imageUrl: '/images/safety-razor.svg',
		price: 40.0,
		usesPerYear: 156,
		costBreakdown: {
			rawMaterials: 25,
			manufacturing: 25,
			labor: 12,
			transportation: 6,
			marketing: 15,
			retail: 12,
			profit: 5
		},
		assessment: {
			negatives: {
				carbon: 1.5,
				water: 100,
				waste: 0.05,
				landUse: 0.05,
				pollution: 4
			},
			positives: {
				livingWages: false,
				environmentalImprovements: [
					'Replaces the most over-engineered disposable in the bathroom: multi-material cartridges that recycle nowhere',
					'Blades are plain stainless steel — collectable in a tin and recyclable as metal',
					'A brass or steel handle outlives its owner; the product category predates planned obsolescence'
				],
				recyclability: {
					percentage: 90,
					materialType: 'metal',
					downcyclingPenalty: 0.05,
					effectiveRecyclability: 85.5,
					notes:
						'Solid metal throughout — the rare product that is genuinely recyclable. Used blades go in a sealed tin (a \'blade bank\') to the metal stream. Cartridges, by contrast, are fused plastic-rubber-steel sandwiches that no kerbside system takes.'
				},
				repairability: 9
			},
			lifetime: 30,
			comparison: {
				baseline: 'Cartridge razor system, ~26 cartridges a year',
				baselineNote:
					'The RSA Great Recovery project\'s LCA scored a cartridge system at roughly seven times the environmental impact of a double-edge safety razor (115 vs 16 mPt) — the cartridge itself, a bonded multi-material part, is the culprit. The stakes are small in absolute terms, but the direction is unambiguous.',
				productionCarbon: 1.5,
				baselineAnnualCarbon: 1.5,
				annualImpacts: {
					baselineLabel: 'Cartridge razors (26 carts/yr)',
					product: { carbon: 0.15, water: 5, waste: 0.03, landUse: 0.01 },
					baseline: { carbon: 1.5, water: 30, waste: 0.4, landUse: 0.01 },
					note: 'Production only: the handle amortized over 30 years plus ~100 steel blades a year, versus 26 cartridges and a replacement handle every few years. Derived from material masses and the RSA LCA ratio — low confidence on absolutes, high on the direction. Hot water for shaving, identical for both, is excluded and dwarfs both columns.'
				},
				breakEven: {
					value: 1,
					unit: 'years',
					against: 'a cartridge habit at ~26 cartridges a year',
					achievability: 'easy',
					note: 'The handle\'s embodied footprint pays back in about a year of avoided cartridges — and financially it\'s even faster: DE blades cost pennies against cartridges at several dollars each. After year one it\'s all upside, for decades.'
				}
			},
			usePhase: {
				shareOfFootprint: 70,
				drivers: [
					'Hot water down the drain per shave outweighs the hardware many times over',
					'Blade changes weekly; the hardware footprint is essentially a rounding error after year one'
				],
				hygiene: {
					risk: 'low',
					note: 'Rinse and dry the razor; store blades dry. Used blades go in a blade bank, not loose in the bin — a sharps consideration, not a hygiene one.'
				},
				careRequired: 'Dry it after use, change blades weekly, and simply don\'t lose it. The 30-year story requires no maintenance beyond that.'
			},
			verdict: {
				tier: 'genuine',
				headline: 'The rare eco swap that\'s also just the cheaper product',
				bottomLine:
					'This is what a genuine win looks like: one durable metal object plus pennies-per-blade, against a subscription of fused-plastic cartridges designed to be unrecyclable. The environmental stakes are honestly small — grams of plastic per week — but every column points the same way, the payback is under a year, and the financial case is stronger than the environmental one. The catch is a fortnight\'s learning curve.',
				caveats: [
					'Absolute stakes are small — this is bathroom-drawer scale, not car-or-flight scale',
					'A learning curve of a couple of weeks; more nicks at first',
					'\'Eco\' safety razors at $80+ undo the value case — a $25–40 razor is the same steel',
					'Used blades need a blade bank; loose blades in recycling are a hazard for sorters',
					'Hot shower water while you shave outweighs everything on this page'
				],
				smarterMove:
					'Any basic DE razor, used for decades. If cartridges suit you, the honest optimization is shorter hot-water time, not a different handle.'
			},
			confidence: {
				level: 'low',
				note: 'No peer-reviewed razor LCA exists. The RSA Great Recovery design-project LCA (7× impact ratio) plus material-mass estimates set the direction firmly; absolute figures are order-of-magnitude.'
			},
			healthImpacts: {
				score: 8,
				concerns: ['Sharps handling — blades must be binned in a sealed container', 'Steeper learning curve; minor nicks while learning'],
				benefits: ['Single blade irritates sensitive skin less than five-blade cartridges for many users', 'No lubricating-strip chemicals']
			},
			useAndQuality: {
				durability: 10,
				functionality: 8,
				userSatisfaction: 8
			}
		},
		sources: [
			{
				title: 'Redesigning the razor — a life cycle assessment case study',
				org: 'RSA Great Recovery programme',
				year: 2013,
				url: 'http://www.greatrecovery.org.uk/resources/3682/'
			},
			{
				title: 'BIC Disposable Razor — materials life cycle',
				org: 'Design Life-Cycle (UC Davis)',
				year: 2015,
				url: 'http://www.designlife-cycle.com/bic-disposable-razor'
			}
		]
	},
	{
		id: 'menstrual-cup',
		name: 'Menstrual Cup',
		category: 'Health',
		description: 'Medical-grade silicone cup, reusable for 5–10 years',
		imageUrl: '/images/menstrual-cup.svg',
		price: 30.0,
		usesPerYear: 60,
		costBreakdown: {
			rawMaterials: 12,
			manufacturing: 18,
			labor: 10,
			transportation: 5,
			marketing: 30,
			retail: 18,
			profit: 7
		},
		assessment: {
			negatives: {
				carbon: 0.2,
				water: 20,
				waste: 0.05,
				landUse: 0.01,
				pollution: 2
			},
			positives: {
				livingWages: false,
				environmentalImprovements: [
					'Displaces roughly 2,400 single-use products over a decade with one 50-gram object',
					'The Lancet review\'s waste comparison: one cup equals ~0.4% of the plastic waste of pads, ~6% of tampons, over ten years',
					'No cotton farming, no pulp, no wrappers, no applicators'
				],
				recyclability: {
					percentage: 20,
					materialType: 'composite',
					downcyclingPenalty: 0.8,
					effectiveRecyclability: 4,
					notes:
						'Silicone barely recycles — but at 50 grams per decade, end-of-life is beside the point. The avoided waste stream (thousands of pads/tampons, wrappers, and applicators) is the story.'
				},
				repairability: 2
			},
			lifetime: 8,
			comparison: {
				baseline: 'Tampons or pads, ~240 a year',
				baselineNote:
					'The honest baseline is whatever you use now. Against ~20 tampons or pads per cycle, the cup\'s production footprint is repaid within a few cycles; the Lancet Public Health review found purchase cost at roughly 5–7% of pads/tampons over ten years. This is the strongest per-dollar swap on this site.',
				productionCarbon: 0.2,
				baselineAnnualCarbon: 5,
				annualImpacts: {
					baselineLabel: 'Tampons/pads (~240/yr)',
					product: { carbon: 0.03, water: 2.5, waste: 0.01, landUse: 0.01 },
					baseline: { carbon: 5, water: 400, waste: 1.5, landUse: 1 },
					note: 'Production only; the cup amortized over eight years, the baseline as ~240 disposables including cotton cultivation, pulp, wrappers, and applicators. Boiling water to sterilize the cup between cycles is excluded — it\'s real but tiny (a kettle\'s worth per cycle). Waste and cost ratios are the high-confidence numbers (Lancet 2019); carbon is derived.'
				},
				breakEven: {
					value: 3,
					unit: 'months',
					against: 'a typical tampon or pad habit',
					achievability: 'easy',
					note: 'Environmentally repaid within about three cycles; financially within roughly six months at typical prices. Every year after that is nearly free, in both senses, for up to a decade.'
				}
			},
			usePhase: {
				shareOfFootprint: 20,
				drivers: [
					'A few minutes of boiling water per cycle for sterilization — the entire running cost',
					'Requires access to clean water and privacy for washing, which is a genuine constraint in some settings'
				],
				hygiene: {
					risk: 'medium',
					note: 'The Lancet review (43 studies, 3,300 users) found safety comparable to other products: five TSS cases reported, similar-or-lower leakage, no tissue damage on examination. Wash hands, rinse between uses, boil between cycles — the protocol matters.'
				},
				careRequired: 'Rinse at each change, sterilize in boiling water between cycles, replace when the silicone degrades (years). Expect a 2–3 cycle learning curve.'
			},
			verdict: {
				tier: 'genuine',
				headline: 'The strongest product on this site — every column wins, by a lot',
				bottomLine:
					'One 50-gram cup against a decade of ~2,400 disposables: the waste ratio is 20-to-1 or better, cost runs ~5–7% of the disposable habit, and a 43-study systematic review found safety and leakage comparable to tampons and pads. The honest caveats are personal, not environmental: a real learning curve, and it isn\'t for everyone. But nothing else here comes close on impact-per-dollar.',
				caveats: [
					'2–3 cycle learning curve; the Lancet review notes familiarity drives satisfaction',
					'Fit varies — some users try more than one size or brand, which dents the one-object story',
					'Requires clean water and privacy for changes; a genuine barrier in some workplaces and settings',
					'Boil-between-cycles is not optional; shortcuts undermine the safety record',
					'Rare TSS cases exist (5 in the review) — the safety record is comparable to tampons, not risk-free'
				],
				smarterMove:
					'If a cup doesn\'t suit, period underwear and cloth pads occupy the same reusable ground with a gentler learning curve — and even a partial switch (cup at home, disposables out) captures most of the benefit.'
			},
			confidence: {
				level: 'medium',
				note: 'Cost and waste comparisons are high-confidence (Lancet Public Health systematic review, 2019). Carbon and water figures are derived from material and cultivation factors — the review itself calls for formal environmental LCAs.'
			},
			healthImpacts: {
				score: 8,
				concerns: ['Rare toxic shock syndrome cases reported — comparable to tampons', 'Requires diligent cleaning routine'],
				benefits: ['No fibers or absorbency chemicals left in contact with tissue', 'Similar or lower leakage than pads/tampons in comparative studies', '12-hour wear time']
			},
			useAndQuality: {
				durability: 9,
				functionality: 9,
				userSatisfaction: 8
			}
		},
		sources: [
			{
				title: 'Menstrual cup use, leakage, acceptability, safety, and availability: a systematic review and meta-analysis',
				org: 'The Lancet Public Health (van Eijk et al.)',
				year: 2019,
				url: 'https://www.thelancet.com/journals/lanpub/article/PIIS2468-2667(19)30111-2/fulltext'
			}
		]
	},
	{
		id: 'cloth-nappies',
		name: 'Reusable Cloth Nappies',
		category: 'Baby & Kids',
		description: 'A full kit of ~20 modern cloth nappies with washable inserts',
		imageUrl: '/images/cloth-nappy.svg',
		price: 400.0,
		usesPerYear: 1825,
		costBreakdown: {
			rawMaterials: 25,
			manufacturing: 22,
			labor: 15,
			transportation: 6,
			marketing: 12,
			retail: 14,
			profit: 6
		},
		assessment: {
			negatives: {
				carbon: 100,
				water: 8000,
				waste: 5,
				landUse: 20,
				pollution: 4
			},
			positives: {
				livingWages: false,
				environmentalImprovements: [
					'DEFRA\'s 2023 LCA: ~25% lower climate impact than disposables over 2.5 years, washing included',
					'Avoids ~4,500 disposables per child — end-of-life impact of a disposable is ~9× that of a reusable',
					'The kit survives a second child, which roughly halves its per-child footprint'
				],
				recyclability: {
					percentage: 50,
					materialType: 'natural',
					downcyclingPenalty: 0.4,
					effectiveRecyclability: 30,
					notes:
						'Cotton and bamboo inserts downcycle to rags; PUL waterproof shells don\'t recycle. The meaningful end-of-life is resale or a second child — a strong secondhand market exists, unlike almost everything else on this site.'
				},
				repairability: 7
			},
			lifetime: 2.5,
			comparison: {
				baseline: 'Disposable nappies, ~5 a day for 2.5 years',
				baselineNote:
					'The rare case where the government did the whole LCA twice. The 2008 Environment Agency study famously found reusables could be *worse* if tumble-dried and washed at 90°C; the 2023 DEFRA update — modern machines, a cleaner grid — finds reusables ~25% better on climate (344 vs 457 kg CO2e over 2.5 years), with the gap widening as the grid decarbonizes. Washing behavior is still the whole ballgame.',
				productionCarbon: 100,
				baselineAnnualCarbon: 183,
				annualImpacts: {
					baselineLabel: 'Disposables (~5/day)',
					product: { carbon: 138, water: 4000, waste: 2, landUse: 8 },
					baseline: { carbon: 183, water: 1200, waste: 73, landUse: 20 },
					note: 'Unlike other tables on this site, this one includes the use phase — washing at 60°C and line-drying — because for nappies washing IS the story (DEFRA 2023 totals, annualized over 2.5 years). Reusables trade landfill mass (73 kg/yr of disposables) for water and washing energy. Tumble-drying everything can erase the carbon advantage.'
				},
				breakEven: {
					value: 1,
					unit: 'years',
					against: 'disposables at ~5 changes a day',
					achievability: 'demanding',
					note: 'The kit\'s production footprint is repaid within roughly a year of avoided disposables — if washed in full loads at 60°C or below and line-dried. Financially the payback is similar (~£1,000+ of disposables avoided per child). Tumble-drying daily or washing at 90°C pushes environmental break-even toward never (per the 2008 study\'s cautionary result).'
				}
			},
			usePhase: {
				shareOfFootprint: 70,
				drivers: [
					'Washing and especially drying dominate: line-drying vs tumble-drying is the single biggest lever',
					'Wash temperature and load size are the second lever — full loads at 40–60°C, not boil washes'
				],
				hygiene: {
					risk: 'medium',
					note: 'A 60°C wash with adequate detergent handles pathogen load; sanitizer cycles exist for illness periods. This is solved textile hygiene, not a leap of faith — but it is real laundry, ~3 extra loads a week.'
				},
				careRequired: 'Dry-pail, wash every 2–3 days in full loads at 40–60°C, line-dry. Elastics and PUL last ~2.5 years of this; the routine is the product.'
			},
			verdict: {
				tier: 'conditional',
				headline: 'Wins by a quarter — but the washing machine casts the deciding vote',
				bottomLine:
					'The 2023 DEFRA LCA settles a two-decade argument: reusables now beat disposables by ~25% on climate, and it\'s not close on landfill mass — but only under sane washing (full loads, ≤60°C, line-dried). The 2008 study showing tumble-dried reusables losing outright is still the honest warning label. This is also ~3 extra laundry loads a week for two and a half years; the commitment is real, and so is the ~£1,000 saved.',
				caveats: [
					'Tumble-drying daily can erase the entire climate advantage — the 2008 EA study proved it',
					'~3 extra wash loads a week, every week, for 2.5 years',
					'Water use is genuinely higher than disposables — a real cost in water-stressed regions',
					'Part-time use (reusables at home, disposables out) captures most benefit with less burden',
					'Buying 30 cute prints instead of 20 workhorses inflates the production footprint you\'re trying to amortize'
				],
				smarterMove:
					'Buy the kit secondhand (the market is liquid), use it for two children or resell, and go part-time without guilt — every avoided disposable counts the same.'
			},
			confidence: {
				level: 'high',
				note: 'Two full government LCAs (EA 2008, DEFRA 2023) with transparent methodology. The 25% climate advantage and its sensitivity to washing/drying behavior are the best-evidenced numbers on this site.'
			},
			healthImpacts: {
				score: 8,
				concerns: ['Requires reliable wash routine to control pathogen load', 'Slightly higher rash vigilance — change frequency matters more than with superabsorbent disposables'],
				benefits: ['No superabsorbent polymers or fragrances against skin', 'Some evidence of earlier potty training']
			},
			useAndQuality: {
				durability: 7,
				functionality: 8,
				userSatisfaction: 7
			}
		},
		sources: [
			{
				title: 'Disposable and reusable nappies in the UK: life cycle assessment (EV0493)',
				org: 'DEFRA',
				year: 2023,
				url: 'https://www.gov.uk/government/publications/disposable-and-reusable-nappies-in-the-uk-life-cycle-assessment'
			},
			{
				title: 'An updated lifecycle assessment study for disposable and reusable nappies (SC010018/SR2)',
				org: 'UK Environment Agency',
				year: 2008,
				url: 'https://assets.publishing.service.gov.uk/media/5a7c4054e5274a1b00422810/scho0808boir-e-e.pdf'
			}
		]
	},
	{
		id: 'rechargeable-batteries',
		name: 'Rechargeable Batteries (NiMH)',
		category: 'Electronics',
		description: 'Four NiMH AA cells and a charger',
		imageUrl: '/images/batteries.svg',
		price: 35.0,
		usesPerYear: 100,
		costBreakdown: {
			rawMaterials: 30,
			manufacturing: 25,
			labor: 10,
			transportation: 7,
			marketing: 10,
			retail: 12,
			profit: 6
		},
		assessment: {
			negatives: {
				carbon: 2.5,
				water: 150,
				waste: 0.15,
				landUse: 0.05,
				pollution: 6
			},
			positives: {
				livingWages: false,
				environmentalImprovements: [
					'On waste, it\'s a rout: Dolci et al. found rechargeables win convincingly after just a handful of cycles',
					'Displaces dozens of alkaline cells a year in high-drain devices',
					'NiMH chemistry avoids the cadmium of older rechargeables and recycles through battery take-back schemes'
				],
				recyclability: {
					percentage: 75,
					materialType: 'mixed',
					downcyclingPenalty: 0.25,
					effectiveRecyclability: 56,
					notes:
						'Nickel and steel recover well through battery take-back streams — where cells actually reach them. Alkalines, by contrast, are mostly landfilled by the dozen; collection rates for household batteries remain poor everywhere.'
				},
				repairability: 2
			},
			lifetime: 6,
			comparison: {
				baseline: 'Disposable alkaline AAs, ~48 a year for high-drain devices',
				baselineNote:
					'The peer-reviewed answer is “it depends on cycles”: Dolci et al. found rechargeables clearly better on waste from almost the first recharge, but needing tens-to-hundreds of cycles to win every environmental indicator, because a NiMH cell plus charger embodies far more than one alkaline. High-drain devices (flashes, controllers, toys) rack up cycles fast; a TV remote never will.',
				productionCarbon: 2.5,
				baselineAnnualCarbon: 4,
				annualImpacts: {
					baselineLabel: 'Alkaline AAs (48/yr)',
					product: { carbon: 0.5, water: 25, waste: 0.03, landUse: 0.01 },
					baseline: { carbon: 4, water: 100, waste: 1.2, landUse: 0.05 },
					note: 'Production amortized over six years for the cells and charger, versus ~48 alkalines a year — a high-drain household. Charging electricity is real but tiny (~0.01 kWh per cycle). For a low-drain household using 8 alkalines a year, divide the baseline column by six and the case largely evaporates.'
				},
				breakEven: {
					value: 1,
					unit: 'years',
					against: 'alkaline consumption in high-drain devices',
					achievability: 'realistic',
					note: 'Roughly 50 charge cycles across the set — about a year in cameras, game controllers, or kids\' toys. In a TV remote, a single alkaline pair lasts years and the rechargeable kit never pays back; NiMH self-discharge actually makes it worse there.'
				}
			},
			usePhase: {
				shareOfFootprint: 15,
				drivers: [
					'Charging electricity is negligible per cycle; the embodied nickel is the investment being amortized',
					'Self-discharge means NiMH cells suit devices used weekly, not yearly'
				],
				hygiene: { risk: 'low', note: 'No hygiene considerations.' },
				careRequired: 'Use them where batteries actually die: flashes, controllers, toys. Store charged, recycle through battery take-back at true end of life (~500–1000 cycles).'
			},
			verdict: {
				tier: 'conditional',
				headline: 'Genuine for the games controller; mostly marketing for the TV remote',
				bottomLine:
					'This is two products wearing one label. In high-drain devices, rechargeables repay their (considerable) embodied footprint within a year and then win every column for a decade — the waste math alone is 40-to-1. In low-drain devices, an alkaline pair lasts years, the charger sits embodied and idle, and self-discharging NiMH cells are actively the worse choice. Match the chemistry to the device and this is one of the easiest genuine wins in the house.',
				caveats: [
					'The win is per-device, not per-household: remotes, clocks, and smoke alarms belong on alkaline (or lithium primaries)',
					'Requires tens of charge cycles to beat alkalines on every indicator — waste excepted, which rechargeables win almost immediately',
					'Nickel mining gives the cells a real upfront pollution cost; the payback argument depends on actually cycling them',
					'Cheap chargers that cook cells shorten the 500-cycle life the math assumes',
					'Cells that migrate to a drawer and self-discharge flat count as disposables with extra steps'
				],
				smarterMove:
					'Buy one quality set for the high-drain devices you own, keep alkalines in the remote, and take dead cells of either kind to battery collection — landfilled batteries are the worst outcome in every study.'
			},
			confidence: {
				level: 'medium',
				note: 'Dolci et al. (2016) is a thorough peer-reviewed comparison; the cycle-count dependence of the verdict is its central, robust finding. Absolute figures scale with local grid and usage assumptions.'
			},
			healthImpacts: {
				score: 9,
				concerns: ['Standard battery safety — keep away from small children'],
				benefits: ['Fewer leaked alkaline cells corroding devices', 'Less household hazardous waste overall']
			},
			useAndQuality: {
				durability: 8,
				functionality: 8,
				userSatisfaction: 8
			}
		},
		sources: [
			{
				title: 'Life cycle assessment of consumption choices: a comparison between disposable and rechargeable household batteries',
				org: 'International Journal of Life Cycle Assessment (Dolci et al.)',
				year: 2016,
				url: 'https://link.springer.com/article/10.1007/s11367-016-1134-5'
			},
			{
				title: 'Life-Cycle Methods for Comparing Primary and Rechargeable Batteries',
				org: 'Environmental Science & Technology (Lankey & McMichael)',
				year: 2000,
				url: 'https://pubs.acs.org/doi/10.1021/es990526n'
			}
		]
	},
	{
		id: 'e-reader',
		name: 'E-Reader',
		category: 'Electronics',
		description: 'E-ink reading device in the Kindle/Kobo class',
		imageUrl: '/images/e-reader.svg',
		price: 140.0,
		usesPerYear: 200,
		costBreakdown: {
			rawMaterials: 25,
			manufacturing: 30,
			labor: 8,
			transportation: 5,
			marketing: 15,
			retail: 10,
			profit: 7
		},
		assessment: {
			negatives: {
				carbon: 40,
				water: 700,
				waste: 0.2,
				landUse: 0.1,
				pollution: 6
			},
			positives: {
				livingWages: false,
				environmentalImprovements: [
					'Each e-book read carries near-zero marginal footprint once the device exists',
					'E-ink sips power — weeks per charge; the electricity story is nothing like a tablet\'s',
					'Displaces printing, warehousing, and shipping of physical books for heavy readers'
				],
				recyclability: {
					percentage: 40,
					materialType: 'mixed',
					downcyclingPenalty: 0.5,
					effectiveRecyclability: 20,
					notes:
						'A glued sandwich of glass, lithium battery, and PCB: e-waste stream only, and only 22% of e-waste is formally processed globally. The honest end-of-life plan is using it for many years, then a take-back scheme.'
				},
				repairability: 3
			},
			lifetime: 6,
			comparison: {
				baseline: 'The new paper books you would actually have bought',
				baselineNote:
					'Moberg et al.\'s screening LCA put the break-even in the low tens of books: a device embodying ~30–60 kg CO2e against roughly 1–3 kg per new printed book. A dozen new books a year clears it in ~3 years; a heavy reader in one. But the baseline collapses if your books were secondhand or from the library — shared copies have tiny marginal footprints the device can never beat.',
				productionCarbon: 40,
				baselineAnnualCarbon: 15,
				annualImpacts: {
					baselineLabel: 'A dozen new paper books a year',
					product: { carbon: 6.7, water: 117, waste: 0.03, landUse: 0.02 },
					baseline: { carbon: 15, water: 300, waste: 0.5, landUse: 6 },
					note: 'Device production amortized over six years (charging electricity is negligible for e-ink), versus twelve new printed books — paper, printing, and distribution. Swap the baseline to library or secondhand books and the baseline column drops toward zero, taking the case for the device with it.'
				},
				breakEven: {
					value: 3,
					unit: 'years',
					against: 'buying ~12 new paper books a year',
					achievability: 'demanding',
					note: 'Roughly 25–40 new books\' worth of embodied carbon, i.e. ~3 years at a dozen books a year — demanding because the device must also survive that long and not be upgraded on a phone-like cycle. At 30+ books a year it\'s comfortably under 18 months. Against library borrowing: never.'
				}
			},
			usePhase: {
				shareOfFootprint: 10,
				drivers: [
					'E-ink power use is trivial — a few charges a month',
					'The real use-phase risk is device churn: upgrading every 3 years resets the embodied clock'
				],
				hygiene: { risk: 'low', note: 'No hygiene considerations.' },
				careRequired: 'Keep it 6+ years and replace the battery if the model allows. The break-even math dies on an upgrade habit.'
			},
			verdict: {
				tier: 'conditional',
				headline: 'Beats buying new books for heavy readers — but the library beats both',
				bottomLine:
					'The LCA literature is consistent: an e-reader repays its ~40 kg embodied footprint after roughly 25–40 new printed books it displaces, so a genuine book-a-month habit wins within a few years. Two honest deflations: e-ink devices tempt phone-style upgrade cycles that reset the math, and the strongest option was never in the comparison — a library book\'s footprint is shared across dozens of borrowers, and no personal device beats that.',
				caveats: [
					'Break-even assumes the books displaced would have been bought new — secondhand and library reading voids the case',
					'Upgrading the device every 2–3 years resets the embodied clock; the math needs 6+ year ownership',
					'Battery and glued construction make repair hard; end-of-life is e-waste',
					'DRM means your library can evaporate with an account — a durability caveat paper never has',
					'Reading on a phone you already own has zero marginal hardware footprint'
				],
				smarterMove:
					'Library first — paper or ebook via library apps. If you buy 12+ new books a year and will keep the device 6 years, the e-reader is a real win; otherwise read on hardware you already own.'
			},
			confidence: {
				level: 'medium',
				note: 'Moberg et al. (2011) is a screening LCA with dated hardware figures; newer devices are lighter but the ~20–50 book break-even range has held up across later analyses (e.g. CIRAIG). Book-production figures vary ~3× with print run and paper stock.'
			},
			healthImpacts: {
				score: 9,
				concerns: ['Standard lithium battery handling at end of life'],
				benefits: ['E-ink avoids the blue-light exposure of tablet reading', 'Adjustable type is a genuine accessibility win']
			},
			useAndQuality: {
				durability: 7,
				functionality: 9,
				userSatisfaction: 9
			}
		},
		sources: [
			{
				title: 'Books from an environmental perspective — Part 2: e-books as an alternative to paper books',
				org: 'International Journal of Life Cycle Assessment (Moberg et al.)',
				year: 2011,
				url: 'https://link.springer.com/article/10.1007/s11367-011-0255-0'
			},
			{
				title: 'What is the most eco-friendly option for reading a book?',
				org: 'CIRAIG',
				year: 2021,
				url: 'https://ciraig.org/index.php/blog/what-is-the-most-eco-friendly-option-for-reading-a-book/'
			}
		]
	},
	{
		id: 'beeswax-wraps',
		name: 'Beeswax Food Wraps',
		category: 'Kitchenware',
		description: 'Cotton cloth infused with beeswax, resin, and jojoba oil — a cling film alternative',
		imageUrl: '/images/beeswax-wrap.svg',
		price: 18.0,
		usesPerYear: 150,
		costBreakdown: {
			rawMaterials: 25,
			manufacturing: 15,
			labor: 20,
			transportation: 6,
			marketing: 20,
			retail: 9,
			profit: 5
		},
		assessment: {
			negatives: {
				carbon: 0.8,
				water: 150,
				waste: 0.1,
				landUse: 0.6,
				pollution: 2
			},
			positives: {
				livingWages: false,
				environmentalImprovements: [
					'Eliminates a stream of unrecyclable LDPE film from the kitchen',
					'Compostable at end of life — genuinely, since it\'s cotton and wax with no plastic layer',
					'Re-waxable at home, which can double or triple the working life'
				],
				recyclability: {
					percentage: 80,
					materialType: 'natural',
					downcyclingPenalty: 0.2,
					effectiveRecyclability: 64,
					notes:
						'Compostable in a home bin — one of the few honest \'compostable\' claims in the kitchen. The catch is that the cling film it replaces weighs so little that end-of-life was never the big number.'
				},
				repairability: 7
			},
			lifetime: 1,
			comparison: {
				baseline: 'Cling film, ~300 uses a year from a couple of rolls',
				baselineNote:
					'Here\'s the uncomfortable math: a year of cling film is maybe 400 grams of LDPE — about 1 kg CO2e. A three-pack of waxed cotton wraps embodies nearly that much before first use, thanks to cotton cultivation. The wraps roughly tie on carbon, win clearly on plastic waste, and lose on land and water. The stakes, either way, are measured in grams.',
				productionCarbon: 0.8,
				baselineAnnualCarbon: 1,
				annualImpacts: {
					baselineLabel: 'Cling film (~300 uses/yr)',
					product: { carbon: 0.8, water: 150, waste: 0.1, landUse: 0.6 },
					baseline: { carbon: 1, water: 5, waste: 0.45, landUse: 0.01 },
					note: 'A three-pack lasting one year (re-waxing extends it) versus ~400 g of LDPE film. Derived from LDPE and cotton production factors — no published wrap LCA exists; low confidence on absolutes. The columns nearly tie on carbon and diverge in opposite directions on waste versus land and water.'
				},
				breakEven: {
					value: 10,
					unit: 'months',
					against: 'household cling film use',
					achievability: 'realistic',
					note: 'Roughly ties within the first year on carbon; re-wax the cloth for a second year and it pulls ahead. If a wrap stiffens and gets binned at month four — common without re-waxing — it never catches up.'
				}
			},
			usePhase: {
				shareOfFootprint: 15,
				drivers: [
					'Cold-water washing only (hot melts the wax) — trivial energy',
					'Re-waxing every 6–12 months is the difference between a win and a loss'
				],
				hygiene: {
					risk: 'high',
					note: 'The honest limit: beeswax wraps cannot be sanitized (no hot water) and food-safety guidance says never use them on raw meat or fish. Cling film has no such restriction. For cheese, bread, produce, and bowl-covering they\'re fine.'
				},
				careRequired: 'Cold wash, air dry, re-wax when it stops sticking. Keep it away from raw meat — that job stays with film or a sealed container.'
			},
			verdict: {
				tier: 'marginal',
				headline: 'Solves a problem measured in grams — pleasantly',
				bottomLine:
					'Cling film is such a lightweight product that replacing it barely moves any number: the wraps roughly tie on carbon, win on plastic waste by half a kilo a year, and lose on cotton\'s land and water. They also can\'t touch raw meat, which film can. If you enjoy them, use them guilt-free — just don\'t mistake the purchase for climate action, and know that a plate over a bowl does the same job for free.',
				caveats: [
					'Cannot be sanitized — unsafe for raw meat and fish, the one job cling film does uniquely well',
					'Carbon-neutral-at-best versus film once cotton cultivation is counted',
					'Needs re-waxing to outlive its own embodied footprint; most wraps get binned stiff at month six',
					'The avoided plastic is ~400 g a year — real, but a rounding error beside packaging elsewhere in the kitchen',
					'A plate over the bowl, or the container you already own, beats both options at zero cost'
				],
				smarterMove:
					'Lidded containers you already own cover most cling-film jobs. Wraps are a pleasant upgrade for bread and cheese, not an environmental one.'
			},
			confidence: {
				level: 'low',
				note: 'No published LCA compares wraps to cling film; figures are derived from LDPE and cotton production factors. The tie-on-carbon, win-on-waste, lose-on-land shape is robust to the assumptions; exact numbers are not.'
			},
			healthImpacts: {
				score: 6,
				concerns: ['Cannot be sanitized; unsafe for raw meat/fish contact', 'Wax quality and additives vary by brand and are rarely disclosed'],
				benefits: ['No plasticizer contact with food', 'Breathable wrap actually keeps some produce fresher']
			},
			useAndQuality: {
				durability: 5,
				functionality: 6,
				userSatisfaction: 7
			}
		},
		sources: [
			{
				title: 'Beeswax Wraps as an Alternative to Single-Use Plastics — efficacy comparison',
				org: 'University of Akron (honors research)',
				year: 2023,
				url: 'https://ideaexchange.uakron.edu/honors_research_projects/1697/'
			},
			{
				title: 'Life cycle assessment of supermarket carrier bags (LDPE production factors)',
				org: 'UK Environment Agency',
				year: 2011,
				url: 'https://assets.publishing.service.gov.uk/media/5a7bff74ed915d01ba1ca7c7/scho0711buan-e-e.pdf'
			}
		]
	},
	{
		id: 'stainless-straw',
		name: 'Stainless Steel Straw',
		category: 'Drinkware',
		description: 'Four steel straws and a cleaning brush',
		imageUrl: '/images/steel-straw.svg',
		price: 8.0,
		usesPerYear: 200,
		costBreakdown: {
			rawMaterials: 28,
			manufacturing: 22,
			labor: 10,
			transportation: 8,
			marketing: 18,
			retail: 9,
			profit: 5
		},
		assessment: {
			negatives: {
				carbon: 0.5,
				water: 30,
				waste: 0.02,
				landUse: 0.01,
				pollution: 3
			},
			positives: {
				livingWages: false,
				environmentalImprovements: [
					'Addresses the marine-litter pathway — the one metric where plastic straws genuinely matter',
					'Steel recycles indefinitely; the straw itself is effectively permanent',
					'Ends the paper-straw experience, which converts drinks into pulp'
				],
				recyclability: {
					percentage: 90,
					materialType: 'metal',
					downcyclingPenalty: 0.05,
					effectiveRecyclability: 85.5,
					notes:
						'Solid stainless — fully recyclable, though a 15-gram straw is more likely to be lost than recycled. The plastic straw it replaces weighs 0.4 g and was never recyclable at that size.'
				},
				repairability: 8
			},
			lifetime: 10,
			comparison: {
				baseline: 'Plastic straws, ~200 a year — or, honestly, no straw at all',
				baselineNote:
					'Zanghelini et al.\'s six-material LCA found reusable straws need on the order of 100–150 uses to beat plastic on climate — washing included — and that paper straws are *worse* than plastic on most indicators. But a straw is a 0.4-gram object: the entire annual baseline is ~80 grams of plastic. The comparison every LCA quietly concedes: drinking from the glass wins outright.',
				productionCarbon: 0.5,
				baselineAnnualCarbon: 0.3,
				annualImpacts: {
					baselineLabel: 'Plastic straws (200/yr)',
					product: { carbon: 0.05, water: 3, waste: 0.01, landUse: 0.01 },
					baseline: { carbon: 0.3, water: 2, waste: 0.08, landUse: 0.01 },
					note: 'The four-pack amortized over ten years versus 200 PP straws. These are the smallest numbers on this site — both columns round to zero against any other product here. The plastic straw\'s real cost is the marine-litter pathway, which carbon accounting doesn\'t capture; the steel straw\'s real cost was never environmental at all.'
				},
				breakEven: {
					value: 150,
					unit: 'uses',
					against: 'single-use plastic straws, washing included',
					achievability: 'realistic',
					note: 'About nine months of daily use — realistic if it lives in your bag rather than a drawer. But note what\'s being optimized: the payback prize is fractions of a kilogram of CO2e per year.'
				}
			},
			usePhase: {
				shareOfFootprint: 50,
				drivers: [
					'Brush-washing with warm water is, absurdly, a meaningful share of the lifetime footprint at this scale',
					'Losing straws and repurchasing packs is how the math actually fails'
				],
				hygiene: {
					risk: 'medium',
					note: 'You cannot see inside it. Without regular brush-cleaning, the tube grows what dark damp tubes grow. The included brush is not an accessory; it\'s a requirement.'
				},
				careRequired: 'Brush it after sugary or dairy drinks, dishwasher when possible, and don\'t lose it — the replacement pack is where the footprint hides.'
			},
			verdict: {
				tier: 'marginal',
				headline: 'The mascot of eco-consumerism, solving its smallest problem',
				bottomLine:
					'The steel straw became the symbol of ocean plastic because of a viral turtle video, not because straws are a large waste stream — they\'re well under 1% of marine plastic by mass. The LCA math works out (∼150 uses to beat plastic), but both sides of the comparison are grams. The marine-litter benefit is real and the carbon benefit is negligible; meanwhile the actually superior option — no straw — costs nothing and needs no brush. Buy it for the drinking experience, not the planet.',
				caveats: [
					'Straws are a tiny fraction of marine plastic; the symbolism outruns the substance by orders of magnitude',
					'~150 uses to break even on climate, washing included — and losing it resets a ten-year clock',
					'Paper straws are worse than plastic on most LCA indicators; if a venue offers them, the eco choice is refusing',
					'The inside is invisible and needs real brush-cleaning — hygiene is the honest running cost',
					'For most drinks, most people, no straw is the winner every LCA declines to headline'
				],
				smarterMove:
					'Skip the straw. If you need one — motor control, sensitive teeth, kids — steel is a fine permanent answer; just keep the brush in rotation.'
			},
			confidence: {
				level: 'medium',
				note: 'Zanghelini et al. (2020) and the US trade-off analysis agree on rankings and the ~100+ use break-even; the marine-litter-vs-climate trade-off is explicit in both. Absolute values at this scale are honest rounding errors.'
			},
			healthImpacts: {
				score: 7,
				concerns: ['Interior biofilm without brush cleaning', 'Rigid metal is a dental hazard in moving vehicles — a real injury category'],
				benefits: ['No plasticizers; inert food-grade steel', 'Good for users who medically need straws']
			},
			useAndQuality: {
				durability: 10,
				functionality: 7,
				userSatisfaction: 7
			}
		},
		sources: [
			{
				title: 'Comparative life cycle assessment of drinking straws in Brazil',
				org: 'Journal of Cleaner Production (Zanghelini et al.)',
				year: 2020,
				url: 'https://www.sciencedirect.com/science/article/abs/pii/S0959652620331152'
			},
			{
				title: 'LCA of disposable drinking straws: a trade-off analysis with marine litter',
				org: 'Science of the Total Environment',
				year: 2022,
				url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8897272/'
			}
		]
	},
	{
		id: 'shampoo-bar',
		name: 'Shampoo Bar',
		category: 'Personal Care',
		description: 'Solid shampoo bar, paper-wrapped, ~80 washes per bar',
		imageUrl: '/images/shampoo-bar.svg',
		price: 12.0,
		usesPerYear: 156,
		costBreakdown: {
			rawMaterials: 22,
			manufacturing: 18,
			labor: 15,
			transportation: 4,
			marketing: 25,
			retail: 10,
			profit: 6
		},
		assessment: {
			negatives: {
				carbon: 0.25,
				water: 15,
				waste: 0.02,
				landUse: 0.05,
				pollution: 2
			},
			positives: {
				livingWages: false,
				environmentalImprovements: [
					'No plastic bottle — a concentrated product in a paper wrap',
					'Ships without water: liquid shampoo is mostly water moved around the planet in plastic',
					'Lasts ~80 washes per 100 g bar, roughly one 250–500 ml bottle equivalent'
				],
				recyclability: {
					percentage: 90,
					materialType: 'paper',
					downcyclingPenalty: 0.2,
					effectiveRecyclability: 72,
					notes:
						'A paper wrapper against an HDPE pump bottle with a polypropylene cap — the packaging comparison isn\'t close. The bar itself simply washes away, which is the point.'
				},
				repairability: 1
			},
			lifetime: 0.5,
			comparison: {
				baseline: 'Bottled liquid shampoo, ~4 bottles a year',
				baselineNote:
					'Rinse-off product LCAs agree on the shape: the use phase — heating shower water — dominates the lifecycle, and packaging plus transport of water-heavy liquid make up most of what\'s left. A solid bar deletes the bottle and the shipped water, cutting the non-shower share substantially. What it cannot touch is the shower itself.',
				productionCarbon: 0.25,
				baselineAnnualCarbon: 2,
				annualImpacts: {
					baselineLabel: 'Bottled shampoo (~4 bottles/yr)',
					product: { carbon: 0.5, water: 30, waste: 0.04, landUse: 0.1 },
					baseline: { carbon: 2, water: 60, waste: 0.5, landUse: 0.2 },
					note: 'Two bars a year versus four 400 ml bottles, production and packaging only. The elephant outside the table: hot water for hair-washing runs tens of kg CO2e a year for either product — a shorter or cooler rinse swamps the difference between bar and bottle.'
				},
				breakEven: {
					value: 0,
					unit: 'uses',
					against: 'bottled shampoo on the same washing schedule',
					achievability: 'easy',
					note: 'A like-for-like swap with no payback period — the bar is cheaper per wash and lower-impact per wash from day one. The only failure mode is abandoning it: a bar that doesn\'t suit your hair and gets binned half-used is worse than the bottle it replaced.'
				}
			},
			usePhase: {
				shareOfFootprint: 85,
				drivers: [
					'Heating shower water dominates — the product choice is the small term in this equation',
					'A bar left in a puddle dissolves; a draining soap dish is the entire maintenance manual'
				],
				hygiene: {
					risk: 'low',
					note: 'A personal bar that dries between uses poses no meaningful concern; shared bars in gym showers are a different conversation.'
				},
				careRequired: 'Keep it on a draining dish and let it dry. That single habit is the difference between 80 washes and 40.'
			},
			verdict: {
				tier: 'genuine',
				headline: 'A quiet, real win — just a small one',
				bottomLine:
					'The bar genuinely beats the bottle from the first wash: no plastic, no shipped water, cheaper per use, and no behavior change beyond a soap dish. That earns the \'genuine\' tier. Perspective, though: everything the bar improves is the ~15% of the footprint that isn\'t hot shower water. Two minutes less under the shower does more than a year of bars — do both and the order of importance stays honest.',
				caveats: [
					'Hot shower water is ~85% of the lifecycle — no product choice touches the main event',
					'True soap-based bars (high pH) can wreck some hair types; abandoned half-bars are pure waste — syndet bars behave like bottled shampoo',
					'A bar drowning in a wet dish loses half its lifespan, and the math with it',
					'Boutique bars at $20+ with tins and shipping erode the modest advantage',
					'Refill stations for liquid shampoo achieve most of the same packaging win'
				],
				smarterMove:
					'Any syndet shampoo bar on a draining dish — and a shower one song shorter. The second change outweighs the first tenfold.'
			},
			confidence: {
				level: 'low',
				note: 'No direct peer-reviewed bar-vs-bottle LCA exists; the shape (use-phase dominance, packaging/transport savings) is well established in rinse-off product LCAs and eco-design studies. Absolute per-product figures are derived.'
			},
			healthImpacts: {
				score: 8,
				concerns: ['High-pH true soaps suit some hair and scalps poorly'],
				benefits: ['Fewer preservatives needed than water-based liquids', 'No microplastic ingredients in most solid formulations']
			},
			useAndQuality: {
				durability: 6,
				functionality: 7,
				userSatisfaction: 7
			}
		},
		sources: [
			{
				title: 'Life cycle assessment (LCA) of the innovative eco-designed container for shampoo',
				org: 'Cleaner and Responsible Consumption',
				year: 2021,
				url: 'https://www.sciencedirect.com/science/article/pii/S2666784321000218'
			},
			{
				title: 'An LCA case study of hand washing with liquid and bar soap',
				org: 'ESU-services / SETAC poster (Witlox)',
				year: 2015,
				url: 'https://esu-services.ch/fileadmin/download/witlox-2015-LCA-soap-poster.pdf'
			}
		]
	}
];

export const categories = [...new Set(products.map((p) => p.category))];
