import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'
import { formataPreço } from '../Products.List'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.desconto && (
            <span>De {formataPreço(game.prices.old)} </span>
          )}
          {game.prices.desconto && (
            <>Por {formataPreço(game.prices.desconto)}</>
          )}
        </p>
        {game.prices.desconto && (
          <Button
            type={'button'}
            title={'Clique aqui para adicionar este jogo ao carrinho'}
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
