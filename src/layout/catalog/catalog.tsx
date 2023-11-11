import Button from '../../components/btn/button'

const Catalog: React.FC = () => {
  return (
    <div className="container">
      <div className="catalog">
        <h1 className="catalog__title">Каталог товаров</h1>
        <div className="catalog__items">
          <div className="catalog__item">
            <div className="">
              <img className="catalog__item_img " src="" alt="" />
            </div>
            <div className="catalog__item_blockPrice">
              <span className="catalog__item_price">1790</span>
            </div>
            <p className="catalog__item_title">Браслет Xiaomi Mi Band 4</p>
            <Button styleClass="catalog__item_btn" type="button">
              Добавить в корзину
            </Button>
          </div>
          <div className="catalog__item">
            <div className="">
              <img className="catalog__item_img " src="" alt="" />
            </div>
            <div className="catalog__item_blockPrice">
              <span className="catalog__item_price">1790</span>
            </div>
            <p className="catalog__item_title">Браслет Xiaomi Mi Band 4</p>
            <Button styleClass="catalog__item_btn" type="button">
              Добавить в корзину
            </Button>
          </div>
          <div className="catalog__item">
            <div className="">
              <img className="catalog__item_img " src="" alt="" />
            </div>
            <div className="catalog__item_blockPrice">
              <span className="catalog__item_price">1790</span>
            </div>
            <p className="catalog__item_title">Браслет Xiaomi Mi Band 4</p>
            <Button styleClass="catalog__item_btn" type="button">
              Добавить в корзину
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog
