"use client";
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="font-bold text-lg mb-4">InfinityAlgo Academy</h3>
                        <p className="text-gray-500 text-sm">
                            Leading the way in algorithmic trading education and tools. Professional institutional-grade indicators for everyone.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Contact Us</h4>
                        <p className="text-gray-500 text-sm">
                            Email: support@infinityalgoacademy.net<br />
                            Website: infinityalgoacademy.net
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Payment Methods</h4>
                        <div className="flex gap-4 opacity-70 grayscale">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" height="20" className="h-5" alt="PayPal" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" height="20" className="h-5" alt="Stripe" />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} InfinityAlgo Academy. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
