import React from 'react'
import { color, number, text } from "@storybook/addon-knobs";

import 'typeface-lato';
import 'typeface-open-sans';

export const withCSSVars = (story) => (
  <div className="story-with-css"
    // style={{
    //   '--font-base': `${number('--font-base', 16, {}, 'CSS Vars')}px`,
    //   '--font-family-heading': text('--font-family-heading', 'Lato', 'CSS Vars'),
    //   '--font-family-body': text('--font-family-body','Open Sans', 'CSS Vars'),
      
    //   '--spacing': `${number('--spacing', 8, {}, 'CSS Vars')}px`,

    //   '--main-color': color('--main-color', '#181818', 'CSS Vars'),
    //   '--action-color': color('--action-color', '#f63', 'CSS Vars'),
    //   '--divider-content': `"${text('--divider-content', '', 'CSS Vars')}"`,
    //   '--grey50': '#fafafa',
    //   '--grey100': '#f0f0f0',
    //   '--grey200': '#e4e4e4',
    //   '--grey300': '#d5d5d5',
    //   '--grey400': '#bdbdbd',
    //   '--grey500': '#9e9e9e',
    //   '--grey600': '#757575',
    //   '--grey700': '#424242',
    //   '--grey800': '#212121',
    //   '--grey900': '#181818',
    //   fontSize: 'var(--font-base)'
    // }}
  >
    <style jsx global>{`
      :root {
        --font-base: ${number('--font-base', 16, {}, 'CSS Vars')}px;
        font-size: var(--font-base);
        --font-family-heading: ${text('--font-family-heading', 'Lato', 'CSS Vars')};
        --font-family-body: ${text('--font-family-body','Open Sans', 'CSS Vars')};
          
        --spacing: ${number('--spacing', 8, {}, 'CSS Vars')}px;
    
        --main-color: ${color('--main-color', '#181818', 'CSS Vars')};
        --action-color: ${color('--action-color', '#f63', 'CSS Vars')};
        --divider-content: "${text('--divider-content', '', 'CSS Vars')}";
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
    {story()}
  </div>
)