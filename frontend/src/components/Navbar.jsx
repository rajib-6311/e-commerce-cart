import { Link, NavLink } from 'react-router-dom';
import {assets} from '../assets/assets'
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Navbar = () => {

    const {setShowSearch, getCartCount} = useContext(ProductContext);
    return (
        <div className="flex items-center justify-between py-5 font-medium">
            <img src={assets.logo} className='w-36' alt="" />

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/home' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>

                <NavLink to='/login' className='flex flex-col items-center gap-1'>
                    <p>LOGIN</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>
            </ul>
            {/* for search icon */}
            <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            </div>
            {/* for cart icon  */}
            <Link to='/cart' className='relative'>
                <img className='w-5 min-w-5' src={assets.cart_icon} alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
        </div>
    );
};

export default Navbar;