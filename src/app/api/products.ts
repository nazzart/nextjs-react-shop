import { Products } from "@/models/product.interface";

/*
  Re-usable API method to fetch the product data
*/
export async function getProducts() {
  const res = await fetch(
    "https://dummyjson.com/products"
  );
  
  // Throw an error, will trigger error.tsx page to be shown
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // Push the data
  const data: Products = await res.json();
  return data;
}
