import { shopifyFetch } from "./shopify";
import { getProductsQuery, getProductQuery } from "./queries/products";
import { products as staticProducts, Product } from "../data/products";

// Types mapping Admin API
export type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  descriptionHtml: string;
  status: string; // "ACTIVE", "DRAFT", "ARCHIVED"
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        inventoryQuantity?: number;
        price: string;
      };
    }>;
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string;
      };
    }>;
  };
};

export async function getShopifyProducts(): Promise<ShopifyProduct[]> {
  try {
    const { body } = await shopifyFetch<{
      data: { products: { edges: { node: ShopifyProduct }[] } };
    }>({
      query: getProductsQuery,
      variables: { first: 10 },
    });

    return body.data.products.edges.map((edge) => edge.node);
  } catch (e) {
    console.error("Failed to fetch products from Shopify", e);
    return [];
  }
}

export async function getShopifyProduct(
  handle: string,
): Promise<ShopifyProduct | null> {
  try {
    // Admin API query expects "handle:<slug>" format for product queries
    const queryStr = `handle:${handle}`;
    const { body } = await shopifyFetch<{
      data: { products: { edges: { node: ShopifyProduct }[] } };
    }>({
      query: getProductQuery,
      variables: { handle: queryStr },
    });

    return body.data.products.edges[0]?.node || null;
  } catch (e) {
    console.error(`Failed to fetch product ${handle} from Shopify`, e);
    return null;
  }
}

export async function getKaapiProducts(): Promise<Product[]> {
  const shopifyProducts = await getShopifyProducts();

  return staticProducts.map((staticProduct) => {
    const shopifyProduct = shopifyProducts.find(
      (p) => p.handle === staticProduct.slug,
    );

    if (shopifyProduct) {
      // Map Shopify prices to sizes if variants exist
      const updatedPrice = { ...staticProduct.price };
      shopifyProduct.variants.edges.forEach(({ node }) => {
        if (node?.title?.includes("100G"))
          updatedPrice["100g"] = parseFloat(node.price) * 100;
        if (node?.title?.includes("250G"))
          updatedPrice["250g"] = parseFloat(node.price) * 100;
        if (node?.title?.includes("500G"))
          updatedPrice["500g"] = parseFloat(node.price) * 100;
      });

      // Safely map shopify images
      const images =
        shopifyProduct.images.edges.length > 0
          ? shopifyProduct.images.edges.map((e) => e.node.url)
          : staticProduct.images;

      return {
        ...staticProduct,
        name: shopifyProduct.title,
        price: updatedPrice,
        images,
        shopifyId: shopifyProduct.id,
        availableForSale: shopifyProduct.status === "ACTIVE",
        shopifyVariants: shopifyProduct.variants?.edges.map((e) => e.node) || [],
      };
    }

    return staticProduct;
  });
}

export async function getKaapiProduct(
  slug: string,
): Promise<Product | undefined> {
  const staticProduct = staticProducts.find((p) => p.slug === slug);
  if (!staticProduct) return undefined;

  const shopifyProduct = await getShopifyProduct(slug);

  if (shopifyProduct) {
    const updatedPrice = { ...staticProduct.price };
    shopifyProduct.variants.edges.forEach(({ node }) => {
      if (node.title.includes("100G"))
        updatedPrice["100g"] = parseFloat(node.price) * 100;
      if (node.title.includes("250G"))
        updatedPrice["250g"] = parseFloat(node.price) * 100;
      if (node.title.includes("500G"))
        updatedPrice["500g"] = parseFloat(node.price) * 100;
    });

    const images =
      shopifyProduct.images.edges.length > 0
        ? shopifyProduct.images.edges.map((e) => e.node.url)
        : staticProduct.images;

    return {
      ...staticProduct,
      name: shopifyProduct.title,
      price: updatedPrice,
      images,
      shopifyId: shopifyProduct.id,
      availableForSale: shopifyProduct.status === "ACTIVE",
      shopifyVariants: shopifyProduct.variants?.edges.map((e) => e.node) || [],
    };
  }

  return staticProduct;
}

// Note: Cart mutations do NOT work with the Admin API token.
// You must switch back to the Storefront API token to implement Checkout.
