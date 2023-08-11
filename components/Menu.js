import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { getAuth } from "firebase/auth";
import Link from "next/link";

import logoSvg from "../public/logo.svg";
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
      <div className="mx-auto max-w-screen-xl px-4 pt-3 pb-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
            src={logoSvg}
            width={200}
            height={200}
            alt="Picture of the author"
            />
          </Link>
        </div>

        <div>
          <div className="flex items-center justify-end gap-4">
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
                className="hover:scale-125 duration-300"
                width={20}
                height={20}
                alt="Picture of the author"
                />
            </button>
          </div>
          
        </div>
      </div>
    </header>
  )
}