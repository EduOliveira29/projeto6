import { useEffect, useState } from 'react'
import { Imagem, Titulo, Precos } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { formataPreço } from '../Products.List'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container ">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreço(game.prices.old)}</span> <br />
            por apenas {formataPreço(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/produto${game.id}`}
          title="Clique para Aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
export default Banner
