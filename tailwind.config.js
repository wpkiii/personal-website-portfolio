// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");
// Brand colors are shared with the animation config (src/animations/config.js)
const tokens = require("./src/animations/tokens.json");

module.exports = {
    darkMode: 'class',
    content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this if your files are in a different directory
  ],
  theme: {
  	extend: {
		backgroundImage: {
			// ends on a mid lavender so the black card text stays ≥ 4.5:1 across the whole card
			'northwestern-gradient': 'linear-gradient(to right, #FFFFFF, #9B7FD0)', // White to Purple
			'ncat-gradient': 'linear-gradient(to right, #FFFFFF, #FFD700)',        // Gold to Navy
		  },
		fontFamily: {
			sans: ['var(--font-inter-tight)', ...defaultTheme.fontFamily.sans],
			heading: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
			mono: ['var(--font-courier-prime)', ...defaultTheme.fontFamily.mono],
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  colorFade: {
			'0%': { backgroundColor: '#7A8255' },
			'16.67%': { backgroundColor: '#B7A97E' },
			'33.33%': { backgroundColor: '#B08F6A' },
			'50%': { backgroundColor: '#56623E' },
			'66.67%': { backgroundColor: '#7D6342' },
			'83.33%': { backgroundColor: '#5B4B34' },
			'100%': { backgroundColor: '#7A8255' },
		  },
  		colors: {
  			brand: tokens.colors,
  			// Site palette (Patina). Values are CSS variables set per theme in
  			// globals.css, so every class here flips with light/dark mode.
  			page: 'var(--c-page)',
  			panel: { DEFAULT: 'var(--c-panel)', 2: 'var(--c-panel-2)' },
  			ink: { DEFAULT: 'var(--c-ink)', muted: 'var(--c-ink-muted)' },
  			rule: 'var(--c-rule)',
  			signal: { DEFAULT: 'var(--c-signal)', ink: 'var(--c-signal-ink)', on: 'var(--c-on-signal)' },
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
