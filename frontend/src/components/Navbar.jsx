import { NavLink } from 'react-router-dom';
import {assets} from '../assets/assets'
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Navbar = () => {

    const {setShowSearch} = useContext(ProductContext);
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
        </div>
    );
};

export default Navbar;