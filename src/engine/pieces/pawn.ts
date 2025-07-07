import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import gameSettings from "../gameSettings";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves = [];
        console.log(board)
        for (let row = 0; row < gameSettings.BOARD_SIZE; row++) {
            for (let col = 0; col < gameSettings.BOARD_SIZE; col++) {
                let currentPiece = board.getPiece(new Square(row, col))
                if (currentPiece instanceof Pawn){
                    console.log(row, col)
                    if (currentPiece.player === Player.WHITE){
                        if (row + 1 < gameSettings.BOARD_SIZE && board.getPiece(new Square(row + 1, col)) === undefined){
                            moves.push(Square.at(row + 1, col))
                        }
                        else{
                            continue
                        }
                        if (row === 1 && board.getPiece(new Square(row + 2, col)) === undefined && board.getPiece(new Square(row + 2, col)) === undefined){
                            moves.push(Square.at(row + 2, col))
                        }


                    }
                    else{
                        if (row - 1 >= 0 && board.getPiece(new Square(row - 1, col)) === undefined){
                            moves.push(Square.at(row - 1, col))
                        }
                        else{
                            continue
                        }

                        if (row === gameSettings.BOARD_SIZE - 2 && board.getPiece(new Square(row - 2, col)) === undefined){
                            moves.push(Square.at(row - 2, col))
                        }


                    }

                }
            }
        }

        return moves;
    }
}
