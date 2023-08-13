import React from 'react'

export default function AddCards({ word, setWord, translation, setTranslation, handleButtonClick }) {
	return (
		<div className='flex flex-col mb-5 md:mb-0 md:flex-row md:items-center md:justify-center h-28'>
      <div className="flex items-center flex-col mb-5 md:items-start md:flex-row md:mb-0">
        <label
          for="Username"
          className="relative mb-5 block rounded-md border md:mr-5  border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="Username"
            className="sm:text-lg peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Add palavra"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <span
              className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
          >
            Adicione a palavra
          </span>
        </label>
        <label
          for="Username"
          className="relative mb-5 block rounded-md border md:mr-5 border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="Username"
            className="sm:text-lg peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Add palavra"
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
          />

          <span
            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
          >
            Adicione a tradução
          </span>
        </label>
        <button onClick={handleButtonClick} className='h-11 rounded border border-indigo-600 bg-indigo-600 px-12 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'>
          Adicionar
        </button>
      </div>
    </div>
	)
}