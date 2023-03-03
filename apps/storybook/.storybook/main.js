module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  refs: {
    ui: {
      title: 'UI',
      url: process.env.NODE_ENV === 'development' ? 'http://localhost:7006' : 'ui/',
    },
  },
};
