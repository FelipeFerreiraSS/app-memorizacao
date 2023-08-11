import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Link from "next/link";

import Image from 'next/image'
import logoSvg from "../public/logo.svg";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    const { login, signup, currentUser } = useAuth()
    console.log(currentUser)

    const isPasswordValid = password.length > 5;

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
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <div className="flex justify-center max-w-lg">
              <Link href="/">
                <Image
                className=''
                src={logoSvg}
                width={180}
                height={180}
                alt="Picture of the author"
                />
              </Link>
            </div>
            <div
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8"
            >
              <p className="text-center text-lg font-medium">{isLoggingIn ? 'Entre com a sua conta' : 'Crie uma conta'}</p>

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

              <div>
                <label for="username" className="sr-only">Email</label>

                <div className="relative">
                  <input
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Email"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label for="password" className="sr-only">Senha</label>

                <div className="relative">
                  <input
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Senha"
                  />
                  <p className="text-sm text-gray-700">Senha mínima: 6 caracteres</p>

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <button
                disabled={!isPasswordValid}
                onClick={submitHandler}
                className={`block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white ${isPasswordValid ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              >
                {isLoggingIn ? 'Login' : 'Criar conta'}
              </button>

              <p className="text-center text-sm text-gray-500">
                {!isLoggingIn ? 'Já tem uma conta? ' : 'Não tem uma conta? '}
                <span className="underline text-blue-500 cursor-pointer" onClick={() => setIsLoggingIn(!isLoggingIn)}>{!isLoggingIn ? 'Entre com sua conta' : 'Criar conta'}</span>
              </p>
            </div>
          </div>
        </div>
    )
}