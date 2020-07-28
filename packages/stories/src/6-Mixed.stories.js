import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { withCSSVars, withPostLayout } from './decorators'
import { Paragraph, Preformatted, Code, Mark } from 'elems'

export default {
  title: 'Mixed',
  component: Mixed,
  decorators: [withPostLayout, withCSSVars, withKnobs]
}

export const Mixed = () => (
  <div>
    <Paragraph>
      <Code>Code inside Paragraph</Code>. Lorem <Mark>ipsum</Mark> dolor sit amet <strong>consectetur</strong> adipisicing elit. Aut <i>harum molestias</i> labore amet
      possimus <s>exercitationem aperiam</s> earum, doloribus <u>nobis ducimus</u> maiores quia voluptates quis omnis
      molestiae quisquam. Voluptatibus, officiis laudantium?
    </Paragraph>
    <Preformatted><Code>Code inside Prefromatted</Code></Preformatted>
    <pre><Code>Code inside pre</Code></pre>
    <style jsx>{`
      pre {
        background-color: black;
      }
      pre :global(code) {
        color: #fff;
      }
    `}</style>
  </div>
)

