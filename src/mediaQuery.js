/*eslint-disable */
import { css } from 'styled-components'

// define all devices by setting min and max where applicable, for devices where
// only min is set, then the media query rule will be 'min-width'. When only defining
// max, then the media query rule will be 'max-width'. If both are defined,
// then the media query rule will be 'max-width and min-width'.

const defaultDevices = {
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

// iterate through the sizes and create a media template
const mediaQuery = Object.keys(defaultDevices).reduce((accumulator, obj) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSizeMin = defaultDevices[obj].min / 16
  const emSizeMax = defaultDevices[obj].max / 16
  accumulator[obj] = (...args) => {
    if (emSizeMin && emSizeMax) {
      return css`
        @media (max-width: ${emSizeMax}em) and (min-width: ${emSizeMin}em) {
          ${css(...args)};
        }
      `
    } else if (!emSizeMin && emSizeMax) {
      return css`
        @media (max-width: ${emSizeMax}em) {
          ${css(...args)};
        }
      `
    } else if (emSizeMin && !emSizeMax) {
      return css`
        @media (min-width: ${emSizeMin}em) {
          ${css(...args)};
        }
      `
    }
  }
  return accumulator
}, {})

export default mediaQuery
