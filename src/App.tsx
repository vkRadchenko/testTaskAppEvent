import { Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import Cart from './layout/cart'
import Catalog from './layout/catalog'
import Main from './layout/main'
import NotFoundPage from './layout/404/notFoundPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
