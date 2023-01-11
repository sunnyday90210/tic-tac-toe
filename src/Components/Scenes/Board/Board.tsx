import { useEffect, useState } from "react";
import styles from "./BoardCss.module.css";

import Squares from "@/Components/Scenes/Squares/Squares";
import { calculateWinner } from "@/Components/Helpers/helpers";
import { Link } from "react-router-dom";

interface Score {
  xScore: number;
  oScore: number;
}

const BoardArray = Array(9).fill(null);

const Board = () => {
  const [boardSquares, setboardSquares] = useState<string[]>(BoardArray);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [scores, setScores] = useState<Score>({ xScore: 0, oScore: 0 });
  const { xScore, oScore } = scores;

  const handleClick = (index: number) => {
    const boardCopy = [...boardSquares];
    if (boardCopy[index] || calculateWinner(boardSquares)) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setboardSquares(boardCopy);
    setXIsNext(!xIsNext);
  };

  let player;
  let winnerText;
  const winner = calculateWinner(boardSquares);

  player = xIsNext ? `X'S Turn` : `O'S Turn`;
  winnerText = winner === "tie" ? `It's a Tie!` : `${winner} WINS!`;

  useEffect(() => {
    if (winner === "X") {
      setScores({ ...scores, xScore: scores.xScore + 1 });
    } else if (winner === "O") {
      setScores({ ...scores, oScore: scores.oScore + 1 });
    }
  }, [winner]);

  const restartGame = () => {
    setboardSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className={styles.boardWrapper}>
      <div className={styles.winnerText}>{winner ? winnerText : player}</div>
      <div className={styles.board}>
        {BoardArray.map((_square, index) => {
          return (
            <Squares
              key={index}
              value={boardSquares[index]}
              handleClick={() => handleClick(index)}
            />
          );
        })}
      </div>
      {winner && (
        <button className={styles.gameBtn} onClick={restartGame}>
          Play Again
        </button>
      )}
      {((winner && oScore > 1) || (winner && xScore > 1)) && (
        <button className={(styles.gameBtn, styles.seeRecordBtn)}>
          <Link to="/record" state={{ winner, xScore, oScore }}>
            See Record
          </Link>
        </button>
      )}
    </div>
  );
};

export default Board;
