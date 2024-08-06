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
      const newProducts = state.products.filter(
        (prod) => prod.id !== product.id,
      );
      if (product.quantity === 1) {
        return { products: newProducts };
      }
      const productToEdit = state.products.find(
        (prod) => prod.id === product.id,
      );

      if (productToEdit) {
        const newProduct = {
          ...productToEdit,
          quantity: productToEdit.quantity - 1,
        };
        return { products: [...newProducts, newProduct] };
      }
    }),
}));
