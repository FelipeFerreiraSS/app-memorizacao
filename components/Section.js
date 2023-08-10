import react from 'react'
import Link from "next/link";

import Image from 'next/image'
import lock from "../public/lock.svg"
import photo from "../public/photo.svg"
import hourglass from "../public/hourglass.svg"
import calendar from "../public/calendar.svg"
import monitoring from "../public/monitoring.svg"
import smart from "../public/smart.svg"

export default function Section() {
	return (
		<section id="about">
		  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
		    <div
		      className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
		    >
		      <div
		        className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
		      >
		        <h2 className="text-3xl font-bold sm:text-4xl">Liberte seu potencial de aprendizado!</h2>

		        <p className="mt-4 mb-10 text-gray-600">
		          No relembra.ai, acreditamos que a aprendizagem é uma jornada contínua e emocionante. 
		          Nossa missão é capacitar você a dominar novos idiomas, 
		          compreender conceitos complexos e aprofundar seu conhecimento de forma revolucionária.
		        </p>

		        <Link href="/app"
               	className="rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-44"
               	>
                   	Criar conta
                </Link>
		      </div>

		      <div id="functions" className="grid grid-cols-2 gap-4 sm:grid-cols-3">

		        <div
		          className="flex flex-col rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
		        >
		          <span className="w-12 m-auto rounded-lg bg-gray-50 p-3">
		            <Image
                        className='h-6 w-6'
                        src={lock}
                        width={20}
                        height={20}
                        alt="Picture of the author"
					/>
		          </span>

		          <h2 className="text-center mt-2 font-bold">Palavras que perduram</h2>

		          <p className="text-center hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
		            Guarde e reviva seu vocabulário com facilidade
		          </p>
		        </div>

		        <div
		          className="flex flex-col rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
		        >
		          <span className="w-12 m-auto rounded-lg bg-gray-50 p-3">
		            <Image
                        className='h-6 w-6'
                        src={photo}
                        width={20}
                        height={20}
                        alt="Picture of the author"
					/>
		          </span>

		          <h2 className="text-center mt-2 font-bold">Visualização clara</h2>

		          <p className="text-center hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
		            Adicione exemplos visuais às suas palavras 
		          </p>
		        </div>

		        <div
		          className="flex flex-col rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
		        >
		          <span className="w-12 m-auto rounded-lg bg-gray-50 p-3">
		            <Image
                        className='h-6 w-6'
                        src={hourglass}
                        width={20}
                        height={20}
                        alt="Picture of the author"
					/>
		          </span>

		          <h2 className="text-center mt-2 font-bold">Aprendizado eficiente</h2>

		          <p className="text-center hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
		            Reforce a memória com repetição espaçada 
		          </p>
		        </div>

		        <div
		          className="flex flex-col rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
		        >
		          <span className="w-12 m-auto rounded-lg bg-gray-50 p-3">
		            <Image
                        className='h-6 w-6'
                        src={calendar}
                        width={20}
                        height={20}
                        alt="Picture of the author"
					/>
		          </span>

		          <h2 className="text-center mt-2 font-bold">Agenda de estudos</h2>

		          <p className="text-center hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
		            Planeje sua aprendizagem com nosso calendário 
		          </p>
		        </div>

		        <div
		          className="flex flex-col rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
		        >
		          <span className="w-12 m-auto rounded-lg bg-gray-50 p-3">
		            <Image
                        className='h-6 w-6'
                        src={monitoring}
                        width={20}
                        height={20}
                        alt="Picture of the author"
					/>
		          </span>

		          <h2 className="text-center mt-2 font-bold">Progresso em foco</h2>

		          <p className="text-center hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
		            Acompanhe com gráficos a sua aprendizagem 
		          </p>
		        </div>

		        <div
		          className="flex flex-col rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
		        >
		          <span className="w-12 m-auto rounded-lg bg-gray-50 p-3">
		            <Image
                        className='h-6 w-6'
                        src={smart}
                        width={20}
                        height={20}
                        alt="Picture of the author"
					/>
		          </span>

		          <h2 className="text-center mt-2 font-bold">Perguntas inteligentes</h2>

		          <p className="text-center hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
		            Desafie-se com perguntas geradas por IA  
		          </p>
		        </div>

		        
		      </div>
		    </div>
		  </div>
		</section>
	)
}