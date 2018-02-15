# styled-grid-responsive
Everything needed to make your `styled-components` 💅 React Application responsive.
The first utility is a helper to be used inside your styled components to write media query calls.
The second tool is a responsive, fluid, deeply nestable, (non-flexbox) grid system component.

# Installation:
`npm install styled-grid-responsive`

# Breakpoints:
These are the predefined breakpoints:

````
 defaultDevices: {
   phone: {
     max: 768
   },
   tablet: {
     min: 768,
     max: 1160
   },
   desktop: {
     min: 1160,
     max: 1400
   },
   large: {
     min: 1400
   }
 }
````

# Grid usage:
````javascript
  import { Grid, GridItem } from 'styled-grid-responsive'

  <Grid>
    <GridItem col={1/2}> <YourComponent /> </GridItem>
    <GridItem col={1/2}> <YourOtherComponent /> </GridItem>
  </Grid>

````
# Grid Options:
  * `gutter`: integer for the desired gutter value (default: 20)
  * `full`: bool to have a gutterless grid
  * `middle`: bool to vertically align the grid items middle (default: false, vertical-align: top)
  * `bottom`: bool to vertically align the grid items bottom (default: false, vertical-align: top)
  * `center`: bool to horizontally align the grid items center (default: false, text-align: center)
  * `rev`: bool to reverse the order of the grid items (default: false)

# GridItem Options:
  * `col`: any fraction to represent the default column width, this is overridden by the media value specified at each breakpoint
  * `media`: object with the grid item rules for each of the breakpoint

# Gotcha
 * For the gutters to work properly, your application needs to be set to use `box-sizing: border-box;`
 * https://css-tricks.com/box-sizing/

# More Grid Examples:
````javascript
  <Grid gutter={50}>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 1</p>
    </GridItem>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 2</p>
    </GridItem>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 3</p>
    </GridItem>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 4</p>
    </GridItem>
  </Grid>
  <Grid full rev>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 1</p>
    </GridItem>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 2</p>
    </GridItem>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 3</p>
    </GridItem>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 4</p>
    </GridItem>
  </Grid>
  <Grid middle center>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 1</p>
    </GridItem>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <h1>Item 2</h1>
    </GridItem>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 3</p>
    </GridItem>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 4</p>
    </GridItem>
  </Grid>
  <Grid bottom>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 1</p>
    </GridItem>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <h1>Item 2</h1>
    </GridItem>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 3</p>
    </GridItem>
    <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
      <p>Item 4</p>
    </GridItem>
  </Grid>
````

## mediaQuery Usage:
The order in which we declare these matter since they share a starting and ending point,
the best practice would be to declare the media queries in descending order (unless that's not the desired behaviour)
````javascript
  import styled from 'styled-components'
  import { mediaQuery } from 'styled-grid-responsive'

  export const SuperComponent = styled.div`
    background-color: yellow;
    ${mediaQuery.desktop`
      background-color: red;
    `}
    ${mediaQuery.tablet`
      background-color: blue;
    `}
    ${mediaQuery.phone`
      background-color: green;
    `}
  `

````

## Todo:
Figure out the best patters so the end user can pass an object with the breakpoints definition instead of having to use the pre-defined ones.
