import { useState } from "react";

import Squares from "@/Components/Scenes/Squares/Squares";

const Board = () => {
  const [boardSquares, setboardSquares] = useState<string[]>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (index: number) => {
    const boardCopy = [...boardSquares];
    if (boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setboardSquares(boardCopy);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index: number) => {
    return (
      <Squares
        value={boardSquares[index]}
        handleClick={() => handleClick(index)}
      />
    );
  };

  return (
    <div className="h-[530px] w-[320px] bg-gradient-blueish">
      <div>test</div>
    </div>
  );
};

export default Board;
