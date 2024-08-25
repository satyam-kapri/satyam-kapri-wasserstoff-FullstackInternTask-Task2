/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				background: "#1a1b20",		// overall background
				base: "#131419",			// main theme color, used on cards, components..
				"base-lighter": "#1f2025",
				 txt: "#e2e8f0",				// for normal texts
				"txt-depressed": "#7e878f", // for depressed texts
				"light-orange": "#FFC96F",
				
			},
    },
  },
  plugins: [],
}

