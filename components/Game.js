import React, { useState } from 'react'

import Crud from '../hooks/crud.js'
import Image from 'next/image';
import arrow_back from "../public/arrow_back.svg";

export default function Game({allCards, card, isOpen, onClose, originalWord, translatedWord, imageUrl }) {
	if (!isOpen) return null

	const [userGuess, setUserGuess] = useState('');
  const [feedbackPositive, setFeedbackPositive] = useState('');
  const [feedbackNegative, setFeedbackNegative] = useState('');
  const [openOption, setOpenOption] = useState('');
  const { handleOptionChange, handleUpdateData, newData } = Crud()

  const handleGuessChange = (event) => {
    setUserGuess(event.target.value);
  };

  const checkGuess = () => {
    if (userGuess.toLowerCase() === translatedWord.toLowerCase()) {
      setFeedbackPositive('Resposta correta!');
      setFeedbackNegative('')
    } else {
      setFeedbackNegative('Resposta incorreta.');
      setFeedbackPositive('')
    }

    setOpenOption(!openOption)
  };

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
	      <div className="flex justify-between mt-5">
	      	<label
	          className="relative mb-5 block rounded-md border md:mr-5  border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
	        >
	          <input
	            type="text"
	            className="sm:text-lg peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
	            placeholder="Add palavra"
	            value={userGuess}
	          	onChange={handleGuessChange}
	          />
	          <span
	              className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
	          >
	            Digite a tradução
	          </span>
	        </label>
	        <button
	          className={`h-11 rounded border border-indigo-600 bg-indigo-600 px-5 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ${openOption ? 'cursor-not-allowed' : 'cursor-pointer'}`}
	          disabled={openOption}
            onClick={checkGuess}
	        >
	          Verificar
	        </button>
	      </div>
        {feedbackPositive && <p className="rounded py-2 bg-green-600 text-center text-xl font-bold">{feedbackPositive}</p>}
        {feedbackNegative && <p className="rounded py-2 bg-red-600 text-center text-xl font-bold">{feedbackNegative}</p>} 
        {openOption && (
          <div>
            <label className="block text-[20px] mt-5 text-center font-medium text-gray-900">Quão difícil foi realizar essa tarefa?</label>
            <div className="flex items-center justify-between">
              <select
                className="mt-3 w-4/6 rounded-lg border-gray-400 text-gray-700 sm:text-lg"
                onChange={(event) => handleOptionChange(event, card)}
              >
                <option className="text-lg text-black" value="">Selecione...</option>
                <option className="text-lg text-black" value="easy">Fácil </option>
                <option className="text-lg text-black" value="medium">Médio</option>
                <option className="text-lg text-black" value="difficult">Difícil</option>
              </select>
              <button
                className="h-12 mt-3 rounded border border-indigo-600 bg-indigo-600 px-5 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                onClick={() => {
                  handleUpdateData();
                  onClose();
                }}
              >
                Atualizar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}