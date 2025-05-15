import { BotãoContainer, BotãoLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onclick?: () => void
  children: string
  variant?: 'primary' | 'secundary'
}

const Button = ({
  type,
  title,
  to,
  onclick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <BotãoContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onclick}
      >
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
