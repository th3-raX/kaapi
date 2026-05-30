export type Category = {
  id: string;
  slug: "filter-coffee" | "espresso-blends" | "merchandise" | "gift-sets";
  name: string;
  subtitle: string;
  description: string;
  image: string;
  productCount: number;
};

export const categories: Category[] = [
  {
    id: "cat-1",
    slug: "filter-coffee",
    name: "Filter Coffee",
    subtitle: "Single-estate beans for your morning ritual.",
    description:
      "Single-estate beans for your morning ritual. Ground to perfection for the traditional South Indian decoction.",
    image: "/images/categories/filter-coffee.png",
    productCount: 10,
  },
  {
    id: "cat-2",
    slug: "espresso-blends",
    name: "Espresso Blends",
    subtitle: "Dark, syrupy, built for milk.",
    description:
      "Dark, syrupy, built for milk. Crafted blends optimized for espresso extraction and milk-based drinks.",
    image: "/images/categories/espresso-blends.png",
    productCount: 2,
  },
  {
    id: "cat-3",
    slug: "merchandise",
    name: "Merchandise",
    subtitle: "Brass, ceramic, and cloth.",
    description:
      "Brass, ceramic, and cloth. Handcrafted brewing equipment and apparel for the devoted coffee ritualist.",
    image: "/images/categories/merchandise.png",
    productCount: 0,
  },
  {
    id: "cat-4",
    slug: "gift-sets",
    name: "Gift Sets",
    subtitle: "For the coffee-obsessed.",
    description:
      "For the coffee-obsessed. Curated collections of our finest lots, paired with artisan brewing ware.",
    image: "/images/categories/gift-sets.png",
    productCount: 0,
  },
];
