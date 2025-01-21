import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
    const { carts, cartItems, currency,updateQuantity } = useContext(ProductContext);
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
                    className="py-4 border-t border-b text-gray-700 grid grid-col-[4fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                        <div className="flex items-start gap-8">
                           <img className="w-16 " src={cartData.image} alt="" />
                             <div>
                                <p className="text-xs sm:text-lg font-medium">{cartData.name}</p>
                                <div className="flex items-center gap-5 mt-2">
                                   <p>{currency}{cartData.price}</p>
                                   
                                </div>
                             </div>
                 </div>
                 <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, Number(e.target.value))} className="border flex items-center max-w-10 sm:max-w-20 px-1 py-1" type="number" min={1} defaultValue={item.quantity} />
                 <img onClick={()=>updateQuantity(item._id, 0)} className="cursor-pointer w-4 items-end" src={assets.bin_icon} alt="" />
             </div>
                )
                
            })
        }
        <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
           <CartTotal/>
        </div>

        </div>
       </div>
    );
};

export default Cart;
