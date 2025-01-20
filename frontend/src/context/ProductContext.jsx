import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import {products} from '../assets/assets'
export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const currency = '$';

    const [search , setSearch] = useState('');
    const [showSearch , setShowSearch] = useState(false);
     
    const value = {
      products,
      currency,
      search,
      setSearch, 
      showSearch,
      setShowSearch,
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