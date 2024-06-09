/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', 'prettier', 'eslint-config-turbo'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
}
