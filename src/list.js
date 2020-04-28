import React from 'react'

export const List = ({ children, ...props }) => {
  return (
    <ul {...props}>
      {children}
      <style jsx>{`
        ul {        
          font-family: var(--font-family-body);
          margin: calc(var(--spacing) * 2) 0;
        }

        ul :global(ul),
        ul :global(ol) {
          margin: 0;
        }
      `}
      </style>
    </ul>
  )
}

export const UL = List

export const OrderedList = ({ children, ...props }) => {
  return (
    <ol {...props}>
      {children}
      <style jsx>
        {`
        ol {
          margin: calc(var(--spacing) * 2) 0;
          font-family: var(--font-family-body);
        }

        ol :global(ol),
        ol :global(ul) {
          margin: 0;
        }
      `}
      </style>
    </ol>
  )
}

export const OL = OrderedList

export const ListItem = ({ children, ...props }) => {
  return (
    <li {...props}>
      {children}
      <style jsx>
        {`
        li {
          list-style: none;
          margin: calc(var(--spacing) * 1);
          font-size: 1.2rem;
          line-height: 1.54rem;
        }
        :global(ol) > li {
          list-style: unset;
        }
      `}
      </style>
    </li>
  )
}

export const LI = ListItem
