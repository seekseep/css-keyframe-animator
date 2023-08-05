"use client"

import { Grid } from '@aws-amplify/ui-react'

import Preview from './Preview'
import Properties from './Properties'
import Provider from './Provider'
import Code from './Code'

export default function CSSKeyFrameAnimator () {
  return (
    <Provider>
      <Grid
        position="fixed" top="0px" left="0px" right="0px" bottom="0px"
        templateColumns="30rem 1fr 30rem"
        templateRows="1fr">
        <Properties
          columnStart={1}
          columnEnd={2}
          rowStart={1}
          rowEnd={-1} />
        <Preview
          columnStart={2}
          columnEnd={3}
          rowStart={1}
          rowEnd={-1} />
        <Code
          columnStart={3}
          columnEnd={4}
          rowStart={1}
          rowEnd={-1} />
      </Grid>
    </Provider>
  )
}
