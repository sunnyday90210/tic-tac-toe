import styles from "./SquaresCss.module.css";

const Squares = ({
  handleClick,
  value,
  winningSquars,
  index,
}: SquaresProps) => {
  return (
    <button
      className={styles.square}
      onClick={handleClick}
      style={
        winningSquars?.includes(index)
          ? { backgroundColor: "#5CB85C" }
          : { backgroundColor: "" }
      }
    >
      {value}
    </button>
  );
};

export default Squares;

interface SquaresProps {
  handleClick: () => void;
  value: string;
  winningSquars: number[] | undefined;
  index: number;
}
