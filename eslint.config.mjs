// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  rules: {
      '@stylistic/quotes': ['error', 'single'],
      'vue/max-attributes-per-line': ['error', {
        'singleline': { 'max': 10 }, 
        'multiline': { 'max': 1 }
      }],
    }
)
