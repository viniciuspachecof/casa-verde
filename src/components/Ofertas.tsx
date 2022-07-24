import { useEffect, useState } from "react";
import Planta from "./Planta";

interface IItens {
  name: string;
  preco: number;
  img: string;
  ordem: number;
}

const Ofertas = () => {
  const [listaItens, setListaItens] = useState<IItens[]>([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw')
      .then((response) => response.json())
      .then((result) => {
        setListaItens(result)
      })
  }, []);

  return (
    <>
      <div className="text-center mt-16 font-bold flex flex-col gap-4">
        <p className="text-gray-400 text-xl">Conheça nossas</p>
        <h1 className="font-bold text-7xl font-elsie">Ofertas</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {listaItens.map((item, index) => <Planta {...item}/>)}
      </div>
    </>
  )
}

export default Ofertas;