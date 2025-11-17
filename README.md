# LifecycleProducts

A sustainability-focused product assessment platform built with SvelteKit and TailwindCSS. Self-hosted on a solar-powered Raspberry Pi 4B.

## Features

- **Product Assessments**: Comprehensive lifecycle analysis including environmental impact, health concerns, quality metrics, and true cost breakdown
- **Methodology Pages**: Educational content explaining our assessment criteria
- **Store** (Coming Soon): Direct products, affiliates, and used options
- **Dark/Light Mode**: User preference support
- **Responsive Design**: Mobile-first approach

## Tech Stack

- SvelteKit 2.x with Svelte 5
- TailwindCSS 4.x
- TypeScript
- Lucide Svelte (icons)
- Vite

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Updating the Website

### Adding or Updating Products

Products are defined in a single TypeScript file: `src/lib/data/products.ts`

#### Product Data Structure

```typescript
{
  id: string,                    // Unique identifier (e.g., 'bamboo-toothbrush')
  name: string,                  // Display name
  category: string,              // Category for filtering (e.g., 'Personal Care')
  description: string,           // Short product description
  imageUrl: string,              // Path to image (e.g., '/images/product.svg')
  price: number,                 // Price in USD
  usesPerYear: number,           // Estimated annual uses
  costBreakdown: {
    rawMaterials: number,        // Percentage (all should sum to 100)
    manufacturing: number,
    labor: number,
    transportation: number,
    marketing: number,
    retail: number,
    profit: number
  },
  assessment: {
    negatives: {
      carbon: number,            // kg CO2 equivalent
      water: number,             // liters
      waste: number,             // kg
      landUse: number,           // square meters
      pollution: number          // 1-10 scale (10 = worst)
    },
    positives: {
      livingWages: boolean,
      environmentalImprovements: string[],  // Array of improvements
      recyclability: {
        percentage: number,      // Nominal recyclability percentage
        materialType: string,    // 'metal' | 'glass' | 'paper' | 'natural' | 'plastic' | 'mixed' | 'composite'
        downcyclingPenalty: number, // 0-1 penalty (0 = no penalty, 1 = full penalty)
        effectiveRecyclability: number, // percentage * (1 - downcyclingPenalty)
        notes: string            // Explanation of penalty
      },
      repairability: number      // 1-10 scale
    },
    lifetime: number,            // Expected lifetime in years
    healthImpacts: {
      score: number,             // 1-10 scale (10 = best)
      concerns: string[],        // Array of health concerns
      benefits: string[]         // Array of health benefits
    },
    useAndQuality: {
      durability: string,        // e.g., 'Excellent', 'Good'
      functionality: string,     // e.g., 'High', 'Medium'
      userSatisfaction: number   // 1-10 scale
    }
  }
}
```

#### To Add a New Product

1. Open `src/lib/data/products.ts`
2. Add a new object to the `products` array:

```typescript
export const products: Product[] = [
  // ... existing products
  {
    id: 'your-product-id',
    name: 'Your Product Name',
    category: 'Category Name',
    description: 'Brief description of the product',
    imageUrl: '/images/your-product.svg',
    price: 29.99,
    usesPerYear: 365,
    costBreakdown: {
      rawMaterials: 25,
      manufacturing: 20,
      labor: 15,
      transportation: 10,
      marketing: 10,
      retail: 10,
      profit: 10
    },
    assessment: {
      negatives: {
        carbon: 5.0,
        water: 100,
        waste: 0.5,
        landUse: 2,
        pollution: 3
      },
      positives: {
        livingWages: true,
        environmentalImprovements: ['Recycled materials', 'Solar-powered factory'],
        recyclability: {
          percentage: 85,
          materialType: 'metal',  // or 'plastic', 'glass', 'natural', 'mixed', 'composite', 'paper'
          downcyclingPenalty: 0,  // 0 for metals/glass, 0.5-0.7 for plastics
          effectiveRecyclability: 85,  // 85 * (1 - 0) = 85
          notes: 'Explanation of material recyclability characteristics'
        },
        repairability: 8
      },
      lifetime: 10,
      healthImpacts: {
        score: 9,
        concerns: ['Minor concern if applicable'],
        benefits: ['Non-toxic materials', 'No harmful chemicals']
      },
      useAndQuality: {
        durability: 7,  // 1-10 scale
        functionality: 8,  // 1-10 scale
        userSatisfaction: 9
      }
    }
  }
];
```

3. The product will automatically appear in:
   - Product listings at `/assessments`
   - Its own detail page at `/assessments/[id]`
   - Category filters (categories are auto-generated from product data)

#### To Update an Existing Product

1. Open `src/lib/data/products.ts`
2. Find the product by its `id` in the `products` array
3. Modify the desired fields
4. Save the file

---

### Adding or Updating Methodology Pages

Methodology pages explain how products are assessed. They are located in `src/routes/methodology/`.

#### Current Methodology Pages

