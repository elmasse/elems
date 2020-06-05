import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import 'typeface-fira-code'

import {
  Heading1, H1,
  Heading2, H2,
  Heading3, H3,
  Heading4, H4,
  Heading5, H5,
  Heading6, H6,
  Paragraph, P,
  Blockquote,
  Anchor, A,
  Code,
  Keyboard, Kbd,
  Divider, Hr,
  Img,
  List, UL,
  OrderedList, OL,
  ListItem, LI,
  DL, DT, DD,
  Preformatted, Pre
} from '../src'

import { Logo } from '../src/logo'

import { withCSSVars, withPostLayout } from './decorators'

export default {
  title: 'Welcome',
  component: Welcome,
  decorators: [withPostLayout, withCSSVars, withKnobs]
}

export const Welcome = () => (
  <div>
    <Logo fontSize='64px' />
    <Blockquote>
      <Paragraph>Components, not too many.</Paragraph>
    </Blockquote>
    <Heading1>Welcome</Heading1>
    <Paragraph>
      This is <Code>elems</Code>. A very small and opinionated set of React HTML elements for Blogs.
      It is not a comprehensive set of UI components. Instead it is built for the need of styling simple
      components like when you are using a Markdown converter to render your posts. {' '}
      <Code>elems</Code> contains a few React components, such as: <Code>Paragraph</Code>, <Code>Heading</Code>, <Code>Code</Code>, <Code>Dividers</Code>, <Code>Image</Code> and a few more.
    </Paragraph>
  </div>
)

export const Elements = () => (
  <div>
    <H1>Heading 1</H1>
    <P>
      Lorem <mark>ipsum</mark> <Code>dolor</Code> sit amet <strong>consectetur</strong> adipisicing elit. Aut <i>harum molestias</i> labore amet
      possimus <s>exercitationem aperiam</s> earum, doloribus <u>nobis ducimus</u> maiores quia voluptates quis omnis
      molestiae quisquam. <A href='#'>Voluptatibus, officiis laudantium?</A>
    </P>
    <H2>Heading 2</H2>
    <P>
      Lorem <mark>ipsum</mark> <Code>dolor</Code> sit amet <strong>consectetur</strong> adipisicing elit. Aut <i>harum molestias</i> labore amet
      possimus <s>exercitationem aperiam</s> earum, doloribus <u>nobis ducimus</u> maiores quia voluptates quis omnis
      molestiae quisquam. <A href='#'>Voluptatibus, officiis laudantium?</A>
    </P>
    <H3>Heading 3</H3>
    <P>
      Lorem <mark>ipsum</mark> <Code>dolor</Code> sit amet <strong>consectetur</strong> adipisicing elit. Aut <i>harum molestias</i> labore amet
      possimus <s>exercitationem aperiam</s> earum, doloribus <u>nobis ducimus</u> maiores quia voluptates quis omnis
      molestiae quisquam. <A href='#'>Voluptatibus, officiis laudantium?</A>
    </P>
    <H4>Heading 4</H4>
    <P>
      Lorem <mark>ipsum</mark> <Code>dolor</Code> sit amet <strong>consectetur</strong> adipisicing elit. Aut <i>harum molestias</i> labore amet
      possimus <s>exercitationem aperiam</s> earum, doloribus <u>nobis ducimus</u> maiores quia voluptates quis omnis
      molestiae quisquam. <A href='#'>Voluptatibus, officiis laudantium?</A>
    </P>
    <H5>Heading 5</H5>
    <P>
      Lorem <mark>ipsum</mark> <Code>dolor</Code> sit amet <strong>consectetur</strong> adipisicing elit. Aut <i>harum molestias</i> labore amet
      possimus <s>exercitationem aperiam</s> earum, doloribus <u>nobis ducimus</u> maiores quia voluptates quis omnis
      molestiae quisquam. <A href='#'>Voluptatibus, officiis laudantium?</A>
    </P>
    <H6>Heading 6</H6>
    <P>
      Lorem <mark>ipsum</mark> <Code>dolor</Code> sit amet <strong>consectetur</strong> adipisicing elit. Aut <i>harum molestias</i> labore amet
      possimus <s>exercitationem aperiam</s> earum, doloribus <u>nobis ducimus</u> maiores quia voluptates quis omnis
      molestiae quisquam. <A href='#'>Voluptatibus, officiis laudantium?</A>
    </P>
    <Hr />
    <P>
      Lorem <mark>ipsum</mark> <Code>dolor</Code> sit amet <strong>consectetur</strong> adipisicing elit. Aut <i>harum molestias</i> labore amet
      possimus <s>exercitationem aperiam</s> earum, doloribus <u>nobis ducimus</u> maiores quia voluptates quis omnis
      molestiae quisquam. <A href='#'>Voluptatibus, officiis laudantium?</A>
    </P>
    <P>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <code>Hic culpa, nobis doloremque</code> veniam non,
      nihil
      cupiditate odit repellat est <Kbd>ALT + F4</Kbd> expedita facilis. Fuga aspernatur, alias debitis eveniet totam
      minima vel.
    </P>
    <UL>
      <LI>List item</LI>
      <LI>List item</LI>
      <LI>List item</LI>
      <LI>List item</LI>
    </UL>
    <OL>
      <LI>Step 1</LI>
      <LI>Step 2</LI>
      <LI>????</LI>
      <LI>PROFIT!!!</LI>
    </OL>
    <DL>
      <DT>Web</DT>
      <DD>The part of the Internet that contains websites and web pages</DD>
      <DT>HTML</DT>
      <DD>A markup language for creating web pages</DD>
      <DT>CSS</DT>
      <DD>A technology to make HTML look better</DD>
    </DL>
    <Blockquote cite='https://en.wikiquote.org/wiki/Edward_Snowden'>
      <P>If you think privacy is unimportant for you because you have nothing to hide, you might as well say free speech
      is unimportant for you because you have nothing useful to say.<br /><br />– Edward Snowden
      </P>
    </Blockquote>
    <Img
      src='https://unsplash.com/photos/G-HRuwCTR7c/download'
      alt='https://unsplash.com/@ryanquintal'
    />
    <Pre>{`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </body>
    </html>
    `}
    </Pre>
  </div>
)
