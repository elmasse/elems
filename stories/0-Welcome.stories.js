import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import 'typeface-fira-code'

import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  Blockquote,
  Anchor,
  Code,
  Divider,
  Img,
  List,
  OrderedList,
  ListItem,
  Button
 } from '../src'
import { withCSSVars } from './decorators'

export default {
  title: 'Welcome',
  component: Welcome,
  decorators: [withKnobs, withCSSVars]
};

export const Welcome = () => (
  <div className="layout">
    <Logo size="180px" className="logo"/>
    <Blockquote>
      <Paragraph>Components, not too many.</Paragraph>
    </Blockquote>
    <Heading1>Welcome</Heading1>
    <Paragraph>
      This is <Logo size="32px" className="logo-inline"/>. A very small and opinionated set of React HTML elements for Blogs.
      It is not a comprehensive set of UI components. Instead it is built for the need of styling simple 
      components like when you are using a Markdown converter to render your posts. {" "}
      <Code>elems</Code> contains a few React components, such as: <Code>Paragraph</Code>, <Code>Heading</Code>, <Code>Code</Code>, <Code>Dividers</Code>, <Code>Image</Code> and more.
    </Paragraph>
    <Divider />
    <Heading2>Components</Heading2>
    <Heading3>Paragraph</Heading3>
    <Paragraph>
      This is a Paragraph. That contains <Anchor>Links</Anchor>.
    </Paragraph>
    <Paragraph className="no-margin">
      This is a Another Paragraph. That contains <Anchor>Links</Anchor> and a custom <Code>className="no-margin"</Code>
    </Paragraph>
    <Heading3>Image</Heading3>
    <Img 
      src="https://unsplash.com/photos/G-HRuwCTR7c/download"
      alt="https://unsplash.com/@ryanquintal"
    />
    <Heading3>Lists</Heading3>
    <List>
      <ListItem>List Items</ListItem>
      <ListItem><Button variant="highlight">highlight button</Button></ListItem>
      <ListItem><Anchor>Links</Anchor></ListItem>
      <ListItem> Ordered List
        <OrderedList>
          <ListItem>Numbered Item</ListItem>
          <ListItem>Numbered Item</ListItem>
        </OrderedList>
      </ListItem>
    </List>
    <Heading3>Dividers</Heading3>
    <Divider />
    <Divider style={{
      '--divider-content': '"..."'
     }}/>


    <style jsx>{`
      .layout {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 900px;
      }

      .layout :global(p .logo-inline) {
        display: inline-block;
      }

      .layout :global(p.no-margin) {
        margin: 0;
      }
    `}</style>
  </div>
);

const Logo = ({ size = "90px", className, ...props }) => (
  <span className={[className, 'logo'].join(' ')} {...props}>
    <span className="color">E</span><span className="color">le</span><br/>
    <span className="color">M</span><span className="neutral">ent</span><br/>
    <span className="color">S</span>
    <style jsx>{`
    .logo {
      font-size: calc(${size}/3);
      font-family: 'Fira Code';
      line-height: 1em;
      letter-spacing: .2em;
    }
    .logo span.color {
      display: inline-block;
      background-color: var(--action-color);
      min-width: 1em;
      letter-spacing: 0;
      font-weight: 700;
      text-align: center;
    }
    .logo span.color:nth-child(2) {
      margin-left: -0.1em;
    }

    .logo span.neutral {
    }
  `}</style>      
  </span>
)
