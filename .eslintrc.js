module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: 'airbnb',
  plugins: [
    'react',
    'react-native',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
    'react-native/sort-styles': [
      'error',
      'asc',
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false,
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/style-prop-object': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'func-names': 0,
    'no-plusplus': 0,
    'no-use-before-define': 0,
    'consistent-return': 2,
    semi: [1, 'always'],
  },
};
