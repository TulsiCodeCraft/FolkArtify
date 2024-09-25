import React from 'react';
import logo from '../components/assets/logo.png';
import { FaUser, FaShoppingCart, FaBoxes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navItems = [
        { name: 'Lightings', path: '/lightings' },
        { name: 'Tableware', path: '/tableware' },
        { name: 'Accessories', path: '/accessories' },
        { name: 'Chowki', path: '/chowki' },
        { name: 'Furniture', path: '/furniture' },
        { name: 'Wall Decor', path: '/wall-decor' },
        { name: 'Designery Cloth', path: '/designery-cloth' }
    ];

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                {/* Upper Navbar */}
                <div className="flex items-center justify-between py-3">
                    <div className="w-1/3"></div>
                    <div className="w-1/3 flex justify-center">
                        <img src={logo} alt="" className="h-12" />
                        <span className='text-purple-500 text-3xl font-serif'>FolkArtify</span>
                    </div>
                    <div className="w-1/3 flex justify-end space-x-6">
                        <Link to="/login"  className="text-gray-600 hover:text-gray-900 transition duration-300">
                            <FaUser className="inline-block mr-1" /> Login
                        </Link>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
                            <FaShoppingCart className="inline-block mr-1" /> Cart
                        </a>
                        <Link to="/bulkorder-form" className="text-gray-600 hover:text-gray-900 transition duration-300">
                            <FaBoxes className="inline-block mr-1" /> Bulk Order
                        </Link>
                    </div>
                </div>

                {/* Lower Navbar */}
                <div className="flex justify-center py-3 border-t">
                    <ul className="flex space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className="text-purple-950 hover:text-gray-900 transition duration-300 relative group">
                                    {item.name}
                                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
