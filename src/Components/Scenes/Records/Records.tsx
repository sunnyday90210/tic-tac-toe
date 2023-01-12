import { useLocation, useNavigate } from "react-router";
import styles from "./RecordsCss.module.css";

const Records = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { winner, xScore, oScore } = location.state;

  return (
    <div className={styles.recordsWrapper}>
      <div className={styles.winnerText}>
        <div style={{ marginBottom: 90 }}>{winner} Wins!</div>
        <div>
          {winner === "X"
            ? `You have won ${xScore} times and lost ${oScore}`
            : `You have won ${oScore} times and lost ${xScore}`}
        </div>
      </div>
      <button className={styles.recordBtn} onClick={() => navigate("/")}>
        Play Again
      </button>
    </div>
  );
};

export default Records;
