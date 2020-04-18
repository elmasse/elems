import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import 'typeface-fira-code'

import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  Anchor,
  Code,
  Divider,
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
    <Heading1>Welcome</Heading1>
    <Paragraph>
      This is a welcome component that contains several components.
      You will find <Code>Code Blocks like this.</Code>            
    </Paragraph>
    <Divider />
    <Paragraph className="no-margin">
      This is a Another Paragraph. That contains <Anchor>Links</Anchor> and a custom <Code>className="no-margin"</Code>
    </Paragraph>

    <Heading2>Components</Heading2>
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
    <style jsx>{`
      .layout {
        display: flex;
        flex-direction: column;
      }
      .layout :global(.logo) {
        margin: calc(var(--spacing) * 4);
      }
      .layout :global(p.no-margin) {
        margin: 0;
      }
    `}</style>
  </div>
);

const Logo = ({ size = "90px", ...props }) => (
  <div {...props}>
    <span>E</span><span>le</span><br/>
    <span>M</span>ent<br/>
    <span>S</span>
    <style jsx>{`
    div {        
      font-size: calc(${size}/3);
      font-family: 'Fira Code';
      line-height: 1em;
      letter-spacing: .2em;

    }
    div span {
      display: inline-block;
      background-color: var(--action-color);
      min-width: 1em;
      letter-spacing: 0;
      font-weight: 700;
      text-align: center;
    }
    div span:nth-child(2) {
      margin-left: -0.1em;
    }
  `}</style>      
  </div>
)
