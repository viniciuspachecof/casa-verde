import classNames from "classnames";
import { useState } from "react";
import validator from 'validator';
import styles from './Newsletter.module.scss';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [emailValido, setEmailValido] = useState(false);

  function validarEmail(event: React.ChangeEvent<HTMLInputElement>) {
    const email = event.target.value;

    setEmail(email);
    setEmailValido(validator.isEmail(email));
  }

  function enviarFormulario(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`);

    fetch(`http://127.0.0.1:8000/send-email?email=${email}`).catch((error) => console.log(error));

    setEmail('');
    setEmailValido(false);
  }

  return (
    <>
      <div className="flex gap-10">
        <div className="max-w-lg mt-36 flex flex-col gap-4">
          <p className="text-gray-400 text-xl">Sua casa com as</p>
          <h1 className="font-bold text-[82px] leading-[94px] font-elsie">melhores plantas</h1>
          <p className="text-gray-400">Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>

          <form method="post" onSubmit={enviarFormulario} className="flex flex-row">
            <input value={email} onChange={(event) => validarEmail(event)} className="w-full h-16 px-6 shadow-sm" placeholder="Insira seu e-mail" type="email" />
            <button type="submit" disabled={!emailValido} className="w-72 bg-yellow-400 text-white text-sm disabled:opacity-50 shadow-md">Assinar newsletter</button>
          </form>
        </div>
        <img src="/assets/imagem-planta.png" alt="imagem de uma planta" className="mt-7 w-[450px]" />

      </div>
      <div className="mx-20 bg-white shadow-xl flex flex-row">
        <img src="/assets/imagem-planta-2.png" alt="imagem de uma planta" className="w-[500px]"/>
        <div className="flex flex-col gap-3 mt-11 ml-9">
          <p className="text-gray-400 text-xl">Como conseguir </p>
          <p className="font-elsie font-bold text-4xl">minha planta</p>

          <ul className={classNames(
            'text-xl leading-[70px] ml-12',
            {
              [styles.lista]: true
            }
          )}>
            <li className="text-gray-400">Escolha suas plantas</li>
            <li className="text-gray-400">Faça seu pedido</li>
            <li className="text-gray-400">Aguarde na sua casa</li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default Newsletter;