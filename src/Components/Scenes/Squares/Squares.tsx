const Squares = ({ handleClick, value }: SquaresProps) => {
  return (
    <button className="btn-style" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Squares;

interface SquaresProps {
  handleClick: () => void;
  value: string;
}
