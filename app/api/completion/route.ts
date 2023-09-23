import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);
 
export const runtime = 'edge';
 
export async function POST(req ) {
  const { prompt } = await req.json();
 
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    stream: true,
    temperature: 0.6,
    prompt: `Gere 3 palavras que sejam muito parecidas, 
      com um contexto semelhante e também sejam conhecidas 
      utilizando a palavra que vou te enviar. 
      Certifique-se de que essas palavras sejam reais. 
      A intenção é confundir o usuário. 
      Retorne uma lista com as 4 palavras: a palavra que eu enviar e as outras 3 que você gerar, 
      variando a ordem que elas estão.

      Exemplo:
      Palavra enviada: gato

      Resposta esperada: "rato", "gato", "pato", "cachorro"

      Retorne apenas a lista com as 4 palavras entre aspas, como na forma esperada, nada mais. 

      Palavra enviada: ${prompt}
    `,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}