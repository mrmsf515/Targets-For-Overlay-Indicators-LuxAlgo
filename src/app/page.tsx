"use client";
import React from 'react';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';

export default function Home() {
    const { t } = useLang();

    return (
        <>
            <section className="py-20 text-center bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        {t('hero_title')}
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t('hero_subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/checkout" className="px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg">
                            {t('btn_get_free')}
                        </Link>
                        <Link href="/docs" className="px-8 py-4 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all">
                            {t('nav_docs')}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Why InfinityAlgo?</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We provide institutional-grade tools for retail traders. Our indicators are designed to be intuitive yet powerful, giving you the edge you need in the markets.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Precision Targeting",
                                "LuxAlgo Compatibility",
                                "Real-time Analytics",
                                "Institutional Algorithms"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-semibold">
                                    <div className="bg-blue-50 p-1 rounded-full">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14 7L8.5 12.5L6 10" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-100 border border-gray-200 rounded-3xl h-96 flex items-center justify-center shadow-inner relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
                        <span className="text-gray-400 font-bold text-lg relative z-10 group-hover:scale-110 transition-transform duration-500">Indicator Preview</span>
                    </div>
                </div>
            </section>
        </>
    );
}
