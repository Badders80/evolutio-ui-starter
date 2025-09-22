import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: { useSWC: true },
      nextConfigPath: path.resolve(__dirname, '../next.config.mjs')
    }
  },
  docs: { autodocs: 'tag' },
  webpackFinal: async (cfg) => {
    cfg.resolve = cfg.resolve ?? {};
    cfg.resolve.alias = {
      ...(cfg.resolve.alias ?? {}),
      '@': path.resolve(__dirname, '../src')
    };
    cfg.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: require.resolve('@svgr/webpack'), options: { icon: false } }]
    });
    cfg.resolve.fallback = {
      ...(cfg.resolve.fallback ?? {}),
      fs: false,
      path: false,
      crypto: false
    };
    return cfg;
  }
};

export default config;
