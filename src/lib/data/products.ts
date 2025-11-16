export interface LifecycleNegatives {
	carbon: number; // kg CO2e
	water: number; // liters
	waste: number; // kg
	landUse: number; // m²
	pollution: number; // 1-10 scale
}

export interface LifecyclePositives {
	livingWages: boolean;
	environmentalImprovements: string[];
	recyclability: number; // percentage
	repairability: number; // 1-10 scale
}

export interface CostBreakdown {
	rawMaterials: number; // percentage
	manufacturing: number; // percentage
	labor: number; // percentage
	transportation: number; // percentage
	marketing: number; // percentage
	retail: number; // percentage
	profit: number; // percentage
}

export interface Assessment {
	negatives: LifecycleNegatives;
	positives: LifecyclePositives;
	lifetime: number; // years
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
	usesPerYear: number; // estimated annual uses
	costBreakdown: CostBreakdown;
	assessment: Assessment;
}

export const products: Product[] = [
	{
		id: 'bamboo-toothbrush',
		name: 'Bamboo Toothbrush',
		category: 'Personal Care',
		description: 'Biodegradable toothbrush with bamboo handle and charcoal-infused bristles',
		imageUrl: '/images/bamboo-toothbrush.svg',
		price: 5.00,
		usesPerYear: 730, // 2x daily brushing
		costBreakdown: {
			rawMaterials: 25,
			manufacturing: 15,
			labor: 20,
			transportation: 10,
			marketing: 10,
			retail: 12,
			profit: 8
		},
		assessment: {
			negatives: {
				carbon: 0.8,
				water: 12,
				waste: 0.015,
				landUse: 0.02,
				pollution: 2
			},
			positives: {
				livingWages: true,
				environmentalImprovements: ['Biodegradable handle', 'Sustainable bamboo sourcing', 'Plastic-free packaging'],
				recyclability: 85,
				repairability: 1
			},
			lifetime: 0.25,
			healthImpacts: {
				score: 9,
				concerns: [],
				benefits: ['BPA-free', 'Natural antimicrobial properties']
			},
			useAndQuality: {
				durability: 7,
				functionality: 8,
				userSatisfaction: 8
			}
		}
	},
	{
		id: 'stainless-water-bottle',
		name: 'Stainless Steel Water Bottle',
		category: 'Drinkware',
		description: 'Double-walled insulated bottle that keeps drinks cold for 24h or hot for 12h',
		imageUrl: '/images/water-bottle.svg',
		price: 35.00,
		usesPerYear: 365, // daily use
		costBreakdown: {
			rawMaterials: 30,
			manufacturing: 20,
			labor: 15,
			transportation: 8,
			marketing: 12,
			retail: 10,
			profit: 5
		},
		assessment: {
			negatives: {
				carbon: 8.5,
				water: 280,
				waste: 0.45,
				landUse: 0.15,
				pollution: 4
			},
			positives: {
				livingWages: true,
				environmentalImprovements: ['Replaces 167 plastic bottles/year', 'Infinitely recyclable material'],
				recyclability: 100,
				repairability: 3
			},
			lifetime: 10,
			healthImpacts: {
				score: 10,
				concerns: [],
				benefits: ['No chemical leaching', 'No microplastics', 'Food-grade steel']
			},
			useAndQuality: {
				durability: 9,
				functionality: 9,
				userSatisfaction: 9
			}
		}
	},
	{
		id: 'organic-cotton-tshirt',
		name: 'Organic Cotton T-Shirt',
		category: 'Clothing',
		description: 'Fair-trade certified organic cotton t-shirt with natural dyes',
		imageUrl: '/images/tshirt.svg',
		price: 30.00,
		usesPerYear: 52, // worn once per week
		costBreakdown: {
			rawMaterials: 20,
			manufacturing: 12,
			labor: 30,
			transportation: 8,
			marketing: 10,
			retail: 15,
			profit: 5
		},
		assessment: {
			negatives: {
				carbon: 6.2,
				water: 2700,
				waste: 0.8,
				landUse: 8.5,
				pollution: 3
			},
			positives: {
				livingWages: true,
				environmentalImprovements: ['No pesticides', 'Natural dyes', 'Compostable at end of life'],
				recyclability: 75,
				repairability: 8
			},
			lifetime: 3,
			healthImpacts: {
				score: 9,
				concerns: [],
				benefits: ['No harmful chemicals', 'Hypoallergenic', 'Breathable']
			},
			useAndQuality: {
				durability: 7,
				functionality: 8,
				userSatisfaction: 8
			}
		}
	},
	{
		id: 'cast-iron-skillet',
		name: 'Cast Iron Skillet',
		category: 'Kitchenware',
		description: 'Pre-seasoned 12-inch cast iron skillet, made in USA',
		imageUrl: '/images/skillet.svg',
		price: 50.00,
		usesPerYear: 156, // 3x per week
		costBreakdown: {
			rawMaterials: 35,
			manufacturing: 25,
			labor: 18,
			transportation: 5,
			marketing: 5,
			retail: 8,
			profit: 4
		},
		assessment: {
			negatives: {
				carbon: 12.4,
				water: 450,
				waste: 0.2,
				landUse: 0.3,
				pollution: 5
			},
			positives: {
				livingWages: true,
				environmentalImprovements: ['Lasts generations', 'No non-stick coatings', 'Recyclable'],
				recyclability: 100,
				repairability: 9
			},
			lifetime: 100,
			healthImpacts: {
				score: 8,
				concerns: ['Requires proper seasoning maintenance'],
				benefits: ['Adds dietary iron', 'No PFAS', 'No plastic components']
			},
			useAndQuality: {
				durability: 10,
				functionality: 9,
				userSatisfaction: 9
			}
		}
	},
	{
		id: 'led-desk-lamp',
		name: 'Modular LED Desk Lamp',
		category: 'Electronics',
		description: 'Repairable LED lamp with replaceable components and 50,000 hour lifespan',
		imageUrl: '/images/desk-lamp.svg',
		price: 120.00,
		usesPerYear: 365, // daily use
		costBreakdown: {
			rawMaterials: 25,
			manufacturing: 18,
			labor: 12,
			transportation: 6,
			marketing: 15,
			retail: 14,
			profit: 10
		},
		assessment: {
			negatives: {
				carbon: 15.2,
				water: 890,
				waste: 0.6,
				landUse: 0.4,
				pollution: 6
			},
			positives: {
				livingWages: true,
				environmentalImprovements: ['Energy efficient', 'Replaceable parts', 'Recyclable aluminum'],
				recyclability: 70,
				repairability: 9
			},
			lifetime: 15,
			healthImpacts: {
				score: 8,
				concerns: ['Blue light exposure'],
				benefits: ['No mercury', 'Flicker-free', 'Adjustable color temperature']
			},
			useAndQuality: {
				durability: 8,
				functionality: 9,
				userSatisfaction: 9
			}
		}
	}
];

export const categories = [...new Set(products.map(p => p.category))];
