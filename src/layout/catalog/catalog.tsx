import ProductCard from '../../components/common/productCard/productCard'
import { useAppSelector } from '../../hooks/redux'
import { getProduct } from '../../store/productSlice'

const Catalog: React.FC = () => {
  const product = useAppSelector(getProduct())

  return (
    <div className="container">
      <div className="catalog">
        <h1 className="catalog__title">Каталог товаров</h1>
        <div className="catalog__items">
          {product?.map((prod) => (
            <ProductCard
              id={prod.id}
              key={prod.id}
              image={prod.image}
              name={prod.name}
              price={prod.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalog
