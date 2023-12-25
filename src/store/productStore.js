import { create } from "zustand";
export const useProductStore = create((set) => ({
  products: 0,
  totalPrice: 0,
  addProductQuantity: (quantity) =>
    set((state) => ({
      products: state.products + quantity,
    })),
  updateTotalPrice: () => {
    set((state) => ({
      totalPrice: state.products * 125,
    }));
  },
  decreaseProductQuantity: () =>
    set((state) => ({ products: state.products - 1 })),
  removeProducts: () => set({ products: 0 }),
}));
