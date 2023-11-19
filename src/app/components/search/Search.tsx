"use client";

import { Product } from "@/models/product.interface";
import { FC, useEffect, useState } from "react";
import { SearchInput } from "./Search.styles";

const Search: FC<{products: Product[], onSearch:(res: Product[]) => void }> = ({products, onSearch}) => {
  // Contains keyword from the user input
  const [keyword, setKeyword] = useState<string>("");

  // Side effect, when-even the keyword is changed, trigger the search functionality
  useEffect(() => {
    // If keyword is not empty
    if (keyword) {
      const query = keyword.toLowerCase();
      // Set a small timeout, in order to not trigger search on ever key stroke
      const delayDebounceFn = setTimeout(() => {
          let res = products.filter(item => item.name.toLowerCase().includes(query));
          
          onSearch(res)
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    } else {
      // If keyword is empty, reset the seach results, by storing the initial products
      onSearch(products)
    }

  }, [keyword, products, onSearch]);

  return (
    <SearchInput
      name={"search"}
      placeholder={"Search..."}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setKeyword(e.target.value)
      }
      value={keyword}
    />
  );
};
export default Search;
