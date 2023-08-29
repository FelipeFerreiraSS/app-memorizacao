import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import Link from "next/link";

import logoSvg from "../public/logo.svg";
import Image from 'next/image';
import account_circle from "../public/account_circle.svg";
import logout_icon from "../public/logout_icon.svg";
import monitoring from "../public/monitoring.svg";

import ActivityChart from './ActivityChart.js'
import LevelUser from './LevelUser.js'
import DisplayProfile from './DisplayProfile.js'

export default function Menu({ allActivities }) {
  const { logout } = useAuth()

  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <header className="bg-gray-50 mb-5 md:mb-0">
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
        <div className="mt-5 flex flex-col-reverse md:flex md:items-center md:justify-end md:flex-row md:gap-4 md:mt-0 ">
          <div className="w-64 mt-5 m-auto md:mr-0">
            <LevelUser 
              allActivities={allActivities}
            />
          </div>
          <div className="flex items-center justify-center">
            <DisplayProfile 
              allActivities={allActivities}
            />
            <ActivityChart 
              isOpen={modalOpen} 
              onClose={closeModal} 
              allActivities={allActivities} 
            />
            <span
              aria-hidden="true"
              className="block mr-3 ml-3 h-12 w-px rounded-full bg-gray-400"
            ></span>
            <button
              className="block mr-3 shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
              onClick={openModal}
            >
              <Image
              src={monitoring}
              className="hover:scale-125 duration-300"
              width={20}
              height={20}
              alt="Picture of the author"
              />
            </button>
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