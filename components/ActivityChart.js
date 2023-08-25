import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Image from 'next/image';
import arrow_back from "../public/arrow_back.svg";

export default function ActivityChart({ isOpen, onClose, allActivities }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (allActivities) {
      // Converte o objeto em um array e ordena pela data mais recente
      const sortedActivities = Object.values(allActivities).sort((a, b) =>
        new Date(b.day) - new Date(a.day)
      );
      
      // Pega apenas os últimos 7 itens
      const last7Activities = sortedActivities.slice(1, 8);

      // Mapeia os dados para o formato desejado
      const mappedData = last7Activities.map((activity) => ({
        Atividades: activity.counter,
        dia: activity.day
      }));
      
      setData(mappedData);
    }
  }, [allActivities]);

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white rounded-lg p-8 z-10">
        <button
          className="flex px-4 py-2 hover:scale-125 duration-300"
          onClick={onClose}
        >
          <Image
          src={arrow_back}
          width={20}
          height={20}
          alt="Picture of the author"
          className="mr-1"
          />
          Voltar
        </button>
        <h1 className="text-xl text-center font-medium mb-4">Atividades nos Últimos 7 Dias</h1>
        <div className="w-96 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dia" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Atividades" fill="#0284c7" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
