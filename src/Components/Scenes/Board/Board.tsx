import { useEffect, useState } from "react";

import Squares from "@/Components/Scenes/Squares/Squares";
import { calculateWinner } from "@/Components/Helpers/helpers";

interface Score {
  xScore: number;
  oScore: number;
}

const Board = () => {
  const [boardSquares, setboardSquares] = useState<string[]>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [scores, setScores] = useState<Score>({ xScore: 0, oScore: 0 });

  const handleClick = (index: number) => {
    const boardCopy = [...boardSquares];
    if (boardCopy[index] || calculateWinner(boardSquares)) return;
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

  let status;
  const winner = calculateWinner(boardSquares);
  status = winner ? `${winner} WINS!` : xIsNext ? `X'S Turn` : `O'S Turn`;

  useEffect(() => {
    if (winner === "X") {
      setScores({ ...scores, xScore: scores.xScore + 1 });
    } else if (winner === "O") {
      setScores({ ...scores, oScore: scores.oScore + 1 });
    }
  }, [winner]);

  const { xScore, oScore } = scores;

  const restartGame = () => {
    setboardSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="h-[530px] w-[320px] bg-gradient-blueish">
      <div>{status}</div>
      <button onClick={restartGame}>Play Again</button>
      <div>
        Scores: {xScore} and {oScore}
      </div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
