import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styles from "../Board/BoardCss.module.css";

const Records = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [xLosses, setXLosses] = useState(0);
  const [xWins, setXWins] = useState(0);
  const [oLosses, setOLosses] = useState(0);
  const [oWins, setOWins] = useState(0);
  const { winner, xScore, oScore } = location.state;

  useEffect(() => {
    if (winner === "X" && oScore === 0) {
      setXWins(xScore);
    } else if (winner === "O" && xScore === 0) {
      setOWins(oScore);
    } else if (winner === "X" && oScore !== 0) {
      setXWins(xScore);
      setXLosses(xScore - oScore);
    } else if (winner === "O" && xScore !== 0) {
      setOWins(oScore);
      setOLosses(oScore - xScore);
    }
  }, [winner]);

  return (
    <div
      className="h-[530px] w-[320px] bg-gradient-blueish"
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: "Helvetica Neue",
          fontStyle: "normal",
          fontWeight: 300,
          fontSize: 20,
          textTransform: "uppercase",
          marginBottom: 49,
        }}
      >
        <div style={{ marginBottom: 90 }}>{winner} Wins!</div>
        <div>
          {winner === "X"
            ? `You have won ${xWins} times and lost ${xLosses}`
            : `You have won ${oWins} times and lost ${oLosses}`}
        </div>
      </div>
      <button
        style={{ marginTop: 50 }}
        className={styles.gameBtn}
        onClick={() => navigate("/")}
      >
        Play Again
      </button>
    </div>
  );
};

export default Records;
