import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";

import { withCSSVars } from './decorators'
import { List, OrderedList, ListItem, Button, Anchor } from '../src';

export default {
  title: 'Lists',
  component: Lists,
  decorators: [withKnobs, withCSSVars]
};

export const Lists = () => (
  <List>
    <ListItem>List Items</ListItem>
    <ListItem><Button variant="highlight">highlight button</Button></ListItem>
    <ListItem><Anchor>Links</Anchor></ListItem>
    <ListItem> Inset List
      <List>
        <ListItem>Inset Item</ListItem>
        <ListItem>Inset Item</ListItem>
      </List>
    </ListItem>
    <ListItem> Inset Ordered List
      <OrderedList>
        <ListItem>Numbered Inset Item</ListItem>
        <ListItem>Numbered Inset Item</ListItem>
      </OrderedList>
    </ListItem>
  </List>
)

export const OrderedLists = () => (
  <OrderedList>
    <ListItem>Numbered Item</ListItem>
    <ListItem>Inset List
      <List>
        <ListItem>Inset Items</ListItem>
      </List>
    </ListItem>
    <ListItem> Inset Ordered List
      <OrderedList>
        <ListItem>Numbered Inset Item</ListItem>
        <ListItem>Numbered Inset Item</ListItem>
      </OrderedList>
    </ListItem>    
  </OrderedList>
)
