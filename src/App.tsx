import { Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import Cart from './layout/cart'
import Catalog from './layout/catalog'
import MainLayout from './layout/mainLayout'
import NotFoundPage from './layout/404/notFoundPage'
import { useAppDispatch } from './hooks/redux'
import { loadProductList } from './store/productSlice'
import { useEffect } from 'react'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadProductList())
  }, [dispatch])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
