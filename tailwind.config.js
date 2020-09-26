module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
    content: ['*.html'],
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
