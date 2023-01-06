import { useState } from "react";
import styles from "./HomeScreenCss.module.css";
import { useNavigate } from "react-router";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [isXGreen, setIsXGreen] = useState<boolean>(false);
  const [isOGreen, setIsOGreen] = useState<boolean>(false);
  return (
    <div className={styles.homeWrapper}>
      <h1 className={styles.welcome}>Welcome</h1>
      <div className={styles.player}>Pick Your Player</div>
      <div className={styles.xo}>
        <div
          onClick={() => {
            setIsXGreen(!isXGreen);
            setIsOGreen(false);
          }}
          style={
            isXGreen
              ? { borderBottom: "5px solid #5CB85C" }
              : { borderBottom: "5px solid #D8D8D8" }
          }
        >
          X
        </div>
        <div
          onClick={() => {
            setIsOGreen(!isOGreen);
            setIsXGreen(false);
          }}
          style={
            isOGreen
              ? { borderBottom: "5px solid #5CB85C" }
              : { borderBottom: "5px solid #D8D8D8" }
          }
        >
          O
        </div>
      </div>
      <button className={styles.homeBtn} onClick={() => navigate("/waiting")}>
        Match me with My Opponent
      </button>
    </div>
  );
};

export default HomeScreen;
