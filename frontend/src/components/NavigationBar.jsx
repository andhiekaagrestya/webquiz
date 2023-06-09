import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeaderboardBar from './LeaderboardBar';

export default function ({ Score = [], aboutController }) {
  const [Showscoreboard, setShowscoreboard] = useState(false);
  return (
    <div className="flex w-[90vw] relative justify-between px-4  items-center mx-auto py-4">
      <div className="flex font-medium text-white gap-x-2 items-center text-2xl">
      {/* Logo Nav Bar */}
        <div className="min-w-[2.5rem] min-h-[2.5rem] bg-cover bg-[url('/logo.png')]"></div>
        <h2 className="md:inline-block hidden">Language Quiz Web App</h2>
      </div>
      <div className="flex gap-x-4">
        <Link
          to={'/'}
          className="sm:inline-block hidden  rounded-2xl text-center py-1 font-medium text-white cursor-pointer duration-200 hover:text-rose-400">
          Home
        </Link>
        <div
          onClick={() => {
            setShowscoreboard(!Showscoreboard);
          }}
          className="sm:inline-block hidden rounded-2xl text-center py-1 font-medium text-white cursor-pointer duration-200 hover:text-rose-400">
          Scoreboard
        </div>
        <Link
          to={'/tambah-soal'}
          className="sm:inline-block hidden rounded-2xl text-center py-1 font-medium text-white cursor-pointer duration-200 hover:text-rose-400">
          Add Question
        </Link>
        <div
          onClick={() => aboutController(true)}
          className="sm:inline-block hidden rounded-2xl text-center py-1 font-medium text-white cursor-pointer duration-200 hover:text-rose-400">
          About
        </div>
      </div>
      {Showscoreboard ? <LeaderboardBar list={Score.slice(0, 10)} /> : null}
    </div>
  );
}
