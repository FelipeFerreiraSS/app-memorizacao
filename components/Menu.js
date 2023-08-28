import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { getAuth } from "firebase/auth";
import Link from "next/link";

import logoSvg from "../public/logo.svg";
import Image from 'next/image';
import account_circle from "../public/account_circle.svg";
import logout_icon from "../public/logout_icon.svg";
import monitoring from "../public/monitoring.svg";

import ActivityChart from './ActivityChart.js'
import EditProfile from './EditProfile.js'
import LevelUser from './LevelUser.js'

export default function Menu({ allActivities }) {
  const { logout } = useAuth()

  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [userDefaultName, setUserDefaultName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false)
  const [modalOpenProfile, setModalOpenProfile] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const openModalProfile = () => {
    setModalOpenProfile(true)
  }

  const closeModalProfile = () => {
    setModalOpenProfile(false)
  }

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
      user.providerData.forEach((profile) => {
        setUserEmail(profile.email);
        setUserName(profile.displayName)
        setUserPhoto(profile.photoURL)

        const parts = profile.email.split('@');
        if (parts.length === 2) {
          const username = parts[0];
          setUserDefaultName(username);
        }
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
            <LevelUser 
              allActivities={allActivities}
            />
            <div className="flex">
              <div className="w-16 h-16 mr-3 m-auto rounded-full overflow-hidden relative">
                {(userPhoto === null) ? (
                  <img 
                    src="https://images.unsplash.com/photo-1566301587328-95b65dc1df77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    className="rounded-full object-cover"
                    alt="Imagem do usuário" 
                  />
                ) : (
                  <div className="rounded-full overflow-hidden" style={{ width: '100%', height: '100%' }}>
                    <img 
                      src={userPhoto}
                      className="w-full h-full object-cover"
                      alt="Imagem do usuário" 
                    />
                  </div>
                )} 

              </div>
              <div>
                {(userName === null) ? (
                  <p className="text-lg mb-1 text-black font-semibold">
                    {userDefaultName}
                  </p>
                ) : (
                  <p className="text-xl mb-1 text-black font-semibold">
                    {userName}
                  </p>
                )}
                <p className="text-sm mb-1 text-gray-500">
                  {userEmail}
                </p>
                <button
                  onClick={openModalProfile}
                  className="rounded-lg bg-white p-1 text-black shadow-sm hover:text-gray-700 text-sm"
                >
                  Editar
                </button>
                <EditProfile 
                  isOpen={modalOpenProfile} 
                  onClose={closeModalProfile}
                />
              </div>
            </div>
            <span
              aria-hidden="true"
              className="block h-12 w-px rounded-full bg-gray-400"
            ></span>
            <button
              className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
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

            <ActivityChart 
              isOpen={modalOpen} 
              onClose={closeModal} 
              allActivities={allActivities} 
            />

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