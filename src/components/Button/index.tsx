import { BotãoContainer, BotãoLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onclick?: () => void
  children: string
}

const Button = ({ type, title, to, onclick, children }: Props) => {
  if (type === 'button') {
    return (
      <BotãoContainer type="button" title={title} onClick={onclick}>
        {children}
      </BotãoContainer>
    )
  }
  return (
    <BotãoLink title={title} to={to as string}>
      {children}
    </BotãoLink>
  )
}

export default Button
