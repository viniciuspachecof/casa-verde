import Menu from "./components/Menu"
import Newsletter from "./components/Newsletter/Newsletter"
import Ofertas from "./components/Ofertas"

function App() {

  return (
    <>
      <Menu />
      <Newsletter />
      <Ofertas />
      <img src="/assets/vector.png" alt="vector" className="absolute z-[-1] right-0 top-0"/>
    </>
  )
}

export default App
