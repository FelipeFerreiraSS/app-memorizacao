import React from "react";
import Link from "next/link";

export default function Banner() {
    return (
        <section className="bg-white-50 text-black">
            <div
                className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
                <div className="mx-auto max-w-3xl text-center">
                <h1
                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                >
                    Desperte sua mente com relembra.ai
                </h1>

                <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                    Descubra o poder da repetição espaçada: domine novos idiomas, memorize conceitos complexos e 
                    eleve seu conhecimento
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link href="/app"
                    className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                    >
                    Criar conta
                    </Link>

                    <a
                    className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                    href="/about"
                    >
                    Ler mais
                    </a>
                </div>
                </div>
            </div>
        </section>
    )
}