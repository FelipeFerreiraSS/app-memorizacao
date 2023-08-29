import React, { useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";

import Image from 'next/image';

import EditProfile from './EditProfile.js'

export default function DisplayProfile({ allActivities }) {

  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [userDefaultName, setUserDefaultName] = useState(null);
  const [modalOpenProfile, setModalOpenProfile] = useState(false)

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
  );
};
