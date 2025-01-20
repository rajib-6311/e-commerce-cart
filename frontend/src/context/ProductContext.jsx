import { createContext,useState } from "react";
import PropTypes from 'prop-types';
import {products} from '../assets/assets'


export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const currency = '$';

    const [search , setSearch] = useState('');
    const [showSearch , setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    // add cart item function 
    const addToCart = async(itemId)=>{
      let cartData = structuredClone(cartItems);

      if(cartData[itemId]){
        if(cartData[itemId]){
          cartData[itemId] += 1;
        }
        else{
          cartData[itemId] = 1;
        }
      }
      else{
        cartData[itemId] = {};
        cartData[itemId] = 1;
      }
      setCartItems(cartData)
    }

  // show the cart data count 
  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
        try {
            if (cartItems[itemId] > 0) {
                totalCount += cartItems[itemId];
            }
        } catch (error) {
            console.error('Error calculating cart count:', error);
        }
    }
    return totalCount;
};

    const updateQuantity = async (itemId, quantity) => {
      // Clone the cartItems to avoid mutating state directly
      let cartData = structuredClone(cartItems);
  
      // Update the quantity for the given itemId
      if (quantity > 0) {
          cartData[itemId] = quantity; 
      } else {
          delete cartData[itemId]; 
      }
      setCartItems(cartData);
  };
  


    const value = {
      products,
      currency,
      search,
      setSearch, 
      showSearch,
      setShowSearch,
      cartItems,
      addToCart,
      getCartCount,
      updateQuantity,
    };

    return (
        <ProductContext.Provider value={value}>
          {props.children}
        </ProductContext.Provider>
      );
    };
    
    ProductContextProvider.propTypes = {
      children: PropTypes.node, 
    };
    
    export default ProductContextProvider;