export interface Product {
  id: string
  name: string
  slug: string
  price: number
  weight: string
  waterproof: string
  flexibility: number
  rating: number
  category: "paddle" | "bag" | "repair" | "storage" | "pump" | "solar" | "mount" | "seat"
  description: string
  features: string[]
  specs: {
    material: string
    dimensions: string
    weight: string
    capacity?: string
  }
  images: string[]
  amazonLink: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Advanced Elements 4-Part Packlite Paddle",
    slug: "advanced-elements-4-part-packlite-paddle",
    price: 89.99,
    weight: "1200g",
    waterproof: "✅",
    flexibility: 4,
    rating: 4,
    category: "paddle",
    description:
      "Durable, portable, and lightweight 4-part kayak paddle with adjustable design for easy stowing and portability.",
    features: [
      "Fiberglass shafts and glass-filled nylon blades",
      "Four-part breakdown construction",
      "Adjustable length from 88.6 to 92.5 inches",
      "Ergonomic design for reduced fatigue",
      "Suitable for touring and recreational paddling",
    ],
    specs: {
      material: "Fiberglass & Aluminum Alloy",
      dimensions: "230cm extended, 64cm folded",
      weight: "1200g",
    },
    images: ["https://m.media-amazon.com/images/I/51y4FhmTkbL._AC_SX679_.jpg", "/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    amazonLink: "https://www.amazon.com/Advanced-Elements-4-Part-Packlite-Paddle/dp/B001Q3L6Z8",
  },
  {
    id: "2",
    name: "Fmeida 65L Duffle Bag with Shoes Compartment",
    slug: "fmeida-65l-duffle-bag",
    price: 17.09,
    weight: "300g",
    waterproof: "✅",
    flexibility: 5,
    rating: 4.5,
    category: "bag",
    description:
      "Foldable travel duffel bag with large 65L capacity, water repellent material, and separate shoe compartment for organized packing.",
    features: [
      "Large Capacity & Foldable: 65L capacity, unfolds to 24.5 x 11.5 x 14 in, folds to 10.24 x 9.06 in.",
      "High Quality & Lightweight Material: Polyester with high quality zippers, water-resistant, tear-resistant.",
      "Separate Shoe Compartment: Internal end-pouch & shoe compartment to organize shoes and clothes.",
      "Humanized Design: Multiple pockets for small items, comfortable handles, adjustable & removable long shoulder strap, sleeve on the back to slip over luggage handles.",
      "Various Occasions: Suitable for travel, camp, overnight, family weekender, hospital, business travel, airplane carry-on, dance, gym, sports.",
    ],
    specs: {
      material: "Polyester",
      dimensions: "24.5 x 11.5 x 14 in",
      weight: "300g",
      capacity: "65L",
    },
    images: ["https://m.media-amazon.com/images/I/71JV+Go-mML._AC_SX679_.jpg", "/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    amazonLink: "https://www.amazon.com/Fmeida-Compartment-Foldable-Repellent-Resistant/dp/B0BN3Y2Q7W",
  },
  {
    id: "3",
    name: "Marine Fiberglass Repair Kit for Boats",
    slug: "marine-fiberglass-repair-kit",
    price: 17.99,
    weight: "100g",
    waterproof: "✅",
    flexibility: 5,
    rating: 4,
    category: "repair",
    description:
      "Gel coat repair kit for fixing chips, cracks, and holes on boats and watercraft, with color matching tints for natural repairs.",
    features: [
      "Good helper for fiberglass repair, fixing chips, cracks, pits, gouges, scratches, and holes on various watercraft.",
      "Color matching with translucent base colors and five tints (white, blue, yellow, red, black) to achieve a natural repair.",
      "Permanent repair with super-strong adhesion, UV-resistant and waterproof (minimum temperature: -60°C, maximum temperature: 200°C).",
      "Versatile use for repairs above the waterline on materials including steel, aluminum alloy, wood, carbon fiber, plastic, composite materials, and stainless steel.",
      "Easy to use with a step-by-step process involving cleaning, mixing, applying, curing, and sanding.",
    ],
    specs: {
      material: "Epoxy Filler",
      dimensions: "Not specified",
      weight: "100g",
      capacity: "100g - 1.76oz",
    },
    images: ["https://m.media-amazon.com/images/I/81CoYdD4X+L._AC_SX679_.jpg", "/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    amazonLink: "https://www.amazon.com/Fiberglass-Scratches-Suitable-Porcelain-100g-1-76oz/dp/B0F5N1V3RT",
  },
  {
    id: "4",
    name: "HRX Package Outdoor Waterproof EDC Survival Container",
    slug: "hrx-package-waterproof-edc-container",
    price: 12.99,
    weight: "140g",
    waterproof: "✅✅",
    flexibility: 2,
    rating: 4.7,
    category: "storage",
    description:
      "Airtight aluminum pill bottle for camping and emergency use, waterproof and portable for storing small valuables.",
    features: [
      "Made of military-grade aluminum alloy, solid, well-built, and indestructible.",
      "100% waterproof with a rubber O-ring seal that ensures a tight, leak-proof closure.",
      "Small and portable but with sufficient capacity for daily needs and outdoor activities.",
      "Smooth threads for easy opening and closing without accidental opening.",
      "Lightweight and easy to carry in pockets, purses, or hiking packs.",
      "Available in black and orange for easy content identification.",
      "Can be clipped to a carabiner for convenient EDC use.",
    ],
    specs: {
      material: "Aluminum Alloy",
      dimensions: "3.9 in height, 1.18 in diameter",
      weight: "140g",
      capacity: "Holds up to 15 tinder quiks or 36 quarters",
    },
    images: ["https://m.media-amazon.com/images/I/61RcplexB2L._AC_SX679_.jpg", "/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    amazonLink: "https://www.amazon.com/HRX-Package-Waterproof-Container-Essentials/dp/B07DK8LKM6",
  },
  {
    id: "5",
    name: "Filterbuy 20x25x1 Air Filter MERV 8 Odor Eliminator",
    slug: "filterbuy-20x25x1-air-filter",
    price: 19.99,
    weight: "200g",
    waterproof: "No",
    flexibility: 3,
    rating: 4.5,
    category: "filter",
    description:
      "Pleated HVAC air filter with activated carbon for odor elimination, suitable for home air systems.",
    features: [
      "MERV 8 rating for capturing 90% of dust particles",
      "Activated carbon for odor elimination",
      "Pleated design for better airflow",
      "Made in USA",
      "Compatible with furnace, AC, heat pump",
    ],
    specs: {
      material: "Synthetic Media",
      dimensions: "20x25x1 in",
      weight: "200g",
    },
    images: ["https://m.media-amazon.com/images/I/817VKzcS6KL._AC_SX679_.jpg", "/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    amazonLink: "https://www.amazon.com/Filterbuy-20x25x1-Eliminator-Replacement-Activated/dp/B09Y76J2R7",
  },
  {
    id: "6",
    name: "Electric Portable Quick-Fill Air Pump",
    slug: "electric-portable-quick-fill-air-pump",
    price: 11.99,
    weight: "450g",
    waterproof: "No",
    flexibility: 3,
    rating: 4,
    category: "pump",
    description:
      "Portable electric inflator/deflator for inflatables, with quick-fill capability for air mattresses and pool floats.",
    features: [
      "Quick-fill with 400L/Min airflow",
      "3 nozzles for various inflatables",
      "Inflator and deflator functions",
      "110-120V AC powered",
      "Lightweight and portable design",
    ],
    specs: {
      material: "Plastic",
      dimensions: "5.5 x 4.5 x 4 in",
      weight: "450g",
    },
    images: ["https://m.media-amazon.com/images/I/61n9CNx2uOL._AC_SX679_.jpg", "/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    amazonLink: "https://www.amazon.com/Electric-Portable-Quick-Fill-Inflator-Inflatable/dp/B074NZY3SQ",
  },
  {
    id: "7",
    name: "Solar Power Charger with Flashlight",
    slug: "solar-power-charger-flashlight",
    price: 25.99,
    weight: "250g",
    waterproof: "✅",
    flexibility: 4,
    rating: 4.5,
    category: "solar",
    description:
      "Portable solar charger with built-in flashlight, splashproof design for outdoor activities.",
    features: [
      "10,000mAh capacity",
      "Solar panel charging",
      "Dual super bright flashlights",
      "IPX5 waterproof, dustproof, shockproof",
      "Compass carabiner included",
    ],
    specs: {
      material: "ABS Plastic",
      dimensions: "14cm x 7cm x 2cm",
      weight: "250g",
      capacity: "10,000mAh",
    },
    images: ["https://m.media-amazon.com/images/I/81MiYNnpJkL._AC_SX679_.jpg", "/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    amazonLink: "https://www.amazon.com/Solar-Power-Charger-Flashlight-Splashproof/dp/B07FDXDB3W",
  },
  {
    id: "8",
    name: "AKASO EK7000 Sports Waterproof Camcorder",
    slug: "akaso-ek7000-sports-waterproof-camcorder",
    price: 49.99,
    weight: "60g",
    waterproof: "✅",
    flexibility: 5,
    rating: 4.3,
    category: "camera",
    description:
      "4K action camera with EIS, waterproof up to 131ft, ideal for sports and underwater filming.",
    features: [
      "4K30FPS video and 20MP photos",
      "Electronic Image Stabilization (EIS)",
      "131ft waterproof with case",
      "Wireless remote control",
      "WiFi and HDMI connectivity",
    ],
    specs: {
      material: "Plastic",
      dimensions: "Compact handheld",
      weight: "60g",
    },
    images: ["https://m.media-amazon.com/images/I/71LwiZU3oZL._AC_SX679_PIbundle-31,TopRight,0,0_SH20_.jpg", "/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    amazonLink: "https://www.amazon.com/AKASO-EK7000-Sports-Waterproof-Camcorder/dp/B01HGM33HG",
  },
  {
    id: "9",
    name: "Intex 2-Person Inflatable Kayak Set",
    slug: "intex-2-person-inflatable-kayak",
    price: 149.99,
    weight: "10kg",
    waterproof: "✅",
    flexibility: 4,
    rating: 4.5,
    category: "boat",
    description:
      "Inflatable kayak for two with adjustable seats, aluminum oars, and pump, suitable for lakes and mild rivers.",
    features: [
      "2-person capacity with 400lb weight limit",
      "Adjustable inflatable seats with backrests",
      "Includes aluminum oars and high-output pump",
      "Removable skeg for directional stability",
      "Rugged vinyl construction for durability",
    ],
    specs: {
      material: "SuperStrong PVC",
      dimensions: "10.3ft x 3ft x 1.8ft",
      weight: "10kg",
      capacity: "400lb",
    },
    images: ["https://m.media-amazon.com/images/I/616sne4kLCL._AC_SX679_.jpg", "/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    amazonLink: "https://www.amazon.com/Intex-2-Person-Inflatable-Aluminum-Adjustable/dp/B00A7EXF4C",
  },
]
