import { getKaapiProducts } from "@/lib/shopify-services";
import CollectionsClient from "./CollectionsClient";

export default async function CollectionsPage() {
  const products = await getKaapiProducts();
  return <CollectionsClient products={products} />;
}
