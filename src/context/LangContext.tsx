"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
    en: {
        nav_home: "Home",
        nav_docs: "Docs",
        nav_checkout: "Checkout",
        hero_title: "Targets for Overlay Indicators",
        hero_subtitle: "Professional indicators by LuxAlgo. Enhance your trading analysis with precision targets.",
        btn_get_free: "Get it for Free ($0)",
        order_bump_title: "Yes! Upgrade my analysis with the InfinityRSI Divergence V6.2!",
        order_bump_deal: "The Deal: For a limited time, add this powerful indicator to your toolkit for $12.50 ONLY (Original Price: $50.00). Don't miss this 75% discount it won't be available once you leave this page.",
        checkout_title: "Secure Checkout",
        docs_title: "Documentation & FAQ",
        save_amount: "Save $37.50"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_docs: "الشرح",
        nav_checkout: "الدفع",
        hero_title: "أهداف مؤشرات التراكب",
        hero_subtitle: "مؤشرات احترافية من LuxAlgo. عزز تحليلك للتداول بأهداف دقيقة.",
        btn_get_free: "احصل عليه مجاناً ($0)",
        order_bump_title: "نعم! قم بترقية تحليلي باستخدام InfinityRSI Divergence V6.2!",
        order_bump_deal: "العرض: لفترة محدودة، أضف هذا المؤشر القوي إلى مجموعتك مقابل 12.50 دولارًا فقط (السعر الأصلي: 50.00 دولارًا). لا تفوت خصم 75٪ هذا، فلن يكون متاحًا بمجرد مغادرتك لهذه الصفحة.",
        checkout_title: "دفع آمن",
        docs_title: "الشروحات والأسئلة الشائعة",
        save_amount: "وفر 37.50 دولار"
    }
};

type Language = 'en' | 'ar';

interface LangContextType {
    locale: Language;
    t: (key: string) => string;
    toggleLanguage: () => void;
    isRTL: boolean;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
    const [locale, setLocale] = useState<Language>('en');

    useEffect(() => {
        const saved = localStorage.getItem('locale') as Language;
        if (saved) setLocale(saved);
    }, []);

    const t = (key: string) => (translations[locale] as any)[key] || key;

    const toggleLanguage = () => {
        const next = locale === 'en' ? 'ar' : 'en';
        setLocale(next);
        localStorage.setItem('locale', next);
    };

    const isRTL = locale === 'ar';

    return (
        <LangContext.Provider value={{ locale, t, toggleLanguage, isRTL }}>
            <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-cairo' : ''}>
                {children}
            </div>
        </LangContext.Provider>
    );
};

export const useLang = () => {
    const context = useContext(LangContext);
    if (!context) throw new Error('useLang must be used within LangProvider');
    return context;
};
