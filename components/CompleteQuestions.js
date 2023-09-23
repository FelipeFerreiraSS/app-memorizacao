'use client'
import React, { useState, useEffect } from 'react'
import { useCompletion } from 'ai/react';
import Image from 'next/image';

import Crud from '../hooks/crud.js'

import refresh from "../public/refresh.svg";
 
export default function CompleteQuestions({ translatedWord, card, onClose }) {
  const [feedbackPositive, setFeedbackPositive] = useState('');
  const [feedbackNegative, setFeedbackNegative] = useState('');
  const [openOption, setOpenOption] = useState('');
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState('')
  const [selectedOptionRadio, setSelectedOptionRadio] = useState('')

  const { handleOptionChange, handleUpdateAndAddActivity, newData } = Crud()

  const { completion, input, handleInputChange, handleSubmit } = useCompletion()

  const awaitingResponse = () => {
    setLoading(!loading)
  }

  const handleOptionChangeRadio = (event) => {
    setSelectedOptionRadio(event.target.value)
  };

  const checkGuess = () => {
    if (selectedOptionRadio.toLowerCase() === translatedWord.toLowerCase()) {
      setFeedbackPositive('Resposta correta!');
      setFeedbackNegative('')
    } else {
      setFeedbackNegative('Resposta incorreta.');
      setFeedbackPositive('')
    }

    setOpenOption(!openOption)
  };

  useEffect(() => {
    if (completion) {
      const matches = completion.match(/"([^"]+)"/g)
      if (matches) {
        const words = matches.map((match, index) => ({
          value: `option${index + 1}`,
          label: match.slice(1, -1),
        }));
        setOptions(words)
      }
    }
  }, [completion])
 
  return (
    <div className="flex flex-col stretch">
      {!completion && (
        <form onSubmit={handleSubmit}>
          <select
            className="w-56 bottom-0 border border-gray-300 rounded mb-4 mr-2 shadow-xl p-2"
            value={input}
            onChange={handleInputChange}
          >
            <option value="">Selecione um tipo de jogo</option>
            <option value={translatedWord}>Adivinhe a palavra certa</option>
          </select>
          <button
            className={`h-11 w-28 rounded border border-indigo-600 bg-indigo-600 px-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500`}
            type="submit"
            onClick={awaitingResponse}
          >
            Gerar game
          </button>
          {loading && (
            <Image
              className='animate-spin m-auto'
              src={refresh}
              width={30}
              height={30}
              alt="Picture of the author"
            />
          )}
        </form>
      )}
      <div className="w-80">
        {!openOption && (
          <>
            {options.map((option) => (
              <label key={option.value}
                className="flex cursor-pointer items-center rounded-lg border border-gray-700 bg-white pl-5 p-1 mb-2 shadow-sm hover:border-gray-400"
              >
                <input
                  type="radio"
                  className="mr-5"
                  value={option.label}
                  checked={selectedOptionRadio === option.value}
                  onChange={handleOptionChangeRadio}
                />
                <p className="text-black text-xl">{option.label}</p>
                <br />
              </label>
            ))}
            <button
              className={`h-11 w-full rounded border border-indigo-600 bg-indigo-600 px-5 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ${completion ? 'block' : 'hidden'}`}
              disabled={openOption}
              onClick={checkGuess}
            >
              Verificar
            </button>
          </>
        )}

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
                  handleUpdateAndAddActivity();
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
  );
}