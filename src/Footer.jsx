import React from 'react';
import Advan from '../public/advan.png'; // Pastikan path-nya benar

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white antialiased font-montserrat">
            <div className="max-w-screen-xl mx-auto p-4 py-6 md:py-8">
                <div className="md:flex md:justify-between">
                    {/* Logo dan Deskripsi */}
                    <div className="mb-6 md:mb-0 md:w-1/3">
                        <a href="#" className="flex items-center">
                            <img src={Advan} className="h-12 mr-3" alt="Advan Logo" />
                        </a>
                        <p className="mt-4 text-gray-400 text-sm">
                            Advan is a technology ecosystem offering a range of innovative products and services to empower your digital lifestyle.
                        </p>
                    </div>

                    {/* Menu Links */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 md:w-2/3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Documentation</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Advan Blocks</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Icons</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Pro Version</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Help & Support</h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Contact Us</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Support Center</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Hire Us</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Follow Us</h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Discord</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Github</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Twitter</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">License</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terms & Conditions</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Brand Guideline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-700 sm:mx-auto" />

                {/* Copyright */}
                <div className="text-center text-sm text-gray-400">
                    © 2025 Advan™. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
