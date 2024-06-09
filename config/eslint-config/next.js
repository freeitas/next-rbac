/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'eslint-config-turbo',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
}
