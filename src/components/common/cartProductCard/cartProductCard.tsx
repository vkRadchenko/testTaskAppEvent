import { useAppDispatch } from '../../../hooks/redux'
import {
  ProductCart,
  addProductToCart,
  removeProductCart,
} from '../../../store/cartSlice'
import Button from '../../btn/button'

const CartProductCard: React.FC<ProductCart> = ({ name, price, score, id }) => {
  const dispatch = useAppDispatch()

  const handleIncrCartItem = () => {
    dispatch(addProductToCart({ name, price, id }))
  }
  const handleDesctCartItem = () => {
    dispatch(removeProductCart(id))
  }
  return (
    <div className="cart__item">
      <div className="cart__item_about">
        <p className="cart__item_title">{name}</p>
      </div>
      <div className="cart__item_blockPrice">
        <div>
          <span className="cart__item_price">{price} руб </span>
        </div>
        <div className="cart__item_blockButton">
          <Button
            onClick={handleIncrCartItem}
            styleClass="cart__item_btn"
            type="button"
            widtchSize={30}
          >
            +
          </Button>
          <div>{score}</div>
          <Button
            onClick={handleDesctCartItem}
            styleClass="cart__item_btn"
            type="button"
            widtchSize={30}
          >
            -
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartProductCard
