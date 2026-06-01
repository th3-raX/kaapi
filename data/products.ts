export type Product = {
  id: string;
  slug: string;
  name: string;
  estate: string;
  category: "filter-coffee" | "espresso" | "limited-edition";
  flavourNotes: string[];
  description: string;
  abstract: string;
  price: {
    "100g": number;
    "250g": number;
    "500g": number;
  };
  images: string[];
  stats: {
    altitude: string;
    variety: string;
    process: string;
    roastLevel: string;
    harvestSeason: string;
    caffeineMg: string;
    dryingMethod: string;
    preferredExtraction: string;
    productionRoaster: string;
  };
  accordion: {
    aboutEstate: string;
    tastingNotes: string;
    brewGuide: string;
    sourcingStory: string;
  };
  shopifyId?: string;
  shopifyVariants?: any[];
  availableForSale?: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "coorg-estate",
    name: "Coorg Estate",
    estate: "COORG · KARNATAKA",
    category: "filter-coffee",
    flavourNotes: ["Jasmine", "Dark Chocolate", "Citrus"],
    description:
      "A single-estate micro-lot from the mist-covered hills of Coorg. Hand-picked at peak ripeness and washed to reveal a clean, bright cup with layered sweetness.",
    abstract: "A pristine single-estate micro-lot from fourth-generation growers in the Western Ghats. Washed with spring water and slow-roasted to honour the bean's terroir — jasmine florals, dark chocolate richness, and a bright citrus finish.",
    price: { "100g": 45000, "250g": 95000, "500g": 170000 },
    images: [
      "/images/products/coorg-estate-1.png",
      "/images/products/coorg-estate-2.png",
      "/images/products/coorg-estate-3.png",
      "/images/products/coorg-estate-4.png",
    ],
    stats: {
      altitude: "1,200m",
      variety: "S795",
      process: "Washed",
      roastLevel: "Medium",
      harvestSeason: "Nov–Jan",
      caffeineMg: "~85mg per cup",
      dryingMethod: "Raised-Bed Sun Dried",
      preferredExtraction: "South Indian Filter",
      productionRoaster: "Probat UG-22",
    },
    accordion: {
      aboutEstate:
        "Nestled in the Western Ghats at 1,200 metres, this estate has been growing coffee under a canopy of silver oak and pepper vines for four generations. The volcanic soil and monsoon mists create ideal conditions for the S795 varietal.",
      tastingNotes:
        "Opens with delicate jasmine florals and transitions into rich dark chocolate mid-palate. The finish is bright and citrusy, with a lingering sweetness reminiscent of raw honey. Best enjoyed black to appreciate the full spectrum.",
      brewGuide:
        "South Indian Filter: Use 20g coffee to 150ml boiling water. Allow to drip for 10–12 minutes. Mix decoction 1:1 with hot milk and sweeten to taste. Pour between dabara and tumbler to froth.\n\nPour Over: 15g medium-fine grind, 250ml water at 92°C. Bloom 30s, pour in concentric circles. Total brew time: 3:00–3:30.",
      sourcingStory:
        "We source directly from the Kodagu Planters' Association, paying 40% above market rate. Each lot is cupped and scored before roasting in small 5kg batches at our Bangalore roastery.",
    },
  },
  {
    id: "2",
    slug: "mysore-nuggets",
    name: "Mysore Nuggets",
    estate: "COORG · KARNATAKA",
    category: "filter-coffee",
    flavourNotes: ["Dark Chocolate", "Jaggery", "Roasted Nut"],
    description:
      "The legendary Mysore Nuggets Extra Bold — prized for their size and depth. A full-bodied cup with earthy warmth and lingering sweetness.",
    abstract: "The legendary Mysore Nuggets Extra Bold — AAA graded beans prized for their commanding size and depth. Dark-roasted to unlock molten jaggery sweetness and roasted nut warmth, perfect for a bold milk-based filter coffee.",
    price: { "100g": 35000, "250g": 65000, "500g": 120000 },
    images: [
      "/images/products/mysore-nuggets-1.png",
      "/images/products/mysore-nuggets-2.png",
      "/images/products/mysore-nuggets-3.png",
      "/images/products/mysore-nuggets-4.png",
    ],
    stats: {
      altitude: "1,050m",
      variety: "S795 / Selection 9",
      process: "Washed",
      roastLevel: "Dark",
      harvestSeason: "Dec–Feb",
      caffeineMg: "~95mg per cup",
      dryingMethod: "Patio Sun Dried",
      preferredExtraction: "South Indian Filter",
      productionRoaster: "Probat UG-22",
    },
    accordion: {
      aboutEstate:
        "Grown in the Bababudangiris range, these beans are graded AAA for their bold size. The estate practices shade-growing under native jackfruit and rosewood trees.",
      tastingNotes:
        "Rich and full-bodied with dark chocolate upfront. Mid-palate brings molten jaggery sweetness with roasted almond undertones. The finish is long and warm, perfect for milk-based preparations.",
      brewGuide:
        "South Indian Filter: Use 22g coffee to 150ml boiling water for a strong decoction. Pairs beautifully with hot buffalo milk.\n\nFrench Press: 18g coarse grind, 300ml water at 96°C. Steep 4 minutes. Press slowly.",
      sourcingStory:
        "These Extra Bold beans are hand-sorted at the estate level. We've worked with the same farming family for three harvests, ensuring consistent quality and fair compensation.",
    },
  },
  {
    id: "3",
    slug: "monsooned-malabar",
    name: "Monsooned Malabar",
    estate: "CHIKMAGALUR",
    category: "filter-coffee",
    flavourNotes: ["Earthy", "Spice", "Malt"],
    description:
      "Exposed to monsoon winds in open warehouses, these beans swell and mellow into a uniquely low-acid, full-bodied cup — an Indian original.",
    abstract: "A uniquely Indian innovation — beans exposed to monsoon winds in seaside warehouses along the Malabar coast, swelling and mellowing into a low-acid, full-bodied cup with earthy depth and peppery spice.",
    price: { "100g": 38000, "250g": 72000, "500g": 130000 },
    images: [
      "/images/products/monsooned-malabar-1.png",
      "/images/products/monsooned-malabar-2.png",
      "/images/products/monsooned-malabar-3.png",
      "/images/products/monsooned-malabar-4.png",
    ],
    stats: {
      altitude: "1,100m",
      variety: "Robusta / Arabica Blend",
      process: "Natural (Monsooned)",
      roastLevel: "Medium",
      harvestSeason: "Jun–Sep",
      caffeineMg: "~110mg per cup",
      dryingMethod: "Open-Floor Monsooned",
      preferredExtraction: "Espresso",
      productionRoaster: "Diedrich IR-12",
    },
    accordion: {
      aboutEstate:
        "The monsooning process dates back to the British Raj, when beans shipped in wooden hulls absorbed moisture during the long sea voyage. Today, we replicate this in seaside warehouses along the Malabar coast.",
      tastingNotes:
        "Earthy and peppery with malt-like sweetness. Almost zero acidity makes this an excellent base for traditional filter coffee with chicory. Spice notes of cardamom emerge as it cools.",
      brewGuide:
        "South Indian Filter: 20g to 150ml. This bean shines in a 70-30 coffee-chicory blend.\n\nEspresso: 18g dose, 36g yield in 28–30 seconds. Produces a thick, syrupy shot with crema.",
      sourcingStory:
        "Sourced from the Mangalore monsooning yards, where beans are spread on open floors and raked regularly during the June–September monsoon season. A purely Indian innovation.",
    },
  },
  {
    id: "4",
    slug: "chikmagalur-peaberry",
    name: "Chikmagalur Peaberry",
    estate: "NILGIRIS · TAMIL NADU",
    category: "filter-coffee",
    flavourNotes: ["Jasmine", "Citrus", "Bright"],
    description:
      "Rare peaberry beans from Chikmagalur's highest slopes. A single round seed per cherry concentrates flavour into a vibrant, aromatic cup.",
    abstract: "Rare peaberry beans — a single round seed per cherry — from the highest slopes of Chikmagalur. Light-roasted to preserve vibrant jasmine florals and bright citrus acidity in a tea-like, elegant cup.",
    price: { "100g": 42000, "250g": 78000, "500g": 145000 },
    images: [
      "/images/products/chikmagalur-peaberry-1.png",
      "/images/products/chikmagalur-peaberry-2.png",
      "/images/products/chikmagalur-peaberry-3.png",
      "/images/products/chikmagalur-peaberry-4.png",
    ],
    stats: {
      altitude: "1,400m",
      variety: "S795 Peaberry",
      process: "Washed",
      roastLevel: "Light",
      harvestSeason: "Nov–Jan",
      caffeineMg: "~80mg per cup",
      dryingMethod: "Raised-Bed Sun Dried",
      preferredExtraction: "Pour Over",
      productionRoaster: "Loring S15 Falcon",
    },
    accordion: {
      aboutEstate:
        "Peaberries account for only 5–10% of a harvest. Our partner estate in the Nilgiris hand-sorts these rare beans, which roast more evenly due to their round shape.",
      tastingNotes:
        "Bright and floral with jasmine top notes. Citrus acidity gives way to a clean, tea-like body. The finish is crisp with a hint of bergamot.",
      brewGuide:
        "Pour Over (recommended): 14g medium grind, 230ml water at 90°C. Bloom 35s. Total time: 2:45–3:15.\n\nAeroPress: 15g fine-medium, 200ml at 88°C. Steep 1:30, press gently.",
      sourcingStory:
        "Each lot is micro-separated and cupped at the estate. We pay a 50% premium for peaberry-only lots, supporting the meticulous hand-sorting process.",
    },
  },
  {
    id: "5",
    slug: "sun-kissed-washed",
    name: "Sun-Kissed Washed",
    estate: "COORG · KARNATAKA",
    category: "filter-coffee",
    flavourNotes: ["Honey", "Apricot", "Cinnamon"],
    description:
      "Sun-dried on raised beds after a careful wash, this lot balances fruit-forward sweetness with the clarity of a washed process.",
    abstract: "Sun-dried on raised African beds after a careful spring-water wash, this Chandragiri lot from a women-led cooperative balances wild honey sweetness and ripe apricot with the clarity of a clean washed process.",
    price: { "100g": 36000, "250g": 69000, "500g": 125000 },
    images: [
      "/images/products/sun-kissed-1.png",
      "/images/products/sun-kissed-2.png",
      "/images/products/sun-kissed-3.png",
      "/images/products/sun-kissed-4.png",
    ],
    stats: {
      altitude: "1,150m",
      variety: "Chandragiri",
      process: "Washed",
      roastLevel: "Light",
      harvestSeason: "Dec–Feb",
      caffeineMg: "~78mg per cup",
      dryingMethod: "Raised-Bed Sun Dried",
      preferredExtraction: "Pour Over",
      productionRoaster: "Probat UG-22",
    },
    accordion: {
      aboutEstate:
        "This estate in the Somwarpet region uses natural spring water for the washing process. Beans are then sun-dried on raised African beds for 12–15 days.",
      tastingNotes:
        "Opens with wild honey sweetness and ripe apricot. Mid-palate reveals warm cinnamon spice. Finish is clean and lingering with a gentle nuttiness.",
      brewGuide:
        "Pour Over: 15g medium grind, 250ml at 91°C. A slow, steady pour brings out the fruit notes.\n\nSouth Indian Filter: Works well at a lighter decoction ratio — 18g to 150ml.",
      sourcingStory:
        "Direct trade with a women-led cooperative in Somwarpet. 100% of the picking and sorting is done by the cooperative members.",
    },
  },
  {
    id: "6",
    slug: "grand-reserve",
    name: "Grand Reserve",
    estate: "ARAKU VALLEY",
    category: "filter-coffee",
    flavourNotes: ["Caramel", "Red Fruit", "Tobacco"],
    description:
      "Our pinnacle lot from the tribal estates of Araku Valley. Naturally processed and aged for complexity — available in limited batches only.",
    abstract: "Our pinnacle offering — a naturally processed micro-lot from Araku Valley's tribal estates. Dried whole-cherry under the Deccan sun, it delivers caramel richness, red fruit vibrancy, and subtle tobacco complexity.",
    price: { "100g": 55000, "250g": 99000, "500g": 185000 },
    images: [
      "/images/products/grand-reserve-1.png",
      "/images/products/grand-reserve-2.png",
      "/images/products/grand-reserve-3.png",
      "/images/products/grand-reserve-4.png",
    ],
    stats: {
      altitude: "900m",
      variety: "Selection 13",
      process: "Natural",
      roastLevel: "Medium",
      harvestSeason: "Jan–Mar",
      caffeineMg: "~90mg per cup",
      dryingMethod: "Patio Sun Dried",
      preferredExtraction: "French Press",
      productionRoaster: "Diedrich IR-12",
    },
    accordion: {
      aboutEstate:
        "Araku Valley in Andhra Pradesh is home to tribal communities who have grown coffee organically for decades. The beans are dried whole-cherry on patios under the Deccan sun.",
      tastingNotes:
        "Caramel and red fruit dominate the first sip. As the cup cools, subtle tobacco leaf and cocoa nib notes appear. Heavy body with a wine-like finish.",
      brewGuide:
        "French Press: 17g coarse grind, 280ml at 94°C. Steep 4:30 for maximum body.\n\nSouth Indian Filter: 20g to 150ml. Best enjoyed with a touch of palm jaggery instead of sugar.",
      sourcingStory:
        "Sourced through the Araku Tribal Coffee Cooperative. Our partnership funds the community school and provides healthcare access to over 200 farming families.",
    },
  },
  {
    id: "7",
    slug: "nilgiri-frost",
    name: "Nilgiri Frost",
    estate: "NILGIRIS · TAMIL NADU",
    category: "filter-coffee",
    flavourNotes: ["Bergamot", "Stone Fruit", "Vanilla"],
    description:
      "Grown at the highest elevations of the Nilgiris, where frost-touched mornings produce beans of exceptional clarity and aromatic intensity.",
    abstract: "From India's highest coffee altitudes — 1,800m in the Blue Mountains where frost-touched mornings and afternoon sun create extreme diurnal shifts. Honey-processed for vanilla creaminess and sparkling bergamot elegance.",
    price: { "100g": 40000, "250g": 75000, "500g": 138000 },
    images: [
      "/images/products/nilgiri-frost-1.png",
      "/images/products/nilgiri-frost-2.png",
      "/images/products/nilgiri-frost-3.png",
      "/images/products/nilgiri-frost-4.png",
    ],
    stats: {
      altitude: "1,800m",
      variety: "SLN 9",
      process: "Honey",
      roastLevel: "Light",
      harvestSeason: "Oct–Dec",
      caffeineMg: "~75mg per cup",
      dryingMethod: "Covered Raised-Bed",
      preferredExtraction: "Pour Over",
      productionRoaster: "Loring S15 Falcon",
    },
    accordion: {
      aboutEstate:
        "The Nilgiris, or Blue Mountains, offer some of India's highest coffee-growing altitudes. This estate sits at 1,800m where morning frost and afternoon sun create extreme diurnal temperature shifts.",
      tastingNotes:
        "Elegant bergamot and Earl Grey tea aromatics lead into stone fruit sweetness. The honey process adds a vanilla-like creaminess. Silky body with a clean, sparkling finish.",
      brewGuide:
        "Pour Over (Kalita Wave): 14g medium-fine, 220ml at 89°C. Bloom 40s. Total: 3:00.\n\nCold Brew: 40g coarse grind, 500ml cold water. Steep 16–18 hours in fridge.",
      sourcingStory:
        "This lot comes from a single garden within a larger estate. The honey processing is done on-site using a small eco-pulper that conserves 90% of the water used in traditional washing.",
    },
  },
  {
    id: "8",
    slug: "monsoon-trail-espresso",
    name: "Monsoon Trail",
    estate: "CHIKMAGALUR",
    category: "espresso-blends",
    flavourNotes: ["Toffee", "Dark Chocolate", "Pepper"],
    description:
      "Our signature espresso blend. Monsooned robusta meets washed arabica for a bold, syrupy shot that cuts through milk with authority.",
    abstract: "Our signature espresso blend — 40% monsooned robusta for body and 60% washed arabica for clarity. Crafted after 47 iterations by our head roaster, delivering toffee richness and a peppery finish that cuts through milk.",
    price: { "100g": 32000, "250g": 60000, "500g": 110000 },
    images: [
      "/images/products/monsoon-trail-1.png",
      "/images/products/monsoon-trail-2.png",
      "/images/products/monsoon-trail-3.png",
      "/images/products/monsoon-trail-4.png",
    ],
    stats: {
      altitude: "1,000m",
      variety: "Robusta / S795 Blend",
      process: "Washed + Natural",
      roastLevel: "Dark",
      harvestSeason: "Year-round blend",
      caffeineMg: "~120mg per cup",
      dryingMethod: "Mechanical + Sun Dried",
      preferredExtraction: "Espresso",
      productionRoaster: "Probat UG-22",
    },
    accordion: {
      aboutEstate:
        "A carefully calibrated blend of monsooned robusta (40%) from the Malabar coast and washed arabica (60%) from Chikmagalur estates. Blended and roasted for espresso extraction.",
      tastingNotes:
        "Rich toffee and dark chocolate in espresso. Peppery kick in the finish. In milk drinks, it produces a caramel-forward latte with excellent body and persistence.",
      brewGuide:
        "Espresso: 18g dose, 36g out in 26–30 seconds at 93°C. Rests best 10–14 days off roast.\n\nMoka Pot: Fill basket loosely, medium heat, remove when you hear the gurgle.",
      sourcingStory:
        "This is our house blend, crafted by our head roaster after 47 iterations. We adjust component ratios seasonally to maintain a consistent flavour profile year-round.",
    },
  },
  {
    id: "9",
    slug: "temple-town-espresso",
    name: "Temple Town",
    estate: "COORG · KARNATAKA",
    category: "espresso-blends",
    flavourNotes: ["Caramel", "Walnut", "Brown Sugar"],
    description:
      "A softer espresso blend designed for those who take their coffee with milk. Sweet, rounded, and forgiving across a wide extraction range.",
    abstract: "A softer, sweeter espresso blend from two Coorg estates — 100% washed arabica roasted to a medium level that emphasises caramel sweetness over bitterness. Forgiving across a wide extraction range, it makes an exceptional flat white.",
    price: { "100g": 30000, "250g": 56000, "500g": 102000 },
    images: [
      "/images/products/temple-town-1.png",
      "/images/products/temple-town-2.png",
      "/images/products/temple-town-3.png",
      "/images/products/temple-town-4.png",
    ],
    stats: {
      altitude: "1,100m",
      variety: "Chandragiri / S795",
      process: "Washed",
      roastLevel: "Medium",
      harvestSeason: "Year-round blend",
      caffeineMg: "~100mg per cup",
      dryingMethod: "Raised-Bed Sun Dried",
      preferredExtraction: "Espresso",
      productionRoaster: "Diedrich IR-12",
    },
    accordion: {
      aboutEstate:
        "Named after the temple towns of Karnataka, this blend uses 100% washed arabica from two Coorg estates. It's roasted to a medium level that emphasizes sweetness over bitterness.",
      tastingNotes:
        "Caramel and brown sugar sweetness upfront. Walnut nuttiness in the mid-palate. Finish is clean and sweet. Makes an exceptional flat white or cortado.",
      brewGuide:
        "Espresso: 18g dose, 40g out in 28–32 seconds. Slightly longer ratio than Monsoon Trail for extra sweetness.\n\nAeroPress Espresso-style: 17g fine grind, 60ml water at 94°C. Press after 1 minute.",
      sourcingStory:
        "Blended from two neighbouring estates in Kushalnagar. Both are Rainforest Alliance certified and employ sustainable shade-growing practices.",
    },
  },
  {
    id: "10",
    slug: "wayanad-wild",
    name: "Wayanad Wild",
    estate: "WAYANAD · KERALA",
    category: "filter-coffee",
    flavourNotes: ["Cardamom", "Cocoa", "Black Cherry"],
    description:
      "From the wild coffee gardens of Wayanad, where coffee grows alongside spices in one of India's most biodiverse landscapes.",
    abstract: "From Wayanad's wild spice gardens where coffee grows interspersed with cardamom, pepper, and vanilla — this terroir-driven natural process cup delivers aromatic spice, cocoa richness, and black cherry sweetness.",
    price: { "100g": 38000, "250g": 71000, "500g": 132000 },
    images: [
      "/images/products/wayanad-wild-1.png",
      "/images/products/wayanad-wild-2.png",
      "/images/products/wayanad-wild-3.png",
      "/images/products/wayanad-wild-4.png",
    ],
    stats: {
      altitude: "900m",
      variety: "Old Robusta / CxR",
      process: "Natural",
      roastLevel: "Dark",
      harvestSeason: "Jan–Mar",
      caffeineMg: "~115mg per cup",
      dryingMethod: "Patio Sun Dried",
      preferredExtraction: "South Indian Filter",
      productionRoaster: "Probat UG-22",
    },
    accordion: {
      aboutEstate:
        "Wayanad's coffee grows wild in mixed spice gardens alongside cardamom, pepper, and vanilla. This terroir imparts a distinctive spiced character impossible to replicate elsewhere.",
      tastingNotes:
        "Aromatic cardamom and cocoa dominate. Black cherry sweetness emerges in the mid-palate. Full body with a smoky, lingering finish. A traditional South Indian cup at its finest.",
      brewGuide:
        "South Indian Filter (recommended): 22g to 150ml. Add a pinch of freshly ground cardamom to the filter for an authentic experience.\n\nFrench Press: 18g coarse, 300ml at 95°C. Steep 4 minutes.",
      sourcingStory:
        "Sourced from tribal Paniya community growers in Sultan Bathery. Our partnership provides price premiums and funds organic certification for smallholder farms.",
    },
  },
  {
    id: "11",
    slug: "annamalai-honey",
    name: "Annamalai Honey",
    estate: "NILGIRIS · TAMIL NADU",
    category: "filter-coffee",
    flavourNotes: ["Tropical Fruit", "Molasses", "Butter"],
    description:
      "A rare honey-processed lot from the Annamalai hills. The sticky mucilage left on during drying creates a syrupy, fruit-forward cup unlike any other.",
    abstract: "A rare honey-processed micro-lot from the Annamalai hills within the Nilgiri Biosphere Reserve. Biodynamically farmed, with sticky mucilage left on during drying to create a syrupy tropical fruit cup with buttery molasses.",
    price: { "100g": 44000, "250g": 82000, "500g": 155000 },
    images: [
      "/images/products/annamalai-honey-1.png",
      "/images/products/annamalai-honey-2.png",
      "/images/products/annamalai-honey-3.png",
      "/images/products/annamalai-honey-4.png",
    ],
    stats: {
      altitude: "1,350m",
      variety: "SLN 9",
      process: "Honey",
      roastLevel: "Medium",
      harvestSeason: "Nov–Jan",
      caffeineMg: "~82mg per cup",
      dryingMethod: "Covered Raised-Bed",
      preferredExtraction: "Pour Over",
      productionRoaster: "Loring S15 Falcon",
    },
    accordion: {
      aboutEstate:
        "The Annamalai hills are part of the larger Nilgiri Biosphere Reserve. This estate practices biodynamic farming and uses the honey process to reduce water consumption by 80%.",
      tastingNotes:
        "Tropical fruit — think ripe mango and passion fruit — hits first. Molasses sweetness develops in the mid-palate. The finish is buttery and smooth with a long, sweet aftertaste.",
      brewGuide:
        "Pour Over (V60): 15g medium, 250ml at 90°C. Slower pour speed recommended to capture the syrupy body.\n\nCold Brew: Outstanding cold. 45g coarse, 600ml cold water, 18 hours.",
      sourcingStory:
        "This is a micro-lot of just 200kg per season. We reserve the entire lot each year, and our head roaster personally oversees the roast profile for every batch.",
    },
  },
  {
    id: "12",
    slug: "bababudan-blend",
    name: "Bababudan Blend",
    estate: "CHIKMAGALUR",
    category: "filter-coffee",
    flavourNotes: ["Chocolate", "Nutmeg", "Dried Fig"],
    description:
      "Named after Baba Budan, the Sufi saint who smuggled seven coffee beans to India. A heritage blend celebrating where Indian coffee began.",
    abstract: "A heritage tribute to Baba Budan, the Sufi saint who brought coffee to India. Naturally processed beans from three estates within 10km of the original shrine, delivering chocolate warmth, nutmeg spice, and dried fig sweetness.",
    price: { "100g": 34000, "250g": 64000, "500g": 118000 },
    images: [
      "/images/products/bababudan-blend-1.png",
      "/images/products/bababudan-blend-2.png",
      "/images/products/bababudan-blend-3.png",
      "/images/products/bababudan-blend-4.png",
    ],
    stats: {
      altitude: "1,200m",
      variety: "Kent / S795",
      process: "Natural",
      roastLevel: "Medium",
      harvestSeason: "Dec–Feb",
      caffeineMg: "~88mg per cup",
      dryingMethod: "Patio Sun Dried",
      preferredExtraction: "South Indian Filter",
      productionRoaster: "Probat UG-22",
    },
    accordion: {
      aboutEstate:
        "The Bababudangiris range in Chikmagalur is the birthplace of Indian coffee. Our blend uses beans from three estates within a 10km radius of the original Baba Budan shrine.",
      tastingNotes:
        "Milk chocolate and warm nutmeg spice open this cup. Dried fig sweetness develops as it cools. Medium body with a smooth, comforting finish. The quintessential Indian coffee experience.",
      brewGuide:
        "South Indian Filter: 20g to 150ml. This is designed for the traditional method — strong decoction, hot milk, and the theatre of the pour.\n\nDrip Machine: 60g to 1L for a carafe that fills the room with aroma.",
      sourcingStory:
        "A tribute blend that supports the Chikmagalur Coffee Heritage Trust. A portion of proceeds funds the preservation of historic coffee estates in the region.",
    },
  },
];
