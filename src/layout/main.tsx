import Header from '../components/header/header'
import MainImage from '../assets/img/4409781 1.svg?react'
const Main = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main__img">
          <MainImage className="mainImage" />
        </div>
      </div>
    </>
  )
}

export default Main
