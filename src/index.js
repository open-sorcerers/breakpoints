import React from 'react'
import styled from '@emotion/styled'
import { curry, map, toPairs, pipe, propOr } from 'ramda'

export const Breakpoint = styled.div`
  position: fixed;
  height: 100vh;
  width: 1rem;
  z-index: 100;
  top: ${propOr(0, 'top')};
  left: ${propOr(0, 'left')};
  border-left: 1px dashed lime;
  opacity: 0.1;
  cursor: crosshair;
  &:hover {
    opacity: 1;
  }
  &::before {
    position: absolute;
    background-color: lime;
    color: black;
    content: '${propOr('?', 'label')}';
    transform: rotate(-90deg);
    padding: 0 3rem 0 1rem;
    width: 10rem;
    margin-left: -6.25rem;
    margin-top: 2rem;
  }
`
Breakpoint.displayName = 'OpenSorcerersBreakpoint'

const renderComponent = kids => {
  function Breakpoints() {
    return (
      <>
        {map(
          bb => (
            <Breakpoint key={bb.label} {...bb} />
          ),
          kids
        )}
      </>
    )
  }
  return Breakpoints
}

export const renderDirectionalBreakpoints = curry((vertical, x) =>
  pipe(
    toPairs,
    map(([key, px]) => {
      const dimension = vertical ? 'top' : 'left'
      return { [dimension]: px, label: key }
    }),
    renderComponent
  )(x)
)

export const renderBreakpoints = renderDirectionalBreakpoints(false)
export const renderHorizontalBreakpoints = renderDirectionalBreakpoints(
  true
)
