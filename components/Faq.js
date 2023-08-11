import react from 'react'

export default function Faq() {
	return (
		<div id="faq" className="space-y-4 max-w-4xl mx-auto mt-20 mb-20">
		  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
		    <summary
		      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-200 p-4 text-gray-900"
		    >
		      <h2 className="font-medium">
		        O que é o relembra.ai?
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
		      O relembra.ai é uma representação virtual e fictícia de um projeto desenvolvido estritamente 
		      com o propósito de servir como parte de um portfólio e para fins de demonstração. 
		      Ele não é um projeto operacional ou funcional no sentido tradicional, em vez disso, é uma 
		      criação conceitual destinada a exibir habilidades, criatividade e capacidades técnicas.
		    </p>
		  </details>

		  <details className="group [&_summary::-webkit-details-marker]:hidden">
		    <summary
		      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-200 p-4 text-gray-900"
		    >
		      <h2 className="font-medium">
		        Qual é o objetivo do relembra.ai?
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
		      O principal objetivo do relembra.ai é apresentar uma gama de habilidades e 
		      competências em áreas como inteligência artificial, programação, design e 
		      outras disciplinas relacionadas. Ele serve como um exemplo tangível do 
		      conhecimento e da expertise do criador em diversos campos, 
		      ilustrando a capacidade de desenvolver e conceber soluções inovadoras.
		    </p>
		  </details>

		  <details className="group [&_summary::-webkit-details-marker]:hidden">
		    <summary
		      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-200 p-4 text-gray-900"
		    >
		      <h2 className="font-medium">
		        O relembra.ai pode ser utilizado para fins comerciais?
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
		      Não, o relembra.ai não é projetado nem destinado para uso comercial. 
		      Sua finalidade exclusiva é demonstrar as capacidades e o talento do criador, 
		      servindo como um elemento de destaque em um portfólio profissional.
		    </p>
		  </details>

		  <details className="group [&_summary::-webkit-details-marker]:hidden">
		    <summary
		      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-200 p-4 text-gray-900"
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
		      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-200 p-4 text-gray-900"
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
		      <p>GitHub: <a className="text-blue-600" href="https://github.com/FelipeFerreiraSS">github.com/FelipeFerreiraSS</a></p>
		      <p>LinkedIn: <a className="text-blue-600" href="https://www.linkedin.com/in/felipeferreiradev/">linkedin.com/in/felipeferreiradev/</a></p>
		    </p>
		  </details>
		</div>
	)
}