import Banner from '../../components/Banner'
import ProductList from '../../components/Products.List'
import Game from '../../models/game'

import Resident from '../../Assets/images/ResidentEvil.png'
import Diablo from '../../Assets/images/diablo.png'
import Fifa from '../../Assets/images/fifa.png'
import StreetFighter from '../../Assets/images/street figther.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror',
    infos: ['10%', 'R$ 199,90'],
    image: Resident
  },
  {
    id: 2,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror',
    infos: ['5%', 'R$ 299,90'],
    image: Resident
  },
  {
    id: 3,
    title: 'Fifa 2024',
    category: 'Esporte',
    system: 'Windows',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    infos: ['10%', 'R$ 199,90'],
    image: Fifa
  },
  {
    id: 4,
    title: 'Fifa 2024',
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    infos: ['10%', 'R$ 199,90'],
    image: Fifa
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Diablo 4',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['19/09'],
    image: Diablo
  },
  {
    id: 6,
    title: 'Diablo 4',
    category: 'RPG',
    system: 'PS5',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['19/09'],
    image: Diablo
  },
  {
    id: 7,
    title: 'Street Fighter 6',
    category: 'Luta',
    system: 'Windows',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    infos: ['19/09'],
    image: StreetFighter
  },
  {
    id: 8,
    title: 'Street Fighter 6',
    category: 'Luta',
    system: 'PS5',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    infos: ['19/09'],
    image: StreetFighter
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title={'Promoções'} background={'gray'} />
    <ProductList games={emBreve} title={'Em breve'} background={'black'} />
  </>
)

export default Home
