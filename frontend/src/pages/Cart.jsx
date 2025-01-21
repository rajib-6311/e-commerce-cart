import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { assets } from "../assets/assets";

const Cart = () => {
    const { carts, cartItems, currency } = useContext(ProductContext);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        const tempData = [];
        if (cartItems && typeof cartItems === 'object') {
            // Iterate over cartItems keys
            for (const itemId in cartItems) {
                if (Object.prototype.hasOwnProperty.call(cartItems, itemId)) {
                    const itemQuantity = cartItems[itemId];
                    if (itemQuantity > 0) {
                        tempData.push({
                            _id: itemId,
                            quantity: itemQuantity,
                        });
                    }
                }
            }
        }
        // console.log(tempData)
        setCartData(tempData);
    }, [cartItems]);
    
    return (
       <div>
       <h1>Cart</h1>
        {
            cartData?.map((item,index)=>{
                const cartData = carts.find((cart)=> cart._id == item._id);
                return(
             <div key={index} 
                    className="py-4 border-t border-b text-gray-700 grid grid-col-[4fr_0.5fr] items-center gap-4">
                    <div className="flex items-center gap-6">
                    <img className="w-16 " src={cartData.image} alt="" />
                  <div>
                    <p className="text-xl">{cartData.name}</p>
                    <p>{currency}{cartData.price}</p>
                  </div>
                  <input className="border flex items-center max-w-10 sm:max-w-20 px-1 py-1" type="number" min={1} defaultValue={item.quantity} />
                  <img className="cursor-pointer w-4" src={assets.bin_icon} alt="" />
             </div>
         </div>
                )
                
            })
        }
       </div>
    );
};

export default Cart;
