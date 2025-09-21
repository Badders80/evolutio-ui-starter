import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  framework: { name: "@storybook/nextjs", options: {} },
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  staticDirs: ["../public"],
  docs: { autodocs: "tag" },
  webpackFinal: async (config) => {
    // Ensure webpack hooks are properly initialized
    if (config.cache && typeof config.cache === 'object') {
      config.cache.type = 'memory';
    }
    return config;
  }
};
export default config;