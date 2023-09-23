import React, { useState } from 'react'

import Image from 'next/image';
import arrow_back from "../public/arrow_back.svg";

import CompleteQuestions from "../components/CompleteQuestions.js"

export default function GameAi({allCards, card, isOpen, onClose, originalWord, translatedWord, imageUrl }) {
  const [gameOn, setGameOn] = useState(false);

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white rounded-lg p-8 z-10">
      	<button
          className="flex px-4 py-2 hover:scale-125 duration-300"
          onClick={onClose}
        >
        	<Image
          src={arrow_back}
          width={20}
          height={20}
          alt="Picture of the author"
          className="mr-1"
          />
          Voltar
        </button>
        {gameOn ? (
          <div>
            <h2 className="text-xl text-center font-medium mb-4">
              Qual é a tradução para a palavra: <p className="text-xl font-bold mb-4">{originalWord}</p> 
            </h2>
            <Image
              alt="Home"
              src={imageUrl}
              width={350}
              height={350}
              className="rounded-md object-cover"
            />
            <div className="flex flex-col items-center justify-items-center mt-5">
              <CompleteQuestions
                card={card} 
                translatedWord={translatedWord}
                onClose={onClose}
              />
            </div>
          </div>
        ) : (
          <div role="alert" className="w-80 rounded border-s-4 border-red-500 bg-red-50 p-4">
            <strong className="block font-bold text-center text-red-800 text-xl"> 
              Opção paga temporariamente indisponível 
            </strong>

            <p className="mt-2 text-lg text-red-700">
              Lamentamos informar que a opção que você está tentando acessar atualmente é uma 
              funcionalidade paga que não está disponível no momento.
            </p>
          </div>
        ) }
      </div>
    </div>
  )
}