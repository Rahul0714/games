import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const Home = () => {
  const [cell, setCell] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("cross");
  const [winningMessage, setWinningMessage] = useState(null);

  let message = `It is now ${turn}'s turn`;

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center  ">
        <div className="mb-10 text-3xl font-bold">Tic Tac Toe</div>
        <div className="w-1/2 flex flex-wrap backdrop-blur-lg">
          {cell.map((_, index) => (
            <Cell
              key={index}
              id={index}
              cell={cell}
              setCell={setCell}
              turn={turn}
              setTurn={setTurn}
              winningMessage={winningMessage}
              setWinningMessage={setWinningMessage}
            />
          ))}
        </div>
        <div className="mt-10 text-2xl">{winningMessage || message} </div>
        <div
          className="cursor-pointer mt-5 p-2 bg-gray-300 rounded-md hover:bg-gray-400"
          onClick={() => {
            setCell(["", "", "", "", "", "", "", "", ""]);
            setWinningMessage(null);
          }}
        >
          New Game
        </div>
      </div>
    </>
  );
};

export default Home;
