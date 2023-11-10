import CartImg from '../../assets/img/cart.svg?react'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header__section">
        <div className="header__logoBlock">
          <h1 className="header__h1">
            Event <br /> Shop
          </h1>
          <button className="header__btn_catalog">Каталог</button>
        </div>

        <div className="header__cartBlock">
          <span className="header__cart_counter">1</span>
          <div className="header__cart_blockIcon">
            <CartImg className="cart__icon" width="40" height="40" />
            <span className="cart__text">Корзина</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
