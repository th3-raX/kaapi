"use server";

import { shopifyFetch } from "@/lib/shopify";

export async function createCheckout(lineItems: { variantId: string; quantity: number }[]) {
  const query = `
    mutation draftOrderCreate($input: DraftOrderInput!) {
      draftOrderCreate(input: $input) {
        draftOrder {
          invoiceUrl
        }
        userErrors {
          message
        }
      }
    }
  `;

  try {
    const { body } = await shopifyFetch<any>({
      query,
      variables: { input: { lineItems } },
      cache: "no-store",
    });

    if (body.errors) {
      console.error("GraphQL Errors:", body.errors);
      return { url: null, error: body.errors[0]?.message };
    }

    const userErrors = body.data?.draftOrderCreate?.userErrors;
    if (userErrors && userErrors.length > 0) {
      console.error("User Errors:", userErrors);
      return { url: null, error: userErrors[0]?.message };
    }

    const invoiceUrl = body.data?.draftOrderCreate?.draftOrder?.invoiceUrl;
    if (!invoiceUrl) {
      console.error("No invoice URL in response", body);
      return { url: null, error: "No invoice URL generated" };
    }

    return { url: invoiceUrl, error: null };
  } catch (error: any) {
    console.error("Error creating checkout:", error);
    // shopifyFetch throws an object with { error: ..., query }
    return { url: null, error: error?.error?.message || error.message || "Unknown error" };
  }
}