- `/methodology` - Hub page with links to all sub-pages
- `/methodology/assessment-framework` - **START HERE** Priority matrix (severity × ease), estimation approaches inspired by "How Bad Are Bananas?" by Mike Berners-Lee
- `/methodology/lifecycle-negatives` - Environmental impact metrics (carbon, water, waste, land, pollution)
- `/methodology/health-impacts` - Health and safety scoring
- `/methodology/lifecycle-positives` - Positive product attributes with downcycling penalties
- `/methodology/use-quality` - Durability, functionality, user satisfaction
- `/methodology/lifetime-value` - Economic value calculations (cost per use, cost per year)
- `/methodology/cost-breakdown` - Price transparency analysis

#### Recyclability Downcycling Penalties

Not all recycling is equal. Materials that degrade during recycling or require energy-intensive processing receive penalties:

| Material Type | Typical Penalty | Reason |
|---------------|----------------|--------|
| Metal (Steel, Aluminum) | 0% | Infinitely recyclable without quality loss |
| Glass | 0% | Infinitely recyclable, maintains purity |
| Paper/Cardboard | 10-30% | Fiber shortens each cycle (5-7 loops max) |
| Natural Fibers | 10-20% | Quality degrades; often better composted |
| Plastic (Single-type) | 50-70% | Polymer chains break down; typically recyclable once |
| Plastic (Mixed) | 80-95% | Difficult separation; only 5% material value retained |
| Composites | 30-60% | Separation required; often downcycled |

**Formula:** `effectiveRecyclability = percentage × (1 - downcyclingPenalty)`

Example: A product marketed as "70% recyclable" made of mixed plastics with a 0.85 penalty has an effective recyclability of only 10.5%.

#### To Add a New Methodology Page

1. **Create the page folder and file:**

```bash
mkdir -p src/routes/methodology/your-page-name
```

2. **Create `+page.svelte`** in that folder with this template:

```svelte
<script lang="ts">
  import { ArrowLeft, YourIcon } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Your Page Title - Methodology - LifecycleProducts</title>
  <meta name="description" content="Description of this methodology page" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <!-- Back Link -->
  <a
    href="/methodology"
    class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-8"
  >
    <ArrowLeft class="w-4 h-4 mr-2" />
    Back to Methodology
  </a>

  <!-- Header -->
  <div class="flex items-center space-x-4 mb-8">
    <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
      <YourIcon class="w-6 h-6 text-blue-600 dark:text-blue-400" />
    </div>
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Your Page Title</h1>
  </div>

  <!-- Introduction -->
  <div class="prose dark:prose-invert max-w-none mb-8">
    <p class="text-lg text-gray-600 dark:text-gray-300">
      Introduction paragraph explaining this methodology section.
    </p>
  </div>

  <!-- Metric Cards -->
  <div class="space-y-6">
    <!-- Repeat this block for each metric -->
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div class="flex items-start space-x-4">
        <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
          <MetricIcon class="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Metric Name</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Description of what this metric measures and why it matters.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```

3. **Register the page in the methodology hub:**

Open `src/routes/methodology/+page.svelte` and add to the `methodologyPages` array:

```typescript
const methodologyPages = [
  // ... existing pages
  {
    href: '/methodology/your-page-name',
    title: 'Your Page Title',
    description: 'Brief description shown on the card',
    icon: YourIcon,          // Import from lucide-svelte
    color: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-600 dark:text-blue-400'
  }
];
```

4. Don't forget to import the icon at the top of the file:

```typescript
import { YourIcon } from 'lucide-svelte';
```

#### To Update an Existing Methodology Page

1. Navigate to `src/routes/methodology/[page-name]/+page.svelte`
2. Edit the content as needed:
   - Update introduction text
   - Add, remove, or modify metric cards
   - Adjust icons or styling
3. Save the file

#### Color Scheme Guidelines

Each methodology area uses consistent colors:

- **Lifecycle Negatives**: Red (`bg-red-100`, `text-red-600`)
- **Lifecycle Positives**: Emerald (`bg-emerald-100`, `text-emerald-600`)
- **Health Impacts**: Rose (`bg-rose-100`, `text-rose-600`)
- **Use & Quality**: Amber (`bg-amber-100`, `text-amber-600`)
- **Lifetime Value**: Blue (`bg-blue-100`, `text-blue-600`)
- **Cost Breakdown**: Purple (`bg-purple-100`, `text-purple-600`)

---

## Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable UI components
│   │   ├── Footer.svelte
│   │   ├── Navigation.svelte
│   │   ├── ProductCard.svelte
│   │   ├── ScoreBar.svelte
│   │   └── ThemeToggle.svelte
│   ├── data/
│   │   └── products.ts      # CENTRAL DATA FILE
│   └── index.ts
├── routes/
│   ├── +layout.svelte       # Global layout
│   ├── +page.svelte         # Home page
│   ├── assessments/
│   │   ├── +page.svelte     # Product listing
│   │   └── [id]/            # Dynamic product pages
│   ├── methodology/
│   │   ├── +page.svelte     # Methodology hub
│   │   └── [sub-pages]/     # Individual methodology pages
│   └── store/
│       └── +page.svelte     # Store (coming soon)
└── app.d.ts
```

## Deployment

Self-hosted on Raspberry Pi 4B with solar power. Build the project with `npm run build` and serve the static files.

---

## Contributing

1. Maintain TypeScript types when adding new product fields
2. Follow existing patterns for consistency
3. Test dark mode support for new UI elements
4. Keep the site lightweight and performant
