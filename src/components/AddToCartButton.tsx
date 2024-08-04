import { useCartStore } from "../store/cartStore";
import { Product } from "./Product";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addProduct } = useCartStore();
  const handleAddToCart = () => {
    addProduct(product);
  };
  return <button onClick={handleAddToCart}>Add</button>;
}
