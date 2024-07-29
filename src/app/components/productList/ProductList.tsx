"use client";
import { FC, useState } from "react";
import ProductCard from "./productCard/ProductCard";
import { Products, Product } from "@/models/product.interface";
import { List, NotFoundText } from "./ProductList.styles";
import Search from "../search/Search";

const ProductList: FC<{ data: Products }> = (props) => {
  // Contains initial list of products or filtered ones
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(
    props.data.products
  );
  
  // Update state with filtered products
  const onSearch = (result: Product[]) => {
    setFilteredProducts(result);
  };

  return (
    <>
      <Search products={props.data.products} onSearch={(res) => onSearch(res)} />
      <List>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: Product, id: number) => (
            <ProductCard key={id} product={product} />
          ))
        ) : (
          <NotFoundText>Not found...</NotFoundText>
        )}
      </List>
    </>
  );
};

export default ProductList;
