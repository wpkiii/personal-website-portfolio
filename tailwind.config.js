// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this if your files are in a different directory
  ],
  theme: {
  	extend: {
		backgroundImage: {
			'northwestern-gradient': 'linear-gradient(to right, #4E2A84, #FFFFFF)', // Purple to White
			'ncat-gradient': 'linear-gradient(to right, #FFFFFF, #FFD700)',        // Gold to Navy
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  keyframes: {
			fadeInUp: {
			  '0%': { opacity: '0', transform: 'translateY(20px)' },
			  '100%': { opacity: '1', transform: 'translateY(0)' },
			},
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
		  animation: {
			fadeInUp: 'fadeInUp 0.5s ease-out forwards',
		  },
  		colors: {
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
