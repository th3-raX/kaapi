import { getKaapiProduct } from "@/lib/shopify-services";
import ProductDetailClient from "./ProductDetailClient";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getKaapiProduct(params.slug);
  
  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
