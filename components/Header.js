import React, { useState } from 'react'
import Link from "next/link"

import { IconContext } from "react-icons";
import { GrClose } from 'react-icons/gr';
import { AiOutlineBars } from 'react-icons/ai';

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
                        <img
                            src="https://raw.githubusercontent.com/FelipeFerreiraSS/relembra.ai/main/public/logo.png"
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
                        data-testid="mobile-menu-toggle"
                        onClick={toggleDropdown}
                        className={`rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 ${isOpen ? 'hidden' : 'block'}`}
                    >
                        <IconContext.Provider value={{ size: "20px" }}>
                            <AiOutlineBars />
                        </IconContext.Provider>
                    </button>
                    {isOpen && (
                        <button
                            data-testid="mobile-menu-toggle-close"
                            onClick={toggleDropdown}
                            className="rounded w-10 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-600/75"
                        >
                            <IconContext.Provider value={{ size: "20px" }}>
                                <GrClose />
                            </IconContext.Provider>
                        </button>
                    )}
                    </div>
                </div>
                </div>
                {isOpen && (
                    <div data-testid="mobile-menu" className={`absolute sm:hidden w-11/12 mr-2 bg-gray-100 border-2 pb-5 rounded-md border-gray-200 ${isOpen ? 'block' : 'hidden'}`}>
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