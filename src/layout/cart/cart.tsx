import CartProductCard from '../../components/common/cartProductCard/cartProductCard'
import { useAppSelector } from '../../hooks/redux'
import { getCart, getTotalPrice } from '../../store/cartSlice'

const Cart: React.FC = () => {
  const cart = useAppSelector(getCart())
  const totalPrice = useAppSelector(getTotalPrice())

  return (
    <div className="container">
      <div className="cart">
        <h1 className="cart__title">Корзина</h1>
        {cart.length === 0 ? (
          <div>
            <span>Корзина пуста</span>
          </div>
        ) : (
          <>
            <div className="cart__items">
              {cart?.map((prod) => (
                <CartProductCard key={prod.id} {...prod} />
              ))}
            </div>
            <div className="cart__totalPrice">
              <p className="cart__totalPrice_title">
                Общая сумма покупки:
                <span className="cart__totalPrice_price">{totalPrice} руб</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
