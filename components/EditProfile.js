import React, { useState, useEffect } from 'react';
import { getAuth, updateProfile } from "firebase/auth";

import Image from 'next/image';
import { IconContext } from "react-icons";
import { BiArrowBack } from 'react-icons/bi';

export default function EditProfile({ isOpen, onClose }) {
  const auth = getAuth(); 
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [profileUpdatedPositive, setProfileUpdatedPositive] = useState('');
  const [profileUpdatedNegative, setProfileUpdatedNegative] = useState('');

  const handleProfileUpdate = () => {
    if (!displayName || !photoURL) {
      setProfileUpdatedNegative('Nome de exibição e URL da foto são obrigatórios.');
      setProfileUpdatedPositive('');
      return;
    }
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL
    })
    .then(() => {
      setProfileUpdatedPositive('Perfil atualizado com sucesso!');
      setProfileUpdatedNegative('')
    })
    .catch((error) => {
      setProfileUpdatedNegative('Erro. Tente mais tarde!');
      setProfileUpdatedPositive('')
      console.error("Error updating profile:", error);
    });
  };

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white rounded-lg p-8 z-10">
        <button
          className="flex px-4 py-2 hover:scale-125 duration-300"
          onClick={onClose}
        >
          <IconContext.Provider value={{ size: "20px" }}>
            <BiArrowBack />
          </IconContext.Provider>
          Voltar
        </button>
        <h1 className="text-3xl text-center font-medium mb-4">Edite seu perfil:</h1>
        <div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome:
              <input
                type="text"
                value={displayName}
                className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="block mt-2 text-sm font-medium text-gray-700">
              Foto de perfil (URL):
              <input
                type="text"
                value={photoURL}
                className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-center">
            <button 
              onClick={handleProfileUpdate}
              className="mt-5 mb-5 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Atualize Perfil
            </button>
          </div>
          {profileUpdatedPositive && <p className="rounded py-2 bg-green-600 text-center text-xl font-bold">{profileUpdatedPositive}</p>}
          {profileUpdatedNegative && <p className="rounded py-2 bg-red-600 text-center text-xl font-bold">{profileUpdatedNegative}</p>} 
        </div>
      </div>
    </div>
  );
};
