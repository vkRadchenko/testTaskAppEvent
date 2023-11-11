import { Link } from 'react-router-dom'
import CartImg from '../../assets/img/cart.svg?react'
import Button from '../btn/button'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container ">
        <div className="header__section">
          <div className="header__logoBlock">
            <Link to="/">
              <h1 className="header__h1">
                Event <br /> Shop
              </h1>
            </Link>
            <Link to="/catalog">
              <Button styleClass="header__btn_catalog" type="button">
                Каталог
              </Button>
            </Link>
          </div>

          <div className="header__cartBlock">
            <span className="header__cart_counter">1</span>
            <Link to="/cart">
              <div className="header__cart_blockIcon">
                <CartImg className="cart__icon" width="40" height="40" />
                <span className="cart__text">Корзина</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
