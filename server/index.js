
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import express from 'express';

const app = express();

// Colocar como chave ambiente
sgMail.setApiKey("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");

// Definindo a porta em que o servidor ira rodar
app.use(cors());
app.get('/', (req, res) => {
  res.send('Sendgrid server')
})
app.listen(8000, () => console.log('rodando na porta 8000'));

// Enviando a mensagem quando a url é chamada
app.get('/send-email', (req, res) => {
  const {email} = req.query;

  const msg = {
    to: email,
    from: 'vinicius.pachecoof@gmail.com',
    subject: 'Teste',
    html: `
      <p>"Olá, [nome].</p>
      <p>Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas</p>
      <p>Até logo!</p>
    `
  }
  
  sgMail.send(msg).then(() => {
    console.log('E-mail enviado com sucesso.')
  }).catch((error) => {
    console.log(error)
  })
})



