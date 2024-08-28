import './App.css';
import { FaChessRook } from "react-icons/fa";
import { FaRegChessPawn } from "react-icons/fa6";
import { FaChessPawn } from "react-icons/fa6";
import { FaChessKing } from "react-icons/fa";
import { FaChessBishop } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa";
import { FaRegChessBishop } from "react-icons/fa6";
import { FaRegChessKing } from "react-icons/fa6";
import { FaRegChessKnight } from "react-icons/fa6";
import { FaRegChessRook } from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";


function App() {
  return (
    <div class="chessboard">
      <div class="board-row">
        <button class="board-cell black"><FaRegChessRook />git </button>
        <button class="board-cell white"><FaRegChessPawn /></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"><FaChessPawn /></button>
        <button class="board-cell white"><FaChessRook /></button>
    </div>
      <div class="board-row">
        <button class="board-cell white"><FaRegChessKnight /></button>
        <button class="board-cell black"><FaRegChessPawn /></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"><FaChessPawn /></button>
        <button class="board-cell black"><FaChessKnight /></button>
    </div>
      <div class="board-row">
        <button class="board-cell black"><FaRegChessBishop /></button>
        <button class="board-cell white"><FaRegChessPawn /></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"><FaChessPawn /></button>
        <button class="board-cell white"><FaChessBishop /></button>
    </div>
      <div class="board-row">
        <button class="board-cell white"><FaRegChessQueen /></button>
        <button class="board-cell black"><FaRegChessPawn /></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"><FaChessPawn /></button>
        <button class="board-cell black"><FaChessKing /></button>
    </div>
      <div class="board-row">
        <button class="board-cell black"><FaRegChessKing /></button>
        <button class="board-cell white"><FaRegChessPawn /></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"><FaChessPawn /></button>
        <button class="board-cell white"><FaChessQueen /></button>
    </div>
      <div class="board-row">
        <button class="board-cell white"><FaRegChessBishop /></button>
        <button class="board-cell black"><FaRegChessPawn /></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"><FaChessPawn /></button>
        <button class="board-cell black"><FaChessBishop /></button>
    </div>
      <div class="board-row">
        <button class="board-cell black"><FaRegChessKnight /></button>
        <button class="board-cell white"><FaRegChessPawn /></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"><FaChessPawn /></button>
        <button class="board-cell white"><FaChessKnight /></button>
    </div>
      <div class="board-row">
        <button class="board-cell white"><FaRegChessRook />
        </button>
        <button class="board-cell black"><FaRegChessPawn /></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"></button>
        <button class="board-cell black"></button>
        <button class="board-cell white"><FaChessPawn /></button>
        <button class="board-cell black"><FaChessRook /></button>
    </div>
    </div>
  );
}

export default App;
