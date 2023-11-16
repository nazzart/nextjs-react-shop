import { Product } from "@/models/product.interface";
import Products from "./components/products/Products";

async function getProducts() {
  const res = await fetch('https://gist.githubusercontent.com/gfazioli/ccada69eed493842070a0b8945a0a771/raw/125d3ad87c470da8001a0b18d29703a5abd4d13f/products.json')
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: Product[] = await res.json();
  return data;
}

export default async function Home() {

  const products: Product[] = await getProducts();


  return <>
    <Products products={products} />
  </>;
}
