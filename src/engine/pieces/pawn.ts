import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                // let currSquare = new Square(row, col);
                let currentPiece = board.getPiece(new Square(row, col))
                if (currentPiece instanceof Pawn){
                    if (currentPiece.player === Player.WHITE){
                        moves.push(Square.at(row + 1, col))
                    }
                    else{
                        moves.push(Square.at(row - 1, col))
                    }

                }
                // console.log(currentPiece instanceof Queen)
            }
        }


        // board.findPiece(board.currentPlayer)
        // let square = Square.at(0, 0)
        // console.log(board[square.row][square.col])
        return moves;
    }
}
