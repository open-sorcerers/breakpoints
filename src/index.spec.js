import React from 'react'
import { HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS } from 'bodypaint'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {
  renderBreakpoints,
  renderVerticalBreakpoints
} from './index'

test('renderBreakpoints', () => {
  const Breakpoints = renderBreakpoints({
    one: 100,
    two: 200,
    three: 300
  })
  const {container}= render(<Breakpoints />)
  expect(container).toMatchSnapshot()
})

test('renderVerticalBreakpoints', () => {
  const Breakpoints = renderVerticalBreakpoints({
    one: 100,
    two: 200,
    three: 300
  })
  const {container}= render(<Breakpoints />)
  expect(container).toMatchSnapshot()
})

test('bodypaint defaults', () => {
  const Breakpoints = renderBreakpoints(HORIZONTAL_BREAKPOINTS)
  const VBreakpoints = renderVerticalBreakpoints(VERTICAL_BREAKPOINTS)
  const {container}= render(
    <>
    <Breakpoints />
    <VBreakpoints />
    </>
  )
  expect(container).toMatchSnapshot()
})
