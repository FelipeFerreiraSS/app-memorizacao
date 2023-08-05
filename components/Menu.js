import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { getAuth } from "firebase/auth";

import Image from 'next/image';
import account_circle from "../public/account_circle.svg";
import logout_icon from "../public/logout_icon.svg";

export default function Menu() {
  const { logout } = useAuth()

  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
      user.providerData.forEach((profile) => {
        setUserEmail(profile.email);
      });
    }
  }, []);


  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700">
                <span className="sr-only">Profile</span>
                <Image
                src={account_circle}
                width={20}
                height={20}
                alt="Picture of the author"
                />
            </a>

            <span
                aria-hidden="true"
                className="block h-6 w-px rounded-full bg-gray-200"
            ></span>

            <p className="mt-1.5 text-sm text-gray-500">
              {userEmail}
            </p>

            <button
              className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                onClick={() => {
                    logout()
                }}
            >
              <span className="sr-only">logout</span>
              <Image
                src={logout_icon}
                width={20}
                height={20}
                alt="Picture of the author"
                />
            </button>
          </div>
        </div>

        <div class="mt-2">
          <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
            App memorização
          </h1>

          <p class="mt-1.5 text-sm text-gray-500">
            Adicione cartões com palavras e frases para se lembrar depois
          </p>
        </div>
      </div>
    </header>
  )
}