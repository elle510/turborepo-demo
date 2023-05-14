module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    // '../../../packages/ui/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
    // buildStoriesJson: true, // 👈 Enable this to build the stories.json file
  },
  refs: {
    // workshop: {
    //   title: 'WorkShop',
    //   url: process.env.NODE_ENV === 'development' ? 'http://localhost:7007' : 'workshop/',
    // },
    ui: {
      title: 'UI',
      url: process.env.NODE_ENV === 'development' ? 'http://localhost:7006' : 'ui/',
    },
  },
};
