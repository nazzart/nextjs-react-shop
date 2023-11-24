import { act, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom'
import useCart from "@/app/hooks/useCart";
import {cartItems as items} from "./mocks/cartData";
import { CartItemsProvider } from '@/app/context/CartItems';

describe("useCart", () => {

    it("should return the initial values", async () => {
        const { result } = renderHook(() => useCart());
        const { cartItems } = result.current;
    
        expect(cartItems).toStrictEqual([]);
        expect(result.current.setCartItems).toBeInstanceOf(Function)
    });

    it("should set the cartItems with data",  () => {
        const wrapper = ({ children}: any) => <CartItemsProvider>{children}</CartItemsProvider>
        const { result } = renderHook(() => useCart(), { wrapper }); 

        expect(result.current.cartItems).toStrictEqual([]);

        act( () => {
             result.current.setCartItems(items)
        })

        expect(result.current.cartItems).toStrictEqual(items);

    });
});
