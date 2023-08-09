import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Cards from './Cards'
import { doc, setDoc, deleteField } from 'firebase/firestore'
import { db } from '../firebase'
import useFetchTodos from '../hooks/fetchTodos'

import axios from 'axios';

import Menu from './Menu'
import refresh from "../public/refresh.svg";
import Image from 'next/image'


import checkIcon from "../public/check.svg";
import deleteIcon from "../public/delete.svg";
import editIcon from "../public/edit.svg";

export default function Dashboard() {
  const { userInfo, currentUser } = useAuth()
  const [edit, setEdit] = useState(null)
  const [word, setWord] = useState('')
  const [translation, setTranslation] = useState('')
  const [edittedValue, setEdittedValue] = useState('')
  const { todos, setTodos, loading, error } = useFetchTodos()

  const [searchQuery, setSearchQuery] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_API;

  const handleButtonClick = async () => {
    try {
      const imageFromSearch = await handleSearch();
      if (imageFromSearch) {
        setImageUrl(imageFromSearch);
        handleAddTodo(imageFromSearch);
      } else {
        console.error('Erro ao buscar a imagem');
      }
    } catch (error) {
      console.error('Erro ao buscar a imagem:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?query=${word}&orientation=landscape&client_id=${API_KEY}`
      );
      const imageRegularUrl = response.data.urls.regular;
      setImageUrl(imageRegularUrl);
      return imageRegularUrl;
    } catch (error) {
      console.error('Erro ao buscar a imagem:', error);
      return null;
    }
  };

  console.log(todos)

  async function handleAddTodo(imageUrl) {
    if (!word || !translation || !imageUrl) { return }
    const newKey = Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1
    setTodos({
      ...todos,
      [newKey]: {
        word: word,
        translation: translation,
        image: imageUrl,
      }
    });
    const userRef = doc(db, 'users', currentUser.uid)
    await setDoc(userRef, {
      'todos': {
        [newKey]: {
          word: word,
          translation: translation,
          image: imageUrl,
        }
      }
    }, { merge: true })
    setWord('');
    setTranslation('');
    setImageUrl('')
  }

  async function handleEditTodo() {
    if (!edittedValue.word || !edittedValue.translation) {
      return;
    }
    const newKey = edit
    setTodos({ ...todos, [newKey]: edittedValue })
    const userRef = doc(db, 'users', currentUser.uid)
    await setDoc(userRef, {
      'todos': {
        [newKey]: edittedValue
      }
    }, { merge: true })
    setEdit(null)
    setEdittedValue({ word: '', translation: '' })
  }

  function handleAddEdit(todoKey) {
    return () => {
      console.log(todos[todoKey])
      setEdit(todoKey)
      setEdittedValue(todos[todoKey])
    }
  }

  function handleDelete(todoKey) {
    return async () => {
      const tempObj = { ...todos }
      delete tempObj[todoKey]

      setTodos(tempObj)
      const userRef = doc(db, 'users', currentUser.uid)
      await setDoc(userRef, {
        'todos': {
          [todoKey]: deleteField()
        }
      }, { merge: true })
    }
  }

  return (
    <>
      <Menu />
      <div className='w-full max-w-5xl text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5'>
        <div className='flex items-center justify-center h-32'>
          <div className="flex flex-col">
            <label
              for="Username"
              class="relative mb-5 block rounded-md border mr-5 border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="Username"
                class="sm:text-lg peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
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
              class="relative block rounded-md border mr-5 border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="Username"
                class="sm:text-lg peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
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
            </div>
              <button onClick={handleButtonClick} className='inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'>
                Adicionar
              </button>
            </div>
            {(loading) && (
              <div className='flex-1 grid place-items-center'>
                <Image
                className='animate-spin'
                src={refresh}
                width={30}
                height={30}
                alt="Picture of the author"
                />
              </div>
            )}
            {(!loading) && (
              <>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8'>
                  {Object.keys(todos).map((todo, i) => {
                    return (
                      <div className="block max-w-xs rounded-lg p-4 shadow-sm shadow-gray-500">
                        <img
                            alt="Home"
                            src={todos[todo].image}
                            class="max-h-44 max-w-52 rounded-md object-cover"
                        />
                          <div className="mt-2">
                              <div className='flex-1 flex'>
                                {!(edit === todo) ? (
                                  <>
                                    <div className="flex flex-col">
                                      <p className="text-gray-700">Palavra: <span className="font-medium text-gray-900">{todos[todo].word}</span></p>
                                      <p className="text-gray-700">Tradução: <span className="font-medium text-gray-900">{todos[todo].translation}</span></p>
                                    </div>
                                  </>
                                ) : (
                                  <div className="flex flex-col">
                                    <input className='font-medium w-full rounded-md border border-gray-500 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600' 
                                    value={edittedValue.word} 
                                    onChange={(e) => setEdittedValue({ ...edittedValue, word: e.target.value })} 
                                    />
                                    <input className='font-medium w-full rounded-md border border-gray-500 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600' 
                                    value={edittedValue.translation} 
                                    onChange={(e) => setEdittedValue({ ...edittedValue, translation: e.target.value })} 
                                    />
                                  </div>
                                )}       
                              </div>

                              <div className='mt-6 flex items-center justify-center'>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 overflow-hidden rounded-md border bg-white shadow-sm">
                                  {(edit === todo) ? <button onClick={handleEditTodo} className="inline-block border-e p-3 text-gray-700 hover:bg-green-500 focus:relative hover:scale-125 duration-300 shadow-gray-500">
                                    <Image
                                    src={checkIcon}
                                    width={20}
                                    height={20}
                                    alt="Picture of the author"
                                    />
                                  </button> : <button onClick={handleAddEdit(todo)} className="inline-block border-e p-3 text-gray-700 hover:bg-yellow-400 focus:relative hover:scale-125 duration-300 shadow-gray-500">
                                    <Image
                                    src={editIcon}
                                    width={20}
                                    height={20}
                                    alt="Picture of the author"
                                    />
                                  </button>}
                                </div>

                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 overflow-hidden rounded-md border bg-white shadow-sm">
                                  <button onClick={handleDelete(todo)} className="inline-block border-e p-3 text-gray-700 hover:bg-red-500 focus:relative hover:scale-125 duration-300 shadow-gray-500">
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
                  })}
                </div>
              </>
            )}
        </div>
    </>
  )
}