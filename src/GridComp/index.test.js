/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import styled from 'styled-components'
import { css } from 'styled-components';
import { Grid, GridItem } from './';

describe('Grid system', () => {
  test('basic usecase with "col" and gutter', () => {
    const component = (
      <Grid gutter={50}>
        <GridItem col={1/2}>Half</GridItem>
        <GridItem col={1/4}>Quarter</GridItem>
        <GridItem col={1/4}>Quarter</GridItem>
      </Grid>
    )
    let wrapper = renderer.create(component).toJSON()
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.children[0]).toHaveStyleRule('width', '50%')
    expect(wrapper.children[1]).toHaveStyleRule('width', '25%')
    expect(wrapper.children[2]).toHaveStyleRule('width', '25%')
    expect(wrapper).toHaveStyleRule('padding-left', '50px', {
      modifier: '> *',
    })
    expect(wrapper).toHaveStyleRule('margin-left', '-50px')
  })

  test('vertically aligned, reversed, full ', () => {
    const component = (
      <Grid middle rev full />
    )
    let wrapper = renderer.create(component).toJSON()
    expect(wrapper).toHaveStyleRule('vertical-align', 'middle', {
      modifier: '> *',
    })
    expect(wrapper).toHaveStyleRule('direction', 'ltr', {
      modifier: '> *',
    })
    expect(wrapper).toHaveStyleRule('text-align', 'left', {
      modifier: '> *',
    })
    expect(wrapper).toHaveStyleRule('padding-left', '0px', {
      modifier: '> *',
    })
    expect(wrapper).toHaveStyleRule('margin-left', '0px')
  })

  test('media query 100% at phone ', () => {
    const component = (
      <Grid >
        <GridItem col={1/2} media={{ phone: 1}}>Half</GridItem>
      </Grid>
    )
    let wrapper = renderer.create(component).toJSON()
    expect(wrapper.children[0]).toHaveStyleRule('width', '100%', {
      media: '(max-width:48em)'
    })
  })

  test('centered bottom ', () => {
    const component = (
      <Grid center bottom />
    )
    let wrapper = renderer.create(component).toJSON()
    expect(wrapper).toHaveStyleRule('text-align', 'center')
    expect(wrapper).toHaveStyleRule('vertical-align', 'bottom', {
      modifier: '> *',
    })
  })
})
