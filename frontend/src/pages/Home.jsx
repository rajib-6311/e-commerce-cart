import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductItem from "../components/ProductItem";


const Home = () => {
    const {products, search, showSearch} = useContext(ProductContext);
    const [filterProducts, setFilterProducts] = useState([]);
    
    const applyFilter = () => {
        let productsCopy = products.slice();
  
        if(showSearch && search){
          productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

        }
        setFilterProducts(productsCopy)
      }

    useEffect(()=>{
        setFilterProducts(products)
    },[products])

    // Data fetch for search
    useEffect(()=>{
        applyFilter();
      },[search, showSearch])

    return (
        <div>
            {/* Map Products  */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                {
                    filterProducts.map((item)=>(
                        <ProductItem 
                        key={item.id}
                            item={item}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;