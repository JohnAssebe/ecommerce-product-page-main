import { create } from "zustand";
export const useProductStore = create((set) => ({
  products: 0,
  addProductQuantity: (quantity) =>
    set((state) => ({ products: state.products + quantity })),
  decreaseProductQuantity: () =>
    set((state) => ({ products: state.products - 1 })),
  removeProducts: () => set({ products: 0 }),
}));
