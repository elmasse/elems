import React from 'react'
import { color, number, text, boolean } from '@storybook/addon-knobs'

import 'typeface-lato'
import 'typeface-open-sans'
import 'typeface-fira-code'

import OverlayGrid from '../components/overlay-grid'

export const withCSSVars = (story) => {
  const overlayShow = boolean('Show Overlay', true, 'Rhythm')
  const overlayColor = color('Overlay Grid', '#e4e4e4', 'Rhythm')
  const spacing = number('--spacing', 8, {}, 'Rhythm')

  return (
    <div className='story-with-css'>
      <style jsx global>{`
        :root {
          --base-font-size: ${number('--base-font-size', 16, {}, 'Rhythm')}px;
          --base-line-height: ${text('--base-line-height', 'calc(32 / 16) ', 'Rhythm')};
          --font-family-heading: ${text('--font-family-heading', 'Lato', 'Font')};
          --font-family-body: ${text('--font-family-body', 'Open Sans', 'Font')};
          --font-family-monospace: ${text('--font-family-monospace', 'Fira Code', 'Font')};

          --spacing: ${spacing}px;

          --main-color: ${color('--main-color', '#181818', 'Color')};
          --action-color: ${color('--action-color', '#f63', 'Color')};
          --blockquote-border-color: ${color('--blockquote-border-color', '#f36', 'Color')};
          --hr-content: "${text('--hr-content', '•••', 'Misc')}";
          
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

          font-size: var(--base-font-size);
        }
        body {
          margin: 0;
        }
      `}
      </style>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
        }
      `}
      </style>
      <OverlayGrid
        spacing={spacing}
        gridColor={overlayColor}
        show={overlayShow}
      >
        {story()}
      </OverlayGrid>
    </div>
  )
}
