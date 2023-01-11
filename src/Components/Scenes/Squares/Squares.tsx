import styles from "./SquaresCss.module.css";

const Squares = ({ handleClick, value }: SquaresProps) => {
  return (
    <button className={styles.square} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Squares;

interface SquaresProps {
  handleClick: () => void;
  value: string;
}
