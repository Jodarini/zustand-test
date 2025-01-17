import { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";

const URL = "https://dummyjson.com/products";
export type Product = {
  id: number;
  title: string;
  price: number;
};

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
export default function Product() {
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(URL);
      const data = (await res.json()) as ProductResponse;
      setProducts(data.products);
    };
    getProducts();
  }, []);

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          {product.title}
          <AddToCartButton product={product} />
        </div>
      ))}
    </div>
  );
}
