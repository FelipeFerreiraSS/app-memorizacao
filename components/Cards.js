import React from 'react'

import Image from 'next/image';
import checkIcon from "../public/check.svg";
import deleteIcon from "../public/delete.svg";
import editIcon from "../public/edit.svg";

export default function Cards(props) {
    const { children, edit, handleAddEdit, edittedValue, setEdittedValue, todoKey, handleEditTodo, handleDelete } = props

    return (
        <div className="block max-w-xs rounded-lg p-4 shadow-sm shadow-gray-500">
            <img
                alt="Home"
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="max-h-44 max-w-52 rounded-md object-cover"
            />
            <div className="mt-2">
                <div className='flex-1 flex'>
                    {!(edit === todoKey) ? <>{children}</> : (
                        <input className='font-medium w-full rounded-md border border-gray-500 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600' value={edittedValue} onChange={(e) => setEdittedValue(e.target.value)} />
                    )}
                    {/* {children} */}
                </div>

                <div className='mt-6 flex items-center justify-center'>
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 overflow-hidden rounded-md border bg-white shadow-sm">
                        {(edit === todoKey) ? <button onClick={handleEditTodo} className="inline-block border-e p-3 text-gray-700 hover:bg-green-500 focus:relative hover:scale-125 duration-300 shadow-gray-500">
                            <Image
                            src={checkIcon}
                            width={20}
                            height={20}
                            alt="Picture of the author"
                            />
                        </button> : <button onClick={handleAddEdit(todoKey)} className="inline-block border-e p-3 text-gray-700 hover:bg-yellow-400 focus:relative hover:scale-125 duration-300 shadow-gray-500">
                            <Image
                            src={editIcon}
                            width={20}
                            height={20}
                            alt="Picture of the author"
                            />
                        </button>}
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 overflow-hidden rounded-md border bg-white shadow-sm">
                        <button onClick={handleDelete(todoKey)} className="inline-block border-e p-3 text-gray-700 hover:bg-red-500 focus:relative hover:scale-125 duration-300 shadow-gray-500">
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