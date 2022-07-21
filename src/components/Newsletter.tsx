const Newsletter = () => {
  return (
    <div className="flex gap-10">
      <div className="max-w-lg mt-36 flex flex-col gap-4">
        <p className="text-gray-500 text-2xl">Sua casa com as</p>
        <h1 className="font-bold text-[82px] leading-[94px] font-elsie">melhores plantas</h1>
        <p className="text-gray-500">Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>

        <div className="flex flex-row">
          <input className="w-full h-16 px-6 shadow-sm" placeholder="Insira seu e-mail" type="text" />
          <button className="w-72 bg-yellow-400 text-white text-sm">Assinar newslatter</button>
        </div>
      </div>

      <img src="/assets/imagem-planta.png" alt="imagem de uma planta" className="mt-7 w-[450px]"/>
    </div>

  )
}

export default Newsletter;