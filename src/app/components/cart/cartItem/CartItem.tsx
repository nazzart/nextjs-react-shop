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
        src={props.item.thumbnail}
        alt={props.item.title}
        width={100}
        height={100}
        priority={true}
      />

      <ItemContent>
        <Description>
          <ItemTitle>{props.item.title}</ItemTitle>
          <ItemQuantity>Quantity: {props.item.quantity}</ItemQuantity>
          <ItemPrice>{formatPrice(props.item.price)}</ItemPrice>
        </Description>
        <RemoveButton onClick={() => removeItem(props.item)} data-testid="remove-btn">
          Remove
        </RemoveButton>
      </ItemContent>
    </Item>
  );
};

export default CartItem;
