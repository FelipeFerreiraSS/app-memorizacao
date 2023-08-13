import React, { useState } from 'react'
import Link from "next/link"

import Image from 'next/image'
import logoSvg from "../public/logo.svg"
import close from "../public/close.svg"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                    <Link href="/">
                        <Image
                        className=''
                        src={logoSvg}
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        />
                    </Link>
                </div>

                <div className="hidden md:block">
                    <nav aria-label="Global">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                        <Link
                            className="text-gray-900 transition hover:text-gray-500/75"
                            href="/#about"
                        >
                            Sobre
                        </Link>
                        </li>

                        <li>
                        <Link
                            className="text-gray-900 transition hover:text-gray-500/75"
                            href="/#functions"
                        >
                            Funçôes
                        </Link>
                        </li>

                        <li>
                        <Link
                            className="text-gray-900 transition hover:text-gray-500/75"
                            href="/#price"
                        >
                            Preço
                        </Link>
                        </li>

                        <li>
                        <Link
                            className="text-gray-900 transition hover:text-gray-500/75"
                            href="/#faq"
                        >
                            FAQ
                        </Link>
                        </li>
                    </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex sm:gap-4">
                        <Link href="/app"
                        className="block w-full rounded border border-blue-600 bg-blue-600 px-5 lg:px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                        >
                        Login
                        </Link>

                    <div className="hidden sm:flex">
                        <Link href="/app"
                        className="block w-full rounded border border-blue-600 bg-blue-600 px-5 lg:px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                        >
                        Registrar
                        </Link>
                    </div>
                    </div>

                    <div className="block md:hidden">
                    <button
                        onClick={toggleDropdown}
                        className={`rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 ${isOpen ? 'hidden' : 'block'}`}
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    </button>
                    {isOpen && (
                        <button
                            onClick={toggleDropdown}
                            className="rounded w-10 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-600/75"
                        >
                            <Image
                            className='h-5 w-5'
                            src={close}
                            width={20}
                            height={20}
                            alt="Picture of the author"
                            />
                        </button>
                    )}
                    </div>
                </div>
                </div>
                {isOpen && (
                    <div className={`absolute sm:hidden w-11/12 mr-2 bg-gray-100 border-2 pb-5 rounded-md border-gray-200 ${isOpen ? 'block' : 'hidden'}`}>
                            <ul className="grid gap-5 mr-2 justify-items-end text-sm">
                                <li>
                                </li>
                                <li>
                                <Link
                                    onClick={toggleDropdown}
                                    className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700"
                                    href="/#about"
                                >
                                    Sobre
                                </Link>
                                </li>

                                <li>
                                <Link
                                    onClick={toggleDropdown}
                                    className="mb-7 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700"
                                    href="/#functions"
                                >
                                    Funçôes
                                </Link>
                                </li>

                                <li>
                                <Link
                                    onClick={toggleDropdown}
                                    className="mb-7 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700"
                                    href="/#price"
                                >
                                    Preço
                                </Link>
                                </li>

                                <li>
                                <Link
                                    onClick={toggleDropdown}
                                    className="mb-7 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700"
                                    href="/#faq"
                                >
                                    FAQ
                                </Link>
                                </li>
                            </ul>

                        </div>
                )}
            </div>
        </header>
    )
}