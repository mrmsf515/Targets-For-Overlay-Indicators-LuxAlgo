/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#000000",
                secondary: "#ffffff",
                accent: "#0070f3",
            },
            fontFamily: {
                cairo: ["Cairo", "sans-serif"],
            },
        },
    },
    plugins: [],
}
