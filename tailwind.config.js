/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,vue}"],
	theme: {
	  extend: {
		padding: {
			'base': '30px',
		  },
		margin: {
			'base': '30px',
		  },
		  colors: {
			brown: "#2c1e1c",
			orange: "#f47920",
		  },
		  boxShadow: {
			header: "0 1px 21px 0 rgba(0,0,0,.08)",
		  }
	  },
	},
	plugins: [],
  }