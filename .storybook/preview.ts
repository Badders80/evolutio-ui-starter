import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { 
      expanded: true, 
      matchers: { 
        color: /(background|color)$/i, 
        date: /Date$/i 
      } 
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0b0b0b' }, 
        { name: 'light', value: '#ffffff' }
      ]
    }
  },
  decorators: [
    (Story) => {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.add('dark');
      }
      return React.createElement(
        'div',
        { 
          style: { minHeight: '100vh', padding: 24 }, 
          className: 'dark' 
        },
        React.createElement(Story)
      );
    }
  ]
};

export default preview;