/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                main_color: 'var(--main-color)',
                main_bg_color: 'var(--main-bg-color)',
            },
        },
    },
    plugins: [],
}
