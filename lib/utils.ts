import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes with clsx for conditional class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats price from paise to INR display string.
 * @param paise - Price in paise (e.g. 59900 = ₹599)
 */
export function formatPrice(paise: number): string {
  const rupees = paise / 100;
  return `₹${rupees.toLocaleString("en-IN")}`;
}
