import React from 'react';

const Chessboard = () => {
  const renderSquare = (row, col) => {
    const isBlackSquare = (row + col) % 2 === 1;
    return (
      <div
        key={`${row}-${col}`}
        className={`square ${isBlackSquare ? 'black' : 'white'}`}
      />
    );
  };

  const createBoard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      const squares = [];
      for (let col = 0; col < 8; col++) {
        squares.push(renderSquare(row, col));
      }
      board.push(
        <div key={row} className="board-row">
          {squares}
        </div>
      );
    }
    return board;
  };

  return <div className="chessboard">{createBoard()}</div>;
};

export default Chessboard;