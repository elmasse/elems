import React from 'react'

export const List = ({ children, ...props }) => {
  return (
    <ul {...props}>
      {children}
      <style jsx>{`
        ul {
          font-family: var(--font-family-body);
          margin: var(--ul-margin, 0 0 calc(var(--spacing) * 2) 0);
          padding: 0 0 0 2.5rem;
        }

        ul :global(ul),
        ul :global(ol),
        ul :global(dl), {
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
          margin: var(--ol-margin, 0 0 calc(var(--spacing) * 2) 0);
          font-family: var(--font-family-body);
          padding: 0 0 0 2.5rem;
        }

        ol :global(ul),
        ol :global(ol),
        ol :global(dl), {
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
          margin: var(--li-margin, var(--spacing));
          font-size: var(--li-font-size, 1rem);
          line-height: var(--base-line-height, 32px);
        }
      `}
      </style>
    </li>
  )
}

export const LI = ListItem

export const DescriptionList = ({ children, ...props }) => {
  return (
    <dl {...props}>
      {children}
      <style jsx>{`
        dl {
          font-family: var(--font-family-body);
          margin: var(--dl-margin, 0 0 calc(var(--spacing) * 2) 0);
        }

        dl :global(ul),
        dl :global(ol),
        dl :global(dl) {
          margin: 0;
        }
      `}
      </style>
    </dl>
  )
}

export const DL = DescriptionList

export const DescriptionTerm = ({ children, ...props }) => {
  return (
    <dt {...props}>
      {children}
      <style jsx>
        {`
        dt {
          margin: var(--dt-margin, var(--spacing));
          font-size: var(--dt-font-size, 1rem);
          line-height: var(--base-line-height, 32px);
        }
      `}
      </style>
    </dt>
  )
}

export const DT = DescriptionTerm

export const DescriptionDefinition = ({ children, ...props }) => {
  return (
    <dd {...props}>
      {children}
      <style jsx>
        {`
        dd {
          margin: var(--dd-margin, var(--spacing));
          font-size: var(--dd-font-size, 1rem);
          line-height: var(--base-line-height, 32px);
          padding: 0 0 0 1rem;
        }
      `}
      </style>
    </dd>
  )
}

export const DD = DescriptionDefinition
