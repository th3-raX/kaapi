import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  productId: string;
  variantId: string;
  slug: string;
  name: string;
  size: "100g" | "250g" | "500g";
  grind: "Whole Bean" | "Filter Grind" | "Espresso Grind";
  price: number;
  quantity: number;
  image: string;
};

type CartState = {
  items: CartItem[];
};

type CartActions = {
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, size: string, grind: string) => void;
  updateQuantity: (
    productId: string,
    size: string,
    grind: string,
    qty: number,
  ) => void;
  clearCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
};

export type CartStore = CartState & CartActions;

function matchItem(
  item: CartItem,
  productId: string,
  size: string,
  grind: string,
): boolean {
  return (
    item.productId === productId && item.size === size && item.grind === grind
  );
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem: CartItem) => {
        set((state) => {
          const existingIndex = state.items.findIndex((item) =>
            matchItem(item, newItem.productId, newItem.size, newItem.grind),
          );

          if (existingIndex > -1) {
            const updated = [...state.items];
            updated[existingIndex] = {
              ...updated[existingIndex],
              quantity: updated[existingIndex].quantity + newItem.quantity,
            };
            return { items: updated };
          }

          return { items: [...state.items, newItem] };
        });
      },

      removeItem: (productId: string, size: string, grind: string) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !matchItem(item, productId, size, grind),
          ),
        }));
      },

      updateQuantity: (
        productId: string,
        size: string,
        grind: string,
        qty: number,
      ) => {
        set((state) => {
          if (qty <= 0) {
            return {
              items: state.items.filter(
                (item) => !matchItem(item, productId, size, grind),
              ),
            };
          }

          return {
            items: state.items.map((item) =>
              matchItem(item, productId, size, grind)
                ? { ...item, quantity: qty }
                : item,
            ),
          };
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      totalItems: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      subtotal: () => {
        return get().items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        );
      },
    }),
    {
      name: "kaapi-cart",
    },
  ),
);
