module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['*.html','./**/*.html'],
  },
  theme: {
    extend: {
    	fontFamily: {
    		brand: ['Poppins'],
    		body: ['Open Sans']
    	}
    },
  },
  variants: {},
  plugins: [],
}
