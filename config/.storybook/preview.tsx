import type { Preview, StoryFn } from '@storybook/react'
import 'app/styles/index.scss';
import React, { ReactElement } from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  // decorators: [
  //   (StoryComponent: any) => (
  //       <StoryComponent/>
  //   ),
  // ],
}

export default preview
