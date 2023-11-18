"use client";
import { FC } from "react";
import ProductCard from "./productCard/ProductCard";
import { Product } from "@/models/product.interface";
import { List } from "./ProductList.styles";


const ProductList: FC<{ products: Product[] }> = async (props) => {
  return (
    <List>
      {props.products.map((product: Product, id: number) => (
        <ProductCard key={id} product={product} />
      ))}
    </List>
  );
};

export default ProductList;
