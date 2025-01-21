import { useContext } from "react";
import PropTypes from 'prop-types';
import { ProductContext } from "../context/ProductContext";


const ProductItem = ({item}) => {
    const { image,name, price} = item; 

    const {currency, addToCart} = useContext(ProductContext);

    return (
        <div className="text-gray-700 cursor-pointer">
            <div className="overflow-hidden">
                <img
                    className="hover:scale-110 transition ease-in-out h-52 w-80"
                    src={image}
                    alt={name}
                />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">{currency} {price}</p>
            <button onClick={()=>addToCart(item._id)} className="btn btn-active btn-accent text-red-600">AddCart</button>
        </div>
    );
};
ProductItem.propTypes = {
  item: PropTypes.object, 
  addToCart: PropTypes.func,
};
export default ProductItem;