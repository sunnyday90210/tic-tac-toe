const Squares = ({ handleClick, value }: SquaresProps) => {
  return (
    <button
      className="h-[83.3px] w-[83.3px] border border-black"
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Squares;

interface SquaresProps {
  handleClick: () => void;
  value: string;
}
