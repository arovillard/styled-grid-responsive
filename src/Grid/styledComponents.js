import styled from 'styled-components'
import mediaQuery from '../mediaQuery'

const defaultGutter = 20

const getGridHorizontalRules = ({ center }) => center && ' text-align: center;'

const getGridVerticalRules = ({ middle, bottom }) => {
  if (middle) {
    return '> * { vertical-align: middle; }'
  } else if (bottom) {
    return '> * { vertical-align: bottom; }'
  } else return
}

const getGridGutterRules = ({ gutter, full }) => {
  const value = gutter ? gutter : defaultGutter
  if (gutter) {
    return `
  margin-left: ${value * -1}px;
    > * {
      padding-left: ${value}px;
    }
  `
  } else if (full) {
    return `
    margin-left: 0px;
    > * {
      padding-left: 0px;
    }
  `
  } else return
}

const getDirectionRules = ({ rev }) =>
  rev &&
  `
    direction: rtl;
    text-align: left;
    > * {
      direction: ltr;
      text-align: left;
    }
  `

const getGridItemMediaRules = ({ media }) => {
  const rules = []
  Object.keys(media).forEach(function(breakpoint) {
    const columns = media[breakpoint]
    const percent = columns * 100
    rules.push(
      mediaQuery[breakpoint]`
      width: ${percent}%;
    `.join('')
    )
  })
  return rules.join(' ')
}

const getGridItemWidthRules = ({ col }) => {
  const percent = col * 100
  return `width: ${percent}%;`
}

export const Grid = styled.div`
  font-size: 0;
  > * {
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }
  ${props => getGridGutterRules(props)};
  ${props => getGridHorizontalRules(props)};
  ${props => getGridVerticalRules(props)};
  ${props => getDirectionRules(props)};
`

export const GridItem = styled.div`
  ${props => getGridItemWidthRules(props)};
  ${props => getGridItemMediaRules(props)};
`
