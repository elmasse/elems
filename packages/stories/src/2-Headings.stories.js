import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { withCSSVars, withPostLayout } from './decorators'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from 'elems'

export default {
  title: 'Headings',
  component: Headings,
  decorators: [withPostLayout, withCSSVars, withKnobs]
}

export const Headings = () => (
  <>
    <Heading1>Heading 1</Heading1>
    <Heading2>Heading 2</Heading2>
    <Heading3>Heading 3</Heading3>
    <Heading4>Heading 4</Heading4>
    <Heading5>Heading 5</Heading5>
    <Heading6>Heading 6</Heading6>
  </>
)
