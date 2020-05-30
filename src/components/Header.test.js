import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import Header from './Header'

it('renders', () => {
  const { asFragment } = render(<Header text="Bakate" />)
  expect(asFragment()).toMatchSnapshot()
})
it('renders', () => {
  const { getByTestId, getByText } = render(<Header text="Bakate" />)
  expect(getByTestId('h1bb')).toHaveTextContent("I'm Bakate")
  expect(getByText("I'm Bakate")).toHaveClass('yo')
})
