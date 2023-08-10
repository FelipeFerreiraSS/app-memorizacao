import react from 'react'

import Link from "next/link";

export default function Pricing() {
	return (
		<div id="price" className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
			<h2 className="text-center mb-10 text-3xl font-bold sm:text-4xl">Preços</h2>
		  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
		    <div
		      className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
		    >
		      <div className="text-center">
		        <h2 className="text-lg font-medium text-gray-900">
		          Pro
		          <span className="sr-only">Plan</span>
		        </h2>

		        <p className="mt-2 sm:mt-4">
		          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
		            R$25 
		          </strong>

		          <span className="text-sm font-medium text-gray-700">/mês</span>
		        </p>
		      </div>

		      <ul className="mt-6 space-y-2">
		        <li className="flex items-center gap-1">
		          <svg
		            xmlns="http://www.w3.org/2000/svg"
		            fill="none"
		            viewBox="0 0 24 24"
		            strokeWidth="1.5"
		            stroke="currentColor"
		            className="h-5 w-5 text-indigo-700"
		          >
		            <path
		              strokeLinecap="round"
		              strokeLinejoin="round"
		              d="M4.5 12.75l6 6 9-13.5"
		            />
		          </svg>

		          <span className="text-gray-700"> Guarde suas palavras </span>
		        </li>

		        <li className="flex items-center gap-1">
		          <svg
		            xmlns="http://www.w3.org/2000/svg"
		            fill="none"
		            viewBox="0 0 24 24"
		            strokeWidth="1.5"
		            stroke="currentColor"
		            className="h-5 w-5 text-indigo-700"
		          >
		            <path
		              strokeLinecap="round"
		              strokeLinejoin="round"
		              d="M4.5 12.75l6 6 9-13.5"
		            />
		          </svg>

		          <span className="text-gray-700"> Imagens relacionadas as palavras </span>
		        </li>

		        <li className="flex items-center gap-1">
		          <svg
		            xmlns="http://www.w3.org/2000/svg"
		            fill="none"
		            viewBox="0 0 24 24"
		            strokeWidth="1.5"
		            stroke="currentColor"
		            className="h-5 w-5 text-indigo-700"
		          >
		            <path
		              strokeLinecap="round"
		              strokeLinejoin="round"
		              d="M4.5 12.75l6 6 9-13.5"
		            />
		          </svg>

		          <span className="text-gray-700"> Método de repetição espaçada </span>
		        </li>

		        <li className="flex items-center gap-1">
		          <svg
		            xmlns="http://www.w3.org/2000/svg"
		            fill="none"
		            viewBox="0 0 24 24"
		            strokeWidth="1.5"
		            stroke="currentColor"
		            className="h-5 w-5 text-indigo-700"
		          >
		            <path
		              strokeLinecap="round"
		              strokeLinejoin="round"
		              d="M4.5 12.75l6 6 9-13.5"
		            />
		          </svg>

		          <span className="text-gray-700"> Calendários de estudos </span>
		        </li>

		        <li className="flex items-center gap-1">
		          <svg
		            xmlns="http://www.w3.org/2000/svg"
		            fill="none"
		            viewBox="0 0 24 24"
		            strokeWidth="1.5"
		            stroke="currentColor"
		            className="h-5 w-5 text-indigo-700"
		          >
		            <path
		              strokeLinecap="round"
		              strokeLinejoin="round"
		              d="M4.5 12.75l6 6 9-13.5"
		            />
		          </svg>

		          <span className="text-gray-700"> Gráficos do seu progresso </span>
		        </li>

		        <li className="flex items-center gap-1">
		          <svg
		            xmlns="http://www.w3.org/2000/svg"
		            fill="none"
		            viewBox="0 0 24 24"
		            strokeWidth="1.5"
		            stroke="currentColor"
		            className="h-5 w-5 text-indigo-700"
		          >
		            <path
		              strokeLinecap="round"
		              strokeLinejoin="round"
		              d="M4.5 12.75l6 6 9-13.5"
		            />
		          </svg>

		          <span className="text-gray-700"> Perguntas geradas por IA </span>
		        </li>
		      </ul>

		      <Link href="/app"
		        className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
		      >
		        Começar
		      </Link>
		    </div>

		    <div
		      className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12"
		    >
		      <div className="text-center">
		        <h2 className="text-lg font-medium text-gray-900">
		          Starter
		          <span className="sr-only">Plan</span>
		        </h2>

		        <p className="mt-2 sm:mt-4">
		          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
		            GRÁTIS
		          </strong>

		        </p>
		      </div>

		      <ul className="mt-6 space-y-2">
		        <li className="flex items-center gap-1">
		          <svg
		            xmlns="http://www.w3.org/2000/svg"
		            fill="none"
		            viewBox="0 0 24 24"
		            strokeWidth="1.5"
		            stroke="currentColor"
		            className="h-5 w-5 text-indigo-700"
		          >
		            <path
		              strokeLinecap="round"
		              strokeLinejoin="round"
		              d="M4.5 12.75l6 6 9-13.5"
		            />
		          </svg>

		          <span className="text-gray-700"> Guarde suas palavras </span>
		        </li>

		        <li className="flex items-center gap-1">
		          <svg
		            xmlns="http://www.w3.org/2000/svg"
		            fill="none"
		            viewBox="0 0 24 24"
		            strokeWidth="1.5"
		            stroke="currentColor"
		            className="h-5 w-5 text-indigo-700"
		          >
		            <path
		              strokeLinecap="round"
		              strokeLinejoin="round"
		              d="M4.5 12.75l6 6 9-13.5"
		            />
		          </svg>

		          <span className="text-gray-700"> Imagens relacionadas as palavras </span>
		        </li>

		        <li className="flex items-center gap-1">
		          <svg
		            xmlns="http://www.w3.org/2000/svg"
		            fill="none"
		            viewBox="0 0 24 24"
		            strokeWidth="1.5"
		            stroke="currentColor"
		            className="h-5 w-5 text-indigo-700"
		          >
		            <path
		              strokeLinecap="round"
		              strokeLinejoin="round"
		              d="M4.5 12.75l6 6 9-13.5"
		            />
		          </svg>

		          <span className="text-gray-700"> Método de repetição espaçada </span>
		        </li>

		      </ul>

		      <Link href="/app"
		        className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
		      >
		        Começar
		      </Link>
		    </div>
		  </div>
		</div>
	)
}