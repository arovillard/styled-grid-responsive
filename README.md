# styled-grid-responsive
A responsive, fluid, deeply nestable, non-flexbox grid system built with `styled-components` 💅.
On version 2, the `mediaQuery` utility was removed and made into it's own package, you can find it [here](https://www.npmjs.com/package/styled-media-responsive)

# Installation:
`npm install styled-grid-responsive`

# Breakpoints:
you can use the default breakpoints or set your own through the theme provider.

Default breakpoints:

 ````javascript
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

# Setting you own breakpoints:

````javascript
  import React from 'react'
  import { ThemeProvider } from 'styled-components'

  export const breakpoints = {
    smallPhone: {
      max: 576
    },
    mediumPhone: {
      min: 576,
      max: 768
    },
    tablet: {
      min: 768,
      max: 992
    },
    desktop: {
      min: 992,
      max: 1200
    },
    reallyLarge: {
      min: 1200,
    }
  }

  const theme = {
    breakpoints
  }

  <ThemeProvider theme={theme}>
    <Heading>Hello World!</Heading>
  </ThemeProvider>
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

 ````css
  *, *:before, *:after {
    box-sizing: border-box;
  }
````

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
