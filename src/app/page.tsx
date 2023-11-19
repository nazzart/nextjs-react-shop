import { Product } from "@/models/product.interface";
import ProductList from "./components/productList/ProductList";
import { getProducts } from "./api/products";

export default async function Home() {
  // Get list of products
  const products: Product[] = await getProducts();

  return (
      <ProductList products={products} />
  );
}
