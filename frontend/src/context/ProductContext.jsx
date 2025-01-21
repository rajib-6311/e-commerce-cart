import { createContext,useEffect,useState } from "react";
import PropTypes from 'prop-types';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [carts, setCarts] = useState([]);
    const currency = '$';
    const delivery = 10;

    const [search , setSearch] = useState('');
    const [showSearch , setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
  //  Fetch data from database
    useEffect(() => {
      fetch('http://localhost:8081/product')
        .then((response) => response.json())
        .then((data) => setCarts(data))
        .catch((error) => console.error('Error fetching products:', error));
    }, []);

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
  //update cart items count 
    const updateQuantity = async (itemId, quantity) => {
      let cartData = structuredClone(cartItems);
  
     
      if (quantity > 0) {
          cartData[itemId] = quantity; 
      } else {
          delete cartData[itemId]; 
      }
      setCartItems(cartData);
  };

  // total amount of cart items
  const getCartAmount = () => {
    let totalAmount = 0;

    if (!cartItems || !carts) return totalAmount;

    for (const itemId in cartItems) {
        const itemQuantity = cartItems[itemId]; 
        const itemInfo = carts.find((cart) => cart._id == itemId); 

        if (itemInfo && itemQuantity > 0) {
            totalAmount += itemInfo.price * itemQuantity; 
        }
    }

    return totalAmount;
};

    const value = {
      currency,
      search,
      setSearch, 
      showSearch,
      setShowSearch,
      cartItems,
      addToCart,
      getCartCount,
      updateQuantity,
      carts,
      setCarts,
      getCartAmount,
      delivery,
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