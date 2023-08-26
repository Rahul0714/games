import React, { useEffect } from "react";

const Cell = ({
  cell,
  setCell,
  id,
  turn,
  setTurn,
  setWinningMessage,
  winningMessage,
}) => {
  const checkWin = (winningCombination, cell) => {
    winningCombination.forEach((array) => {
      let circleWin = array.every((c) => cell[c] === "circle");
      if (circleWin) {
        setWinningMessage("Circle Wins!");

        return;
      }
      let crossWin = array.every((c) => cell[c] === "cross");
      if (crossWin) {
        setWinningMessage("Cross Wins!");

        return;
      }
      cell.includes("") && setWinningMessage("Draw ");
    });
  };

  useEffect(() => {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    checkWin(winningCombination, cell);
  }, [cell]);
  const handleClick = (e) => {
    let temperaryId = +e.target.attributes.id.value;

    const taken =
      cell[temperaryId] === "circle" || cell[temperaryId] === "cross";

    if (!taken) {
      const updatedCell = cell.map((c, index) =>
        index === temperaryId ? turn : c
      );
      setCell(updatedCell);

      turn === "circle" ? setTurn("cross") : setTurn("circle");
    }
  };

  return (
    <div
      id={id}
      className={`w-1/3 h-28 border border-black   text-center cursor-pointer flex justify-center items-center text-5xl`}
      onClick={!winningMessage ? handleClick : undefined}
    >
      {cell[id] === "circle" ? "O" : cell[id] === "cross" ? "X" : ""}
    </div>
  );
};

export default Cell;
