import styled from 'styled-components'

import { Cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.verde};
  color: ${Cores.branca};
  font-size: ${(Props) => (Props.size === 'big' ? '16px' : '10px')};
  font-weigth: bold;
  padding: ${(Props) => (Props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  display: inline-block;
`
