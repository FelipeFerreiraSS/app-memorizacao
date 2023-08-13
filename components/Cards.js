import React from 'react'

import Image from 'next/image';
import checkIcon from "../public/check.svg";
import deleteIcon from "../public/delete.svg";
import editIcon from "../public/edit.svg";

export default function Cards({allCards, card, edit, edittedValue, setEdittedValue, handleEditCard, handleAddEdit, handleDelete}) {

  return (
    <div key={allCards[card].image} className="block max-w-xs rounded-lg p-4 shadow-sm shadow-gray-500">
      <Image
        alt="Home"
        src={allCards[card].image}
        width={300}
        height={200}
        class="max-h-44 max-w-52 rounded-md object-cover"
      />
      <div className="mt-2">
        <div className='flex-1 flex'>
          {!(edit === card) ? (
            <>
              <div className="flex flex-col">
                <p className="text-gray-700">Palavra: <span className="font-medium text-gray-900">{allCards[card].word}</span></p>
                <p className="text-gray-700">Tradução: <span className="font-medium text-gray-900">{allCards[card].translation}</span></p>
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

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 overflow-hidden rounded-md border bg-white shadow-sm">
            <button onClick={handleDelete(card)} className="inline-block border-e p-3 text-gray-700 hover:bg-red-500 focus:relative hover:scale-125 duration-300 shadow-gray-500">
              <Image
              src={deleteIcon}
              width={20}
              height={20}
              alt="Picture of the author"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}