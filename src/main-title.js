import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const MainTitle = ({ children = '', classes }) => {
  const [training, focus] = separateFocus(children)
  return (
    <Title>
      <Block>{training}</Block>
      {focus && <Block>Foco: {firstUpper(focus)}</Block>}
    </Title>
  )
}

const Block = styled.span`
  display: block;
`

const Title = styled(Typography).attrs({
  variant: 'h6',
  component: 'h2'
})`
  && {
    margin: 30px 0;
  }
`

function firstUpper (string) {
  const lower = string.toLowerCase()
  return `${lower[0].toUpperCase()}${lower.slice(1)}`
}

function separateFocus (string) {
  return string.split(/\sfoco\s/gi)
}


export default MainTitle
