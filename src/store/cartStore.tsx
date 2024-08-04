import { create } from "zustand";
import type { Product } from "../components/Product";

interface CartProduct extends Product {
  quantity: number;
}

type CartStore = {
  products: CartProduct[];
};

type Action = {
  addProduct: (product: Product) => void;
  removeProduct: (product: CartProduct) => void;
};

export const useCartStore = create<CartStore & Action>()((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => {
      const productInCart = state.products.find(
        (prod) => prod.id === product.id,
      );
      let newProducts: CartProduct[] = [];
      if (productInCart) {
        newProducts = state.products.map((prod) =>
          prod.id === product.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod,
        );
        return { products: newProducts };
      }
      const newProduct = { ...product, quantity: 1 };
      return { products: [...state.products, newProduct] };
    }),
  removeProduct: (product) =>
    set((state) => {
      //if curr product quantity is 1, remove item
      if (product.id)
        //else reduce quantity by 1
        const newProducts = state.products.filter(
          (prod) => prod.id !== product.id,
        );
      return { products: newProducts };
    }),
}));
