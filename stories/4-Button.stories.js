import React from 'react';
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import { withCSSVars } from './decorators'
import { Button } from '../src';

export default {
  title: 'Buttons',
  component: Buttons,
  decorators: [withKnobs, withCSSVars]
};

export const Buttons = () => (
  <Button
    raised={boolean('raised', true, 'Props')}
    variant={text('variant', 'highlight', 'Props')}
  >
      Hello Button
  </Button>

)


export const Emoji = () => (
  <Button
    raised={boolean('raised', false, 'Props')}
    variant={text('variant', undefined, 'Props')}
  >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

