import React, { useState, useEffect } from 'react';

export default function LevelUser({ allActivities }) {
  const [totalPoints, setTotalPoints] = useState(0);
  const [nextLevelPoints, setNextLevelPoints] = useState(1000); 

  useEffect(() => {
    if (allActivities) {
      const sum = Object.values(allActivities).reduce((total, activity) => {
        return total + activity.counter;
      }, 0);
      setTotalPoints(sum);
    }
  }, [allActivities]);

  useEffect(() => {
    if (totalPoints >= 1000) {
      setNextLevelPoints(0);
    } else if (totalPoints >= 900) {
      setNextLevelPoints(1000);
    } else if (totalPoints >= 800) {
      setNextLevelPoints(900);
    } else if (totalPoints >= 700) {
      setNextLevelPoints(800);
    } else if (totalPoints >= 600) {
      setNextLevelPoints(700);
    } else if (totalPoints >= 500) {
      setNextLevelPoints(600);
    } else if (totalPoints >= 400) {
      setNextLevelPoints(500);
    } else if (totalPoints >= 300) {
      setNextLevelPoints(400);
    } else if (totalPoints >= 200) {
      setNextLevelPoints(300);
    } else if (totalPoints >= 100) {
      setNextLevelPoints(200);
    } else {
      setNextLevelPoints(100);
    }
  }, [totalPoints]);

  const calculateLevel = (points) => {
    if (points >= 1000) {
      return "Nível 10";
    } else if (points >= 900) {
      return "Nível 9";
    } else if (points >= 800) {
      return "Nível 8";
    } else if (points >= 700) {
      return "Nível 7";
    } else if (points >= 600) {
      return "Nível 6";
    } else if (points >= 500) {
      return "Nível 5";
    } else if (points >= 400) {
      return "Nível 4";
    } else if (points >= 300) {
      return "Nível 3";
    } else if (points >= 200) {
      return "Nível 2";
    } else if (points >= 100) {
      return "Nível 1";
    } else {
      return "Nível 0";
    }
  };

  const userLevel = calculateLevel(totalPoints);

  let lastTwoDigits;

  if (totalPoints >= 100) {
    lastTwoDigits = totalPoints % 100;
  } else {
    lastTwoDigits = totalPoints;
  }

  return (
    <div className="flex justify-between justify-center">
      <div>
        <h1 className="text-center text-xl font-semibold">{userLevel}</h1>
        <p className="mt-1">
          {totalPoints}xp / {nextLevelPoints}xp
        </p>
      </div>
      <div className="m-auto mt-10">
        <div className='w-32 px-4 lg:w-5/12'>
          <div className='border-2 border-gray-400 relative h-[10px] w-32 rounded-2xl'>
            <div className='bg-blue-500 absolute top-0 left-0 h-full rounded-2xl'
              style={{ width: `${lastTwoDigits}%` }}
            >
              <span className='bg-blue-500 absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white'>
                <span className='bg-blue-500 absolute bottom-[-3px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm'></span>
                {lastTwoDigits}%
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
