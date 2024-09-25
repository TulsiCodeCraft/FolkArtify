import React from 'react';
import { FaShippingFast, FaHeadset, FaUndo, FaLock } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 pt-10">



            {/* Service Features */}
           

            <div className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <h5 className="text-purple-500 mb-4">ABOUT FOLKARTIFY</h5>
                        <p className="text-sm">Dispatched within 7 to 9 days in India and we ship our products to all the major cities of the world.</p>
                        <p className="text-sm mt-2">Reach Us</p>
                        <p className="text-sm">For information write or call us on +91-9098798225</p>
                    </div>
                    <div>
                        <h5 className="text-purple-500 mb-4">NEWSLETTER</h5>
                        <p className="text-sm mb-2">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <input type="email" placeholder="Enter your email address" className="w-full p-2 mb-2 text-gray-900" />
                        <button className="bg-purple-600 text-white px-4 py-2 w-full">SUBSCRIBE</button>
                        <p className="text-xs mt-2">By signing up to our newsletter, you agree to receive marketing emails from FolkArtify. For more information, please read our Privacy Policy.</p>
                    </div>
                    <div className='ml-20'>
                        <h5 className="text-purple-500 mb-4 ">KNOW MORE</h5>
                        <ul className="text-sm">
                            <li className='mb-1'><a className="text-neutral-300 hover:text-white" href="#">About Us</a></li>
                            <li className='mb-1'><a className="text-neutral-300 hover:text-white" href="#">Blog</a></li>
                            <li className='mb-1'><a className="text-neutral-300 hover:text-white" href="#">Contact Us</a></li>
                            <li className='mb-1'><a className="text-neutral-300 hover:text-white" href="#">Terms & Conditions</a></li>
                            <li className='mb-1'><a className="text-neutral-300 hover:text-white" href="#">Refund Policy</a></li>
                            <li className='mb-1'><a className="text-neutral-300 hover:text-white" href="#">Track order</a></li>
                            <li className='mb-1'><a className="text-neutral-300 hover:text-white" href="#">Terms of Service</a></li>
                            <li className='mb-1'><a className="text-neutral-300 hover:text-white" href="#">Refund policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-purple-500 mb-4">INFORMATION POLICIES</h5>
                        <ul className="text-sm">
                            <li className='mb-1'><a className="text-neutral-300 hover:text-white" href="#">Disclaimer</a></li>
                            <li className='mb-1'><a className="text-neutral-300 hover:text-white" href="#">Privacy Policy</a></li>
                            <li className='mb-1'><a className="text-neutral-300 hover:text-white" href="#">Terms & Conditions</a></li>
                            <li className='mb-1'><a className="text-neutral-300 hover:text-white" href="#">Cancellation Policy</a></li>
                            <li className='mb-1'><a className="text-neutral-300 hover:text-white" href="#">Shipping & Delivery Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto px-4 mt-8 flex justify-between items-center">
                    <p className="text-sm">© FOLKARTIFY All rights reserved.</p>
                    <p className="text-sm">Manage & Marketing By AuroSoftware</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;