import React from 'react'
import PropTypes from 'prop-types'
import { keyframes } from 'styled-components'
import Box from './Box'
import theme from './theme'

const progress = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
    opacity:0;
  }
  100% {
    transform: translate3d(100%, 0, 0);
    opacity:1;
  }
`

const Skelaton = Box.extend`
  position: relative;
  overflow: hidden;
  height: ${props => props.height + 'px'};
  background: ${props => props.theme.colors.lightGray};
  box-shadow: ${props => props.theme.boxShadows[0]};
  border-radius: ${props => props.theme.radius};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.lightGray},
      #ebeef1,
      ${props => props.theme.colors.lightGray}
    );
    animation: ${progress} 1s ease-in-out infinite;
  }
`

Skelaton.displayName = 'Skelaton'

Skelaton.propTypes = {
  theme: PropTypes.object
}

Skelaton.defaultProps = {
  height: 200,
  theme: theme
}

export default Skelaton
