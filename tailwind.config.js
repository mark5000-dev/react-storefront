/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        lora: ["Lora", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600
          light: '#3b82f6', // blue-500
          dark: '#1d4ed8', // blue-700
        },
        secondary: {
          DEFAULT: '#4f46e5', // indigo-600
          light: '#6366f1', // indigo-500
          dark: '#4338ca', // indigo-700
        },
        accent: {
          DEFAULT: '#ea580c', // orange-600
          light: '#f97316', // orange-500
          dark: '#c2410c', // orange-700
        },
        neutral: {
          DEFAULT: '#6b7280', // gray-500
          light: '#9ca3af', // gray-400
          dark: '#4b5563', // gray-600
        },
      },
    },
  },
  plugins: [],
};
