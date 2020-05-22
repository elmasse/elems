import React from 'react'
import { color, number, text } from "@storybook/addon-knobs";

import 'typeface-lato';
import 'typeface-open-sans';

export const withCSSVars = (story) => (
  <div className="story-with-css">
    <style jsx global>{`
      :root {
        --font-base: ${number('--font-base', 16, {}, 'Rhythm')}px;
        font-size: var(--font-base);
        --font-family-heading: ${text('--font-family-heading', 'Lato', 'Font')};
        --font-family-body: ${text('--font-family-body','Open Sans', 'Font')};
          
        --spacing: ${number('--spacing', 8, {}, 'Rhythm')}px;
    
        --main-color: ${color('--main-color', '#181818', 'Color')};
        --action-color: ${color('--action-color', '#f63', 'Color')};
        --divider-content: "${text('--divider-content', '•••', 'Misc')}";
        --grey50: #fafafa;
        --grey100: #f0f0f0;
        --grey200: #e4e4e4;
        --grey300: #d5d5d5;
        --grey400: #bdbdbd;
        --grey500: #9e9e9e;
        --grey600: #757575;
        --grey700: #424242;
        --grey800: #212121;
        --grey900: #181818; 
      }     
    `}</style>      
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
      }
    `}</style>
    {story()}
  </div>
)

export const withPostLayout = (story) => (
  <div className="story-with-post-layout layout">
    <style jsx>{`
      .layout {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 900px;
      }    
    `}</style>
    {story()}
  </div>
)
