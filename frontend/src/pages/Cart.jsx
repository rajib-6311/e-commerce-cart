import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const Cart = () => {
    const { products, currency, cartItems } = useContext(ProductContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const product = products.find((product) => product._id === itemId);
                if (product) {
                    tempData.push({
                        _id: itemId,
                        name: product.name,
                        image: product.image[0],
                        quantity: cartItems[itemId],
                        price: product.price,
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItems, products]);

    return (
        <div className="border-t pt-14">
            <div className="text-2xl mb-3">
                <h1>Cart Page</h1>
            </div>
            <div>
                {cartData.map((item, index) => (
                    <div
                        key={index}
                        className="py-4 border-t border-b text-gray-700 grid grid-cols-1"
                    >
                        <div className="flex items-start gap-6">
                            <img className="w-16" src={item.image} alt={item.name} />
                            <div>
                                <h1>{item.name}</h1>
                                <p>
                                    Quantity: {item.quantity} | Price: {currency}
                                    {item.price}
                                </p>
                                <p>
                                    Subtotal: {currency}
                                    {(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
