import React from 'react'
import { color, number, text, boolean } from "@storybook/addon-knobs"

import 'typeface-lato'
import 'typeface-open-sans'

import OverlayGrid from '../components/overlay-grid'

export const withCSSVars = (story) => {
  const spacing = number('--spacing', 8, {}, 'Rhythm')
  const overlayShow = boolean('Show Overlay', true, 'Rhythm')
  const overlayColor = color('Overlay Grid', '#e4e4e4', 'Rhythm')

  return (
    <div className="story-with-css">
      <style jsx global>{`
        :root {
          --font-base: ${number('--font-base', 16, {}, 'Rhythm')}px;
          font-size: var(--font-base);
          --font-family-heading: ${text('--font-family-heading', 'Lato', 'Font')};
          --font-family-body: ${text('--font-family-body','Open Sans', 'Font')};

          --spacing: ${spacing}px;

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
        body {
          margin: 0;
        }
      `}</style>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
        }
      `}</style>
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
