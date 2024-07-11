const antfu = require('@antfu/eslint-config').default

module.exports = antfu({}, {
  rules: {
    'node/prefer-global/process': 'off',
    "sort-imports": "off",
    "style/semi": "off",
    'vue/block-order': off
  },
})
