"use client";
import React from 'react';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';

const Navbar = () => {
    const { t, toggleLanguage } = useLang();

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="black" />
                        <path d="M16 8L22 22H10L16 8Z" fill="white" />
                    </svg>
                    <span className="hidden sm:inline">InfinityAlgo</span>
                </Link>
                <nav className="flex items-center gap-6">
                    <Link href="/" className="hover:text-accent font-medium transition-colors">{t('nav_home')}</Link>
                    <Link href="/docs" className="hover:text-accent font-medium transition-colors">{t('nav_docs')}</Link>
                    <Link href="/checkout" className="hover:text-accent font-medium transition-colors">{t('nav_checkout')}</Link>
                    <button
                        onClick={toggleLanguage}
                        className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 font-semibold transition-all"
                    >
                        AR/EN
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
