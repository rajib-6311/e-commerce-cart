import { createContext } from "react";
import PropTypes from 'prop-types';
import {products} from '../assets/assets'
export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const currency = '$';
    const delivery_free = 10;  
  
    const value = {
      products,
      currency,
      delivery_free,
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