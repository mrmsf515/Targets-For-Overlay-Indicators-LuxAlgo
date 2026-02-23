"use client";
import React from 'react';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';

export default function Docs() {
    const { t } = useLang();

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-extrabold mb-12">{t('docs_title')}</h1>

            <div className="space-y-16">
                <section>
                    <h2 className="text-2xl font-bold mb-6">Installation Guide</h2>
                    <div className="space-y-4 text-gray-600">
                        <p>1. Download the indicator source code from your dashboard after "purchasing" for $0.</p>
                        <p>2. Open TradingView and go to the Pine Editor.</p>
                        <p>3. Paste the code and click "Add to Chart".</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-10">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        {[
                            {
                                q: "Why is this indicator free?",
                                a: "We believe in providing value first. This free indicator serves as an introduction to our professional ecosystem at InfinityAlgo Academy. It's fully functional and designed to provide immediate results."
                            },
                            {
                                q: "How does the 'Targets for Overlay' work?",
                                a: "The algorithm analyzes volatility and historical pivot points to project high-probability target zones. Unlike standard indicators, it adapts to current market context in real-time."
                            },
                            {
                                q: "Is it compatible with other LuxAlgo tools?",
                                a: "Yes! It is specifically engineered to complement overlay indicators and LuxAlgo sets. It fills the gap by providing clear take-profit and exit zones."
                            },
                            {
                                q: "Why should I upgrade to InfinityRSI Divergence?",
                                a: "While the free indicator shows you WHERE the targets are, the InfinityRSI Divergence shows you WHEN a reversal is imminent. Combining these two tools creates a complete trading system with a massive edge."
                            }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-gray-100 pb-8">
                                <h3 className="text-lg font-bold mb-3 text-black">{item.q}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-gray-50 rounded-3xl p-10 text-center border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4">Ready to elevate your trading?</h3>
                    <p className="text-gray-500 mb-8">Get the indicator now for free and reveal hidden targets on your chart.</p>
                    <Link href="/checkout" className="inline-block px-10 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg">
                        {t('btn_get_free')}
                    </Link>
                </section>
            </div>
        </div>
    );
}
