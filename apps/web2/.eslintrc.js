module.exports = {
  root: true,
  extends: ['custom'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    // TODO: 아래 rule은 일단 추가(원래는 없어도 되야 함)
    'react/no-unknown-property': ['error', { ignore: ['css', 'tw'] }],
  },
};
