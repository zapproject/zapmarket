import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#C0C0C0',
  			'black-copy': '#222'
  		},
  		boxShadow: {
  			main: '-1px -1px 0px 0px #0A0A0A inset, 1px 1px 0px 0px #FFF inset, -2px -2px 0px 0px #808080 inset, 2px 2px 0px 0px #DFDFDF inset',
  			selected: '-2px 0px 0px 0px rgba(38, 38, 38, 0.50) inset, -1px 0px 0px 0px #0A0A0A inset, 1px 1px 0px 0px #FFF inset, 2px 2px 0px 0px #DFDFDF inset',
  			textbox: '-1px -1px 0px 0px #FFF inset, 1px 1px 0px 0px #0A0A0A inset, -2px -2px 0px 0px #DFDFDF inset, 2px 2px 0px 0px #808080 inset'
  		},
  		fontSize: {
  			'button-size': '11px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
