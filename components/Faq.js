import react from 'react'

export default function Faq() {
	return (
		<div id="faq" className="space-y-4 max-w-4xl mx-auto mt-20 mb-20">
		  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
		    <summary
		      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
		    >
		      <h2 className="font-medium">
		        Natureza do Projeto
		      </h2>

		      <svg
		        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
		        xmlns="http://www.w3.org/2000/svg"
		        fill="none"
		        viewBox="0 0 24 24"
		        stroke="currentColor"
		      >
		        <path
		          strokeLinecap="round"
		          strokeLinejoin="round"
		          strokeWidth="2"
		          d="M19 9l-7 7-7-7"
		        />
		      </svg>
		    </summary>

		    <p className="mt-4 px-4 leading-relaxed text-gray-700">
		      É importante esclarecer que o relambra.ai não é um projeto real, 
		      mas sim uma criação concebida exclusivamente para fins de portfólio e demonstração. 
		      Não se destina a uso comercial.
		    </p>
		  </details>

		  <details className="group [&_summary::-webkit-details-marker]:hidden">
		    <summary
		      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
		    >
		      <h2 className="font-medium">
		        Quem está por trás?
		      </h2>

		      <svg
		        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
		        xmlns="http://www.w3.org/2000/svg"
		        fill="none"
		        viewBox="0 0 24 24"
		        stroke="currentColor"
		      >
		        <path
		          strokeLinecap="round"
		          strokeLinejoin="round"
		          strokeWidth="2"
		          d="M19 9l-7 7-7-7"
		        />
		      </svg>
		    </summary>

		    <p className="mt-4 px-4 leading-relaxed text-gray-700">
		      Sou o Felipe Ferreira, um apaixonado por desenvolvimento front-end e o criador do relembra.ai. 
		      Como criador, busco constantemente aprimorar a experiência dos usuários, tornando o processo de memorização mais eficaz e agradável. 
		      Se você deseja saber mais sobre minha trajetória e explorar meu trabalho, convido você a visitar meu perfil no GitHub. 
		      Lá, projetos anteriores e a evolução contínua do relembra.ai.
		    </p>
		  </details>

		  <details className="group [&_summary::-webkit-details-marker]:hidden">
		    <summary
		      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
		    >
		      <h2 className="font-medium">
		        Entrar em contato
		      </h2>

		      <svg
		        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
		        xmlns="http://www.w3.org/2000/svg"
		        fill="none"
		        viewBox="0 0 24 24"
		        stroke="currentColor"
		      >
		        <path
		          strokeLinecap="round"
		          strokeLinejoin="round"
		          strokeWidth="2"
		          d="M19 9l-7 7-7-7"
		        />
		      </svg>
		    </summary>

		    <p className="mt-4 px-4 leading-relaxed text-gray-700">
		      Fique à vontade para entrar em contato através do meu e-mail de contato, 
		      explorar meus projetos e contribuições no GitHub ou conectar-se comigo no LinkedIn.
		      <p className="mt-2">Email: felipeferreirasilva.dev@gmail.com</p>
		      <p>GitHub: github.com/FelipeFerreiraSS</p>
		    </p>
		  </details>
		</div>
	)
}