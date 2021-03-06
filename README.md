# @open-sorcerers/breakpoints

## Simple React Breakpoints

A simple way to add breakpoints to a page (for debugging porpoises). Pairs well with [bodypaint](//npmjs.com/package/bodypaint).

### Installation

```
yarn add @open-sorcerers/breakpoints -S
```
or
```
npm i @open-sorcerers/breakpoints -S
```

### Usage

```js
import {asRem, HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS} from 'bodypaint'
import {
  renderBreakpoints,
  renderVerticalBreakpoints
} from '@open-sorcerers/breakpoints'

const POINTS = asRem(16, HORIZONTAL_BREAKPOINTS)
const Breakpoints = renderBreakpoints(POINTS)

const VPOINTS = asRem(16, VERTICAL_BREAKPOINTS)
const VBreakpoints = renderVerticalBreakpoints(VPOINTS)

const App = () => (
  <>
    <Breakpoints />
    <VBreakpoints />
  </>
)

export default App
```

### Advanced usage

If you need to supplant your own components, it's easy:

```js
import { pipe } from 'ramda'
import { HORIZONTAL_BREAKPOINTS } from 'bodypaint'
import { renderCustomComponents } from '@open-sorcerers/breakpoints'

const MyCustomBreakpoint = props => `${JSON.stringify(props, null, 2)}`
// we specify "left" here as the directional attribute of the data
// use "top" if you want to render vertical components instead
const renderer = renderCustomComponents('left', MyCustomBreakpoint)
const Breakpoints = renderer(HORIZONTAL_BREAKPOINTS)
```
