import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const CartTotal = () => {
    const { currency, getCartAmount, delivery } = useContext(ProductContext);

    // Calculate amounts
    const totalAmount = getCartAmount();
    const totalWithDelivery = totalAmount + delivery;

    return (
        <div className="w-full">
            <div className="text-2xl">
                <h1>Total</h1>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency}{totalAmount}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Delivery Fee</p>
                    <p>{currency}{delivery}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <b>Total</b>
                    <b>{currency}{totalWithDelivery}.00</b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
