import { Product } from "@/models/product.interface";

/*
  Re-usable API method to fetch the product data
*/
export async function getProducts() {
  const res = await fetch(
    "https://gist.githubusercontent.com/gfazioli/ccada69eed493842070a0b8945a0a771/raw/125d3ad87c470da8001a0b18d29703a5abd4d13f/products.json"
  );
  
  // Throw an error, will trigger error.tsx page to be shown
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // Push the data
  const data: Product[] = await res.json();
  return data;
}
