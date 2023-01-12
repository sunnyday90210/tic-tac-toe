import { useState } from "react";
import styles from "./HomeScreenCss.module.css";
import { useNavigate } from "react-router";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<"O" | "X" | "none">("none");
  return (
    <div className={styles.homeWrapper}>
      <h1 className={styles.welcome}>Welcome</h1>
      <div className={styles.player}>Pick Your Player</div>
      <div className={styles.xo}>
        <div
          onClick={() => {
            if (selected !== "X") {
              setSelected("X");
            } else {
              setSelected("none");
            }
          }}
          style={{
            borderBottomColor: selected === "X" ? "#5CB85C" : "#D8D8D8",
          }}
        >
          X
        </div>
        <div
          onClick={() => {
            if (selected !== "O") {
              setSelected("O");
            } else {
              setSelected("none");
            }
          }}
          style={{
            borderBottomColor: selected === "O" ? "#5CB85C" : "#D8D8D8",
          }}
        >
          O
        </div>
      </div>
      <button
        disabled={selected === "none"}
        className={styles.homeBtn}
        onClick={() => navigate("/waiting")}
      >
        Match me with My Opponent
      </button>
    </div>
  );
};

export default HomeScreen;
