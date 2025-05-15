import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Cores } from '../../styles'
import { Props } from '.'

export const BotãoContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? Cores.verde : Cores.branca)};
  color: ${Cores.branca};
  background-color: ${(props) =>
    props.variant === 'primary' ? Cores.verde : 'trasparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`

export const BotãoLink = styled(Link)`
  border: 2px solid ${Cores.branca};
  color: ${Cores.branca};
  background-color: trasnparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
