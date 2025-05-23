import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart, LinkItem, Links } from './styles'
import logo from '../../Assets/images/logo vetor.svg'
import Carrinho from '../../Assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to={'./'}>
        <img src={logo} alt="" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={Carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
