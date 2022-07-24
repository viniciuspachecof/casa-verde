interface IProp {
  name: string;
  preco: number;
  img: string;
  ordem: number;
}

const Planta = (item: IProp) => {
  return (
    <div className="flex bg-white shadow-xl">
      <img className="w-[160px] h-[175px]" src={`/assets/${item.img}.png`} alt="produto 1" />
      <div className="mt-5">
        <p className="font-bold font-elsie text-3xl">{item.name}</p>
        <p className="text-gray-500 font-medium">{`R$ ${item.preco.toFixed(2)}`}</p>
        <p className="text-yellow-500 mt-4 font-bold">{'Comprar ->'}</p>
      </div>
    </div>
  )
}

export default Planta;