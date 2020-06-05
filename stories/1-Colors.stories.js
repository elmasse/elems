import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { withCSSVars, withPostLayout } from './decorators'

export default {
  title: 'Colors',
  component: Colors,
  decorators: [withPostLayout, withCSSVars, withKnobs]
}

const shades = (tag) => Array.from(Array(10).keys()).map(i => `--${tag}${(i * 100) || 50}`)

export const Colors = () => (
  <div className='root'>
    <div className='column'>
      <Color color='--main-color' />
      <Color color='--main-contrast-color' />
      <Color color='--action-color' />
      <Color color='--primary?' />
      <Color color='--secondary?' />
    </div>
    <div className='column'>
      {
        shades('grey')
          .map(color => <Color key={color} color={color} />)
      }
    </div>
    <div className='column'>
      {
        shades('palette')
          .map(color => <Color key={color} color={color} />)
      }
    </div>
    <style jsx>
      {`
        .root {
          display: flex;
          font-family: var(--font-family-body);
        }
        .column {
          flex: 1
        }
      `}
    </style>
  </div>
)

const Color = ({ color }) => (
  <>
    <div className='color'><span style={{ '--color': `var(${color})` }} />{color}</div>
    <style jsx>{`
      .color { display: flex; flex-direction: row; align-items: center; }
      span {
        margin-right: calc(var(--spacing) * .5);
        display: inline-block;
        height: 30px;
        width: 60px;
        background-color: var(--color);
      }
    `}
    </style>
  </>
)
