"use client"
import { FC } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/models/product.interface";
import styled from "styled-components";


const ProductList = styled.section`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 24px;
`;


const Products: FC<{products: Product[]}> = async (props) => {
    
    return (
        <ProductList>
            {props.products.map((product: Product, id: number) => (
                <ProductCard key={id} product={product} />
            ))}
        </ProductList>
    )
}

export default Products;