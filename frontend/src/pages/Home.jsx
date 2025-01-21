import { useContext, useEffect} from "react";
import { ProductContext } from "../context/ProductContext";
import ProductItem from "../components/ProductItem";


const Home = () => {
    // const [carts, setCarts] = useState([]);
    const {carts, setCarts, search, showSearch} = useContext(ProductContext);
    // const [filterProducts, setFilterProducts] = useState([]);
    
    const applyFilter = () => {
        let productsCopy = carts.slice();
  
        if(showSearch && search){
          productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

        }
        setCarts(productsCopy)  
      }

    useEffect(()=>{
        setCarts(carts)
    },[carts])

    // Data fetch for search
    useEffect(()=>{
        applyFilter();
      },[search, showSearch])

    
    useEffect(() => {
      fetch('http://localhost:8081/product')
        .then((response) => response.json())
        .then((data) => setCarts(data))
        .catch((error) => console.error('Error fetching products:', error));
    }, [setCarts]);

    return (
        <div>
            {/* Map Products  */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                {
                    carts.map((item)=>(
                        <ProductItem 
                        key={item._id}
                            item={item}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;