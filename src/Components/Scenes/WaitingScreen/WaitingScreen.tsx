import { useEffect } from "react";
import styles from "./WaitingScreenCss.module.css";
import { useNavigate } from "react-router";

const WaitingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/game");
    }, 1000);
  }, []);

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.opponent}>Waiting to find your opponent...</div>
      <div className={styles.xo}>
        <div>X</div>
        <div>O</div>
      </div>
    </div>
  );
};

export default WaitingScreen;
