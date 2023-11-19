import useRemoveItem from "@/app/hooks/useRemoveItem";
import { Product } from "@/models/product.interface";
import { FC } from "react";
import {
  ItemTitle,
  ItemQuantity,
  Item,
  ItemContent,
  Description,
  RemoveButton,
  ItemPrice,
} from "./CartItem.styles";
import Image from "next/image";
import formatPrice from "@/app/lib/formatPrice";

const CartItem: FC<{ item: Product }> = (props) => {
  // Remove item hook
  const { removeItem } = useRemoveItem();

  return (
    <Item>
      <Image
        src={"https://placehold.co/600x600?text=Image+Placeholder"}
        alt={props.item.name}
        width={100}
        height={100}
      />

      <ItemContent>
        <Description>
          <ItemTitle>{props.item.name}</ItemTitle>
          <ItemQuantity>Quantity: {props.item.quantity}</ItemQuantity>
          <ItemPrice>{formatPrice(props.item.price)}</ItemPrice>
        </Description>
        <RemoveButton onClick={() => removeItem(props.item)}>
          Remove
        </RemoveButton>
      </ItemContent>
    </Item>
  );
};

export default CartItem;
