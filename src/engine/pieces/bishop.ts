import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import gameSettings from "../gameSettings";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                let currentPiece = board.getPiece(new Square(row, col))
                if (currentPiece instanceof Bishop){
                    for (let squares = 1; squares <= row && squares <= col; squares++){
                        if (board.getPiece(new Square(row - squares, col - squares)) !== undefined){
                            break;
                        }
                        moves.push(Square.at(row - squares, col - squares))
                    }

                    for (let squares = 1; squares < gameSettings.BOARD_SIZE - row && squares < gameSettings.BOARD_SIZE - col; squares++){
                        if (board.getPiece(new Square(row + squares, col + squares)) !== undefined){
                            break;
                        }
                        moves.push(Square.at(row + squares, col + squares))
                    }

                    for (let squares = 1; squares <= row && gameSettings.BOARD_SIZE - col; squares++){
                        if (board.getPiece(new Square(row - squares, col + squares)) !== undefined){
                            break;
                        }
                        moves.push(Square.at(row - squares, col + squares))
                    }

                    for (let squares = 1; squares < gameSettings.BOARD_SIZE - row && squares <= col; squares++){
                        if (board.getPiece(new Square(row + squares, col - squares)) !== undefined){
                            break;
                        }
                        moves.push(Square.at(row + squares, col - squares))
                    }

                }
            }
        }

        return moves;
    }
}
