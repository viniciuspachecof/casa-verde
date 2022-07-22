import { useState } from "react";
import validator from 'validator'

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [emailValido, setEmailValido] = useState(false);

  function adicionarEValidarEmail(event: React.ChangeEvent<HTMLInputElement>) {
    const email = event.target.value;

    setEmail(email);
    setEmailValido(validator.isEmail(email));
  }

  return (
    <div className="flex gap-10">
      <div className="max-w-lg mt-36 flex flex-col gap-4">
        <p className="text-gray-500 text-2xl">Sua casa com as</p>
        <h1 className="font-bold text-[82px] leading-[94px] font-elsie">melhores plantas</h1>
        <p className="text-gray-500">Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>

        <div className="flex flex-row">
          <input onChange={(event) => adicionarEValidarEmail(event)} className="w-full h-16 px-6 shadow-sm" placeholder="Insira seu e-mail" type="email" />
          <button disabled={!emailValido} className="w-72 bg-yellow-400 text-white text-sm disabled:opacity-50">Assinar newslatter</button>
        </div>
      </div>

      <img src="/assets/imagem-planta.png" alt="imagem de uma planta" className="mt-7 w-[450px]"/>
    </div>

  )
}

export default Newsletter;