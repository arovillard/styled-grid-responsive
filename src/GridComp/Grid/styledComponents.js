import styled from 'styled-components'
import mediaQuery from 'styled-media-responsive'

const defaultGutter = 20
const defaultFontSize = 16

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
  if (full) {
    return `
    margin-left: 0px;
    > * {
      padding-left: 0px;
    }
  `
  } else {
    return `
    margin-left: ${value * -1}px;
    > * {
      padding-left: ${value}px;
    }
  `
  }
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

const getGridItemMediaRules = ({ media, theme }) => {
  const rules = []
  const mq = mediaQuery(theme.breakpoints)
  media && Object.keys(media).forEach(function(breakpoint) {
    if(mq[breakpoint]) {
      const columns = media[breakpoint]
      const percent = columns * 100
      rules.push(mq[breakpoint]`
        width: ${percent}%;
      `.join(''))
    } else {
      console.log(`breakpoint "${breakpoint}" doesn't exist or it hasn't been defined on your theme`)
    }
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
    font-size: ${defaultFontSize}px;
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
