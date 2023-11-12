import Button from '../../btn/button'
import { ProductInterface } from '../../../store/productSlice'
import { useAppDispatch } from '../../../hooks/redux'
import { addProductToCart } from '../../../store/cartSlice'

const ProductCard: React.FC<ProductInterface> = ({
  image,
  name,
  price,
  id,
}) => {
  const dispatch = useAppDispatch()

  const handleChange = () => {
    dispatch(addProductToCart({ image, name, price, id }))
  }
  return (
    <div className="catalog__item">
      <div className="catalog__imgBlock">
        <img className="catalog__item_img" src={image} alt="" />
      </div>

      <div className="catalog__item_about">
        <div className="catalog__item_blockPrice">
          <span className="catalog__item_price">{price} руб</span>
        </div>
        <p className="catalog__item_title">{name}</p>
      </div>
      <Button
        onClick={handleChange}
        styleClass="catalog__item_btn"
        type="button"
      >
        Добавить в корзину
      </Button>
    </div>
  )
}

export default ProductCard
