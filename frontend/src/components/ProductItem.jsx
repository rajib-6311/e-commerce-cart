import { useContext } from "react";
import PropTypes from 'prop-types';
import { ProductContext } from "../context/ProductContext";

const ProductItem = ({item}) => {
    const { image,name, price} = item;

    const {currency, addToCart} = useContext(ProductContext);
    const defaultImage = "https://via.placeholder.com/150";

    return (
        <div className="text-gray-700 cursor-pointer">
            <div className="overflow-hidden">
                <img
                    className="hover:scale-110 transition ease-in-out"
                    src={image && image[0] ? image[0] : defaultImage}
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