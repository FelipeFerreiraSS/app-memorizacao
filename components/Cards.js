import React, { useState } from 'react'
import { format } from 'date-fns';

import { IconContext } from "react-icons";
import { PiRobot } from 'react-icons/pi';

import Image from 'next/image';
import checkIcon from "../public/check.svg";
import deleteIcon from "../public/delete.svg";
import editIcon from "../public/edit.svg";
import controller from "../public/controller.svg";

import Game from './Game.js'
import GameAi from './GameAi.js'

export default function Cards({allCards, card, edit, edittedValue, setEdittedValue, handleEditCard, handleAddEdit, handleDelete}) {

  const [modalOpenGame, setModalOpenGame] = useState(false)
  const [modalOpenGameAi, setModalOpenGameAi] = useState(false)

  const openModalGame = () => {
    setModalOpenGame(true)
  }

  const closeModalGame = () => {
    setModalOpenGame(false)
  }

  const openModalGameAi = () => {
    setModalOpenGameAi(true)
  }

  const closeModalGameAi = () => {
    setModalOpenGameAi(false)
  }

  const currentDate = new Date();
  const formattedDate = format(currentDate, 'dd/MM');
  const gameOn = formattedDate >= allCards[card].timeCard

  return (
    <div className="block max-w-xs rounded-lg p-4 shadow-sm shadow-gray-500">
      <p className="-mt-2 mb-2 text-center text-2xl font-semibold">{allCards[card].word}</p>
      <div className="w-48 h-32 m-auto overflow-hidden relative">
        <Image
          src={allCards[card].image}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          alt="Picture of the author"
        />
      </div>
      <div className="mt-2">
        <div className='flex-1 flex'>
          {!(edit === card) ? (
            <>
              <div className="flex">
                {!(gameOn) ? (
                  <p className="text-gray-700">Proxima revisão: <span className="font-medium text-gray-900">{allCards[card].timeCard}</span></p>
                ) : (
                  <p className="text-gray-700">Proxima revisão: <span className="font-semibold text-green-500">Hoje</span></p>
                )}
              </div>
            </>
          ) : (
            <div className="flex flex-col">
              <input 
                className='font-medium w-full rounded-md border border-gray-500 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600' 
                value={edittedValue.word} 
                onChange={(e) => setEdittedValue({ ...edittedValue, word: e.target.value })} 
              />
              <input 
                className='font-medium w-full rounded-md border border-gray-500 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600' 
                value={edittedValue.translation} 
                onChange={(e) => setEdittedValue({ ...edittedValue, translation: e.target.value })} 
              />
            </div>
          )}       
        </div>

        <div className='mt-6 flex items-center justify-center'>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 overflow-hidden rounded-md border bg-white shadow-sm">
            {(edit === card) ? <button onClick={handleEditCard} className="inline-block border-e p-3 text-gray-700 hover:bg-green-500 focus:relative hover:scale-125 duration-300 shadow-gray-500">
              <Image
              src={checkIcon}
              width={20}
              height={20}
              alt="Picture of the author"
              />
            </button> : <button onClick={handleAddEdit(card)} className="inline-block border-e p-3 text-gray-700 hover:bg-yellow-400 focus:relative hover:scale-125 duration-300 shadow-gray-500">
              <Image
              src={editIcon}
              width={20}
              height={20}
              alt="Picture of the author"
              />
            </button>}
          </div>

          <div className="mr-2 sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 overflow-hidden rounded-md border bg-white shadow-sm">
            <button onClick={handleDelete(card)} className="inline-block border-e p-3 text-gray-700 hover:bg-red-500 focus:relative hover:scale-125 duration-300 shadow-gray-500">
              <Image
              src={deleteIcon}
              width={20}
              height={20}
              alt="Picture of the author"
              />
            </button>
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 overflow-hidden rounded-md border bg-white shadow-sm">
            <button
              className={`inline-block border-e p-3 text-gray-700 hover:bg-orange-400 focus:relative hover:scale-125 duration-300 shadow-gray-500 ${gameOn ? 'cursor-pointer' : 'cursor-not-allowed'} `}
              disabled={!gameOn}
              onClick={openModalGame}
            >
              <Image
              src={controller}
              width={20}
              height={20}
              alt="Picture of the author"
              />
            </button>
            <Game 
              card={card}
              isOpen={modalOpenGame} 
              onClose={closeModalGame} 
              originalWord={allCards[card].word} 
              translatedWord={allCards[card].translation} 
              imageUrl={allCards[card].image}
            />
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 overflow-hidden rounded-md border bg-white shadow-sm">
            <button
              className={`inline-block border-e p-3 text-gray-700 hover:bg-violet-400 focus:relative hover:scale-125 duration-300 shadow-gray-500 ${gameOn ? 'cursor-pointer' : 'cursor-not-allowed'} `}
              disabled={!gameOn}
              onClick={openModalGameAi}
            >
              <IconContext.Provider value={{ size: "20px" }}>
                <PiRobot />
              </IconContext.Provider>
            </button>
            <GameAi 
              card={card}
              isOpen={modalOpenGameAi} 
              onClose={closeModalGameAi} 
              originalWord={allCards[card].word} 
              translatedWord={allCards[card].translation} 
              imageUrl={allCards[card].image}
            />
          </div>
        </div>
      </div>
    </div>
  )
}