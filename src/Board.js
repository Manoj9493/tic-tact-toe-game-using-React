import Square from "./Square";
import calculateWinner from "./CalculateWinner";

export default function Board(props) {
  const { xIsNext, squares, onPlay } = props;
  let status;
  const winner = calculateWinner(squares);

  if (squares.includes(null)) {
    if (winner) {
      status = "Winner is : " + winner;
    } else {
      status = "Next player is: " + (xIsNext ? "X" : "O");
    }
  } else {
    status = "Match is Drawn";
  }

  const handleClick = (i) => {
    console.log("SquareChange Initialized" + " " + i);
    if (squares[i] || winner) {
      return;
    }
    const newSquares = squares.slice();
    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    onPlay(newSquares, !xIsNext);
  };

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
