import { useCartStore } from "../store/cartStore";
import RemoveFromCartButton from "./RemoveFromCartButton";

export default function Cart() {
  const { products } = useCartStore();
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.title}</div>
          <div>
            <strong>Quantity: </strong>
            {product.quantity}
          </div>

          <RemoveFromCartButton product={product} />
        </div>
      ))}
    </div>
  );
}
