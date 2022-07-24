import { useEffect, useState } from "react";
import Planta from "./Planta";

interface IItens {
  name: string;
  preco: number;
  img: string;
  ordem: number;
}

const Ofertas = () => {
  const [listaPlantas, setListaPlantas] = useState<IItens[]>([]);
  const [listaPlantasFiltradas, setListaPlantasFiltradas] = useState<IItens[]>([]);
  const [precoPlanta, setPrecoPlanta] = useState(0);
  const [ordenarPlanta, setOrdenarPlanta] = useState<'name' | 'preco'>('name');

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw')
      .then((response) => response.json())
      .then((result) => {
        setListaPlantas(result)
        setListaPlantasFiltradas(result)
      })
  }, []);

  function buscarPlantas(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let listaAtulizada;
    
    if (precoPlanta) {
      listaAtulizada = listaPlantas.filter((planta) => planta.preco < precoPlanta) 
    } else {
      listaAtulizada = listaPlantas;
    }
  
    if (ordenarPlanta) {
      listaAtulizada = listaAtulizada.sort((a, b) => {
        return a[ordenarPlanta] > b[ordenarPlanta] ? 1 : -1
      })
    }
    
    setListaPlantasFiltradas(listaAtulizada)
  }

  return (
    <>
      <div className="text-center mt-16 font-bold flex flex-col gap-4">
        <p className="text-gray-400 text-xl">Conheça nossas</p>
        <h1 className="font-bold text-7xl font-elsie">Plantas</h1>
      </div>

      <form action="" className="flex flex-col gap-2" onSubmit={buscarPlantas}>
        <input className="w-80 h-12 px-6 shadow-sm" placeholder="Pesquisar preço de planta" type="number" onChange={(event) => setPrecoPlanta(Number(event.target.value))} />
        <select className="w-80 h-12 px-6" onChange={(event) => setOrdenarPlanta(event.target.value as 'name' | 'preco')}>
          <option value="">Ordenar</option>
          <option value="name">Por nome</option>
          <option value="preco">Por preço</option>
        </select>
        <button type="submit" className="w-48 h-12 bg-yellow-400 text-white text-sm disabled:opacity-50 shadow-md mb-8 rounded-sm">Buscar</button>
      </form>

      <div className="grid grid-cols-3 gap-8">
        {listaPlantasFiltradas?.map((item, index) => { return <Planta key={index} {...item} /> })}
      </div>
    </>
  )
}

export default Ofertas;