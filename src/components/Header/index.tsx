import { HeaderBar, LinkCart, LinkItem, Links } from './styles'

import logo from '../../Assets/images/logo vetor.svg'
import Carrinho from '../../Assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
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
