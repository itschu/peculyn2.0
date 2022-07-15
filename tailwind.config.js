module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				body: ["Nunito"],
			},
			colors: {
				background: "#fafafa",
				primary: {
					100: "#ffeb80",
					200: "#ffe766",
					300: "#ffe34d",
					400: "#ffdf33",
					500: "#ffdb1a",
					600: "#ffd700",
					700: "#e6c200",
					800: "#ccac00",
					900: "#b39700",
				},
				secondary: {
					100: "#80818e",
					200: "#6b6c7b",
					300: "#555768",
					400: "#404255",
					500: "#2b2d42",
					600: "#27293b",
					700: "#222435",
					800: "#1e1f2e",
					900: "#1a1b28",
				},
				tetiary: {
					100: "#82919b",
					200: "#6d7f8a",
					300: "#596d79",
					400: "#445a69",
					500: "#2f4858",
					600: "#2a414f",
					700: "#263a46",
					800: "#21323e",
					900: "#1c2b35",
				},
			},
		},
	},
	plugins: [],
};
