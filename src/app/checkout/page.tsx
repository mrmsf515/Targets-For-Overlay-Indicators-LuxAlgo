"use client";
import React, { useState } from 'react';
import { useLang } from '@/context/LangContext';
import { CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';

export default function Checkout() {
    const { t } = useLang();
    const [isBumpChecked, setIsBumpChecked] = useState(false);

    const total = isBumpChecked ? 12.50 : 0.00;

    return (
        <div className="container mx-auto px-6 py-20">
            <h1 className="text-4xl font-extrabold text-center mb-16">{t('checkout_title')}</h1>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Order Card */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl">
                    <h2 className="text-xl font-bold border-b border-gray-50 pb-4 mb-6">Your Order Summary</h2>

                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-500 w-5 h-5" />
                            <span className="font-semibold">Targets for Overlay Indicators LuxAlgo</span>
                        </div>
                        <span className="font-bold">$0.00</span>
                    </div>

                    {/* Upsell Order Bump */}
                    <div className={`order-bump p-6 rounded-2xl relative transition-all duration-300 ${isBumpChecked ? 'scale-[1.02] border-solid' : ''}`}>
                        <label className="flex items-start gap-4 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isBumpChecked}
                                onChange={() => setIsBumpChecked(!isBumpChecked)}
                                className="w-6 h-6 mt-1 accent-orange-500"
                            />
                            <div>
                                <h3 className="font-extrabold text-orange-900 leading-tight mb-2">
                                    {t('order_bump_title')}
                                </h3>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-black uppercase tracking-wider">Flash Deal</span>
                                    <span className="line-through text-gray-400 font-bold">$50.00</span>
                                    <span className="text-red-600 text-xl font-black">$12.50</span>
                                    <span className="text-green-600 font-bold text-sm">{t('save_amount')}</span>
                                </div>
                                <p className="text-sm text-orange-800/80 leading-relaxed font-medium">
                                    {t('order_bump_deal')}
                                </p>
                            </div>
                        </label>
                    </div>

                    <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-100 flex justify-between items-center text-2xl font-black">
                        <span>Amount Due</span>
                        <span className={isBumpChecked ? 'text-red-600' : ''}>${total.toFixed(2)}</span>
                    </div>

                    <button className="w-full mt-10 py-5 bg-black text-white rounded-2xl font-black text-xl hover:bg-gray-800 transition-all shadow-xl transform active:scale-95">
                        Complete Secure Purchase
                    </button>

                    <p className="text-center text-gray-400 text-xs mt-6 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> 256-bit SSL Secure Encrypted Payment
                    </p>
                </div>

                {/* Security Info */}
                <div className="lg:pt-10">
                    <h2 className="text-2xl font-bold mb-6">Guaranteed Security</h2>
                    <p className="text-gray-500 mb-10 leading-relaxed text-lg">
                        We prioritize your security above all else. Every transaction is processed through world-class encrypted gateways, ensuring your data never leaves the safety of the institution.
                    </p>

                    <div className="space-y-4">
                        <div className="p-6 border border-gray-100 rounded-2xl flex items-center justify-between hover:border-accent transition-colors group">
                            <div className="flex items-center gap-4">
                                <CreditCard className="text-gray-400 group-hover:text-accent" />
                                <span className="font-bold">Credit Card (Stripe)</span>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" className="h-4" alt="Stripe" />
                        </div>

                        <div className="p-6 border border-gray-100 rounded-2xl flex items-center justify-between hover:border-accent transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="text-gray-400 group-hover:text-accent">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                </div>
                                <span className="font-bold">PayPal</span>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-blue-50/50 rounded-3xl border border-blue-100/50">
                        <h4 className="font-black text-blue-900 mb-3">100% Risk-Free Guarantee</h4>
                        <p className="text-blue-800/70 text-sm leading-relaxed">
                            Join thousands of traders who have transformed their analysis with InfinityAlgo tools. If you're not completely satisfied, we'll make it right. No questions asked.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
