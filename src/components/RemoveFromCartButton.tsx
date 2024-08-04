import { useCartStore } from "../store/cartStore";
import { Product } from "./Product";

export default function RemoveFromCartButton({
  product,
}: {
  product: Product;
}) {
  const removeProduct = useCartStore((state) => state.removeProduct);
  const handleRemoveFromCart = () => {
    removeProduct(product);
  };
  return <button onClick={handleRemoveFromCart}>Remove</button>;
}
