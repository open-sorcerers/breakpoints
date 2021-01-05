import React from 'react'
import {
  HORIZONTAL_BREAKPOINTS,
  VERTICAL_BREAKPOINTS
} from 'bodypaint'
import { pipe } from 'ramda'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {
  renderBreakpoints,
  renderVerticalBreakpoints,
  renderComponents,
  pointsToDirectionalAttributes
} from './index'

test('renderBreakpoints', () => {
  const Breakpoints = renderBreakpoints({
    one: 100,
    two: 200,
    three: 300
  })
  const { container } = render(<Breakpoints />)
  expect(container).toMatchSnapshot()
})

test('renderVerticalBreakpoints', () => {
  const Breakpoints = renderVerticalBreakpoints({
    one: 100,
    two: 200,
    three: 300
  })
  const { container } = render(<Breakpoints />)
  expect(container).toMatchSnapshot()
})

test('bodypaint defaults', () => {
  const Breakpoints = renderBreakpoints(HORIZONTAL_BREAKPOINTS)
  const VBreakpoints = renderVerticalBreakpoints(VERTICAL_BREAKPOINTS)
  const { container } = render(
    <>
      <Breakpoints />
      <VBreakpoints />
    </>
  )
  expect(container).toMatchSnapshot()
})

test('renderComponents', () => {
  const Comp = props => `${JSON.stringify(props, null, 2)}`
  const Breakpoints = pipe(
    pointsToDirectionalAttributes('crap'),
    renderComponents(Comp)
  )(HORIZONTAL_BREAKPOINTS)
  const { container } = render(<Breakpoints />)
  expect(container).toMatchSnapshot()
})
