const Squares = ({ handleClick, value }: SquaresProps) => {
  return (
    <button
      className="h-[50px] w-[50px] border border-black"
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
