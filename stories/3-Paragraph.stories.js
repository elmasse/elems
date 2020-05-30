import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { withCSSVars, withPostLayout } from './decorators'
import { P, Anchor, Code } from '../src'

export default {
  title: 'Paragraph',
  component: Text,
  decorators: [withKnobs, withCSSVars, withPostLayout]
}

export const Text = () => (
  <P>
  Lorem <mark>ipsum</mark> dolor sit amet <strong>consectetur</strong> adipisicing elit. Aut <i>harum
      molestias
  </i> labore amet
  possimus <s>exercitationem aperiam</s> earum, doloribus <u>nobis ducimus</u> maiores quia voluptates quis omnis
  molestiae quisquam. Voluptatibus, officiis laudantium?
  </P>
)

export const Emoji = () => (
  <P>
    Lorem impsum dolor sit amet.
    <span role='img' aria-label='so cool'>
      😀 😎 👍 💯
    </span>
  </P>
)

export const Anchors = () => (
  <P>
    Lorem impsum dolor sit amet. <Anchor>This is a link</Anchor>
  </P>
)

export const CodeBlocks = () => (
  <Paragraph>
    Lorem impsum dolor sit amet. <Code>This is a Code Block</Code>
  </Paragraph>
)
