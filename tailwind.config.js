/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'SF Pro Display',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'San Francisco',
                    'Helvetica Neue',
                    'Roboto',
                    'sans-serif'
                ],
            },
            colors: {
                brand: {
                    cyan: '#00C6FF',
                    blue: '#0072FF',
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient': 'gradient 3s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                gradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                }
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to right, #0072FF, #00C6FF, #0072FF)',
            }
        },
    },
    plugins: [],
}
