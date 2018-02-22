import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Skelaton, Flex } from '../src'

storiesOf('Skelaton', module).add('Default', () => (
  <Flex wrap>
    <Box w={1 / 3}>
      <Skelaton height={350} m={2} />
    </Box>
    <Box w={2 / 3}>
      <Skelaton m={2} />
      <Skelaton m={2} />
      <Skelaton m={2} />
      <Flex wrap>
        <Box w={1 / 2}>
          {' '}
          <Skelaton m={2} />
        </Box>
        <Box w={1 / 2}>
          {' '}
          <Skelaton m={2} />
        </Box>
      </Flex>
      <Skelaton m={2} />
    </Box>
  </Flex>
))
