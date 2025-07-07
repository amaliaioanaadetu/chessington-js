import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import gameSettings from "../gameSettings";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                let currentPiece = board.getPiece(new Square(row, col))
                if (currentPiece instanceof Queen){
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

                    for (let r = row - 1; r >= 0; r--){
                        if (board.getPiece(new Square(r, col)) !== undefined){
                            break;
                        }
                        moves.push(Square.at(r, col))
                    }

                    for (let r = row + 1; r < gameSettings.BOARD_SIZE; r++){
                        if (board.getPiece(new Square(r, col)) !== undefined){
                            break;
                        }
                        moves.push(Square.at(r, col))
                    }

                    for (let c = col + 1; c < gameSettings.BOARD_SIZE; c++){
                        if (board.getPiece(new Square(row, c)) !== undefined){
                            break;
                        }
                        moves.push(Square.at(row, c))
                    }

                    for (let c = col - 1; c >= 0; c--){
                        if (board.getPiece(new Square(row, c)) !== undefined){
                            break;
                        }
                        moves.push(Square.at(row, c))
                    }

                }
            }
        }

        return moves;
    }
}
