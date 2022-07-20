import { Logo } from "./Logo";

const Menu = () => {
  return (
    <nav className="w-full flex justify-between items-center py-5">
      <Logo />
      <ul className="flex gap-5 pt-4 font-medium">
        <li>Como fazer</li>
        <li>/</li>
        <li>Ofertas</li>
        <li>/</li>
        <li>Depoimentos</li>
        <li>/</li>
        <li>Vídeos</li>
        <li>/</li>
        <li>Meu carrinho</li>
      </ul>
    </nav>)
}

export default Menu;