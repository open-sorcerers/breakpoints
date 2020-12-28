import React from 'react'
import styled from '@emotion/styled'
import { curry, map, toPairs, pipe, propOr } from 'ramda'

export const Breakpoint = styled.div`
  position: fixed;
  height: 100vh;
  width: 1rem;
  z-index: 100;
  top: 0;
  left: ${propOr(0, 'left')};
  border-left: 1px dashed lime;
  opacity: ${propOr(0.1, 'opacity')};
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
    margin-left: -6.75rem;
    margin-top: 2rem;
  }
`

export const VBreakpoint = styled.div`
  position: fixed;
  height: 1rem;
  width: 100vw;
  z-index: 100;
  top: ${propOr(0, 'top')};
  left: 0;
  border-top: 1px dashed lime;
  opacity: ${propOr(0.1, 'opacity')};
  cursor: crosshair;
  &:hover {
    opacity: 1;
  }
  &::before {
    position: absolute;
    background-color: lime;
    color: black;
    content: '${propOr('?', 'label')}';
    padding: 0 3rem 0 1rem;
    width: 3rem;
    left: 0;
  }
`

Breakpoint.displayName = 'OpenSorcerersBreakpoint'

const renderComponents = curry((vertical, kids) => {
  function Breakpoints() {
    const Point = vertical ? VBreakpoint : Breakpoint
    return (
      <>
        {map(
          bb => (
            <Point key={bb.label} {...bb} />
          ),
          kids
        )}
      </>
    )
  }
  return Breakpoints
})

export const pointsToDirectionalAttributes = curry((dimension, ob) =>
  pipe(
    toPairs,
    map(([key, px]) => ({ [dimension]: px, label: key }))
  )(ob)
)

export const renderDirectionalBreakpoints = curry((vertical, x) =>
  pipe(
    pointsToDirectionalAttributes(vertical ? 'top' : 'left'),
    renderComponents(vertical)
  )(x)
)

export const renderBreakpoints = renderDirectionalBreakpoints(false)
export const renderVerticalBreakpoints = renderDirectionalBreakpoints(
  true
)