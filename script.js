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

let currentLocale = localStorage.getItem('locale') || 'en';

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLocale][key]) {
            el.textContent = translations[currentLocale][key];
        }
    });

    document.documentElement.lang = currentLocale;
    document.documentElement.dir = currentLocale === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = document.documentElement.dir;
}

function toggleLanguage() {
    currentLocale = currentLocale === 'en' ? 'ar' : 'en';
    localStorage.setItem('locale', currentLocale);
    updateContent();
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    const langBtn = document.getElementById('lang-switch');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
});
