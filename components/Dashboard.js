import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Cards from './Cards'
import { doc, setDoc, deleteField } from 'firebase/firestore'
import { db } from '../firebase'
import useFetchTodos from '../hooks/fetchTodos'

import Menu from './Menu'
import refresh from "../public/refresh.svg";
import Image from 'next/image'

export default function Dashboard() {
  const { userInfo, currentUser } = useAuth()
  const [edit, setEdit] = useState(null)
  const [todo, setTodo] = useState('')
  const [edittedValue, setEdittedValue] = useState('')
  const { todos, setTodos, loading, error } = useFetchTodos()

  console.log(todos)

  async function handleAddTodo() {
    if (!todo) { return }
    const newKey = Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1
    setTodos({ ...todos, [newKey]: todo })
    const userRef = doc(db, 'users', currentUser.uid)
    await setDoc(userRef, {
        'todos': {
            [newKey]: todo
        }
    }, { merge: true })
    setTodo('')
  }

  async function handleEditTodo() {
      if (!edittedValue) { return }
      const newKey = edit
      setTodos({ ...todos, [newKey]: edittedValue })
      const userRef = doc(db, 'users', currentUser.uid)
      await setDoc(userRef, {
          'todos': {
              [newKey]: edittedValue
          }
      }, { merge: true })
      setEdit(null)
      setEdittedValue('')
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
            <div className='flex items-center justify-center'>
                <label
                for="Username"
                class="relative block rounded-md border mr-5 border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                <input
                    type="text"
                    id="Username"
                    class="sm:text-lg peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="Add palavra"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />

                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    Adicione a palavra
                </span>
                </label>
                <button onClick={handleAddTodo} className='inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'>
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
                                <Cards handleEditTodo={handleEditTodo} key={i} handleAddEdit={handleAddEdit} edit={edit} todoKey={todo} edittedValue={edittedValue} setEdittedValue={setEdittedValue} handleDelete={handleDelete}>
                                    {todos[todo]}
                                </Cards>
                            )
                        })}
                    </div>
                </>
            )}
        </div>
    </>
  )
}