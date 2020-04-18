import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, color, number, boolean, text } from "@storybook/addon-knobs";


import { withCSSVars } from './decorators';
import { Paragraph, Anchor, Code } from '../src';

export default {
  title: 'Paragraph',
  component: Paragraph,
  decorators: [withKnobs, withCSSVars]
};

export const Text = () => (
  <Paragraph>
    Lorem impsum dolor sit amet.
  </Paragraph>
)

export const Emoji = () => (
  <Paragraph>
    Lorem impsum dolor sit amet.
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Paragraph>
)

export const Anchors = () => (
  <Paragraph>
    Lorem impsum dolor sit amet. <Anchor>This is a link</Anchor>
  </Paragraph>
)

export const CodeBlocks = () => (
  <Paragraph>
    Lorem impsum dolor sit amet. <Code>This is a Code Block</Code>
  </Paragraph>
)
