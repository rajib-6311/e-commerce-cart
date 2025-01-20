import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { assets } from "../assets/assets";

const Cart = () => {
    const { products, currency, cartItems, updateQuantity } = useContext(ProductContext);
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
                        className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
                    >
                        <div className="flex items-start gap-6">
                            <img className="w-16 sm:w-20" src={item.image} alt={item.name} />
                            <div>
                                <h1 className="text-xs font-medium">{item.name}</h1>
                                <div className="flex items-center gap-5 mt-2">
                                    <p>{currency}{item.price}</p>
                                </div>
                            </div>
                        </div>
                        <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null: updateQuantity(item._id, Number(e.target.value))} className="border max-w-10 sm:max-w-20 px-1 py-1" type="number" min={1} defaultValue={item.quantity} />
                        <img
                            onClick={() => updateQuantity(item._id, 0)} // Set quantity to 0 to remove item
                            className="w-4 sm:w-5 cursor-pointer"
                            src={assets.bin_icon}
                            alt="Delete"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Cart;
