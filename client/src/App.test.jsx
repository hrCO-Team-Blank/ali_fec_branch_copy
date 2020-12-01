import * as React from 'react'
import * as ReactDom from 'react-dom'
import App from './App'

test('renders correct content', () => {
  const root = document.createElement('div');
  ReactDom.render(<RelatedAndOutfitApp />, root)
  expect(root.querySelector('h1'.textContent).toBe('RELATED PRODUCTS'))
})