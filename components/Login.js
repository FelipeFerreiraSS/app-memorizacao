import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    const { login, signup, currentUser } = useAuth()
    console.log(currentUser)

    async function submitHandler() {
        if (!email || !password) {
            setError('Por favor, entre com seu e-mail e senha')
            return
        }
        if (isLoggingIn) {
            try {
                await login(email, password)
            } catch (err) {
                setError('E-mail ou senha incorretos')
            }
            return
        }
        await signup(email, password)
    }

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 bg-gray-200`}>
        <div class="w-full max-w-xs flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl mb-6">{isLoggingIn ? 'Login' : 'Cadastro'}</h1>
            {error &&
                <div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-2">
                    <div className="flex items-center gap-2 text-red-800">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                        fillRule="evenodd"
                        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                        />
                    </svg>
                
                    <strong className="block font-medium">{error}</strong>
                    </div>
              </div>
            }
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Senha
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
            </div>
            <div class="flex items-center justify-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"  onClick={submitHandler}>
                    {isLoggingIn ? 'Login' : 'Cadastro'}
                </button>
            </div>
            <h2 class="inline-block align-baseline font-bold cursor-pointer text-sm text-blue-500 hover:text-blue-800" onClick={() => setIsLoggingIn(!isLoggingIn)}>{!isLoggingIn ? 'Login' : 'Cadastro'}</h2>
            </div>
        </div>
        </main>
    )
}