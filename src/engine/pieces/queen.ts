import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import gameSettings from "../gameSettings";
import King from "./king";

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
                            if ((board.getPiece(new Square(row - squares, col - squares)))?.player !== currentPiece.player && !(board.getPiece(new Square(row - squares, col - squares)) instanceof King))
                                moves.push(Square.at(row - squares, col - squares))
                            break;
                        }
                        moves.push(Square.at(row - squares, col - squares))
                    }

                    for (let squares = 1; squares < gameSettings.BOARD_SIZE - row && squares < gameSettings.BOARD_SIZE - col; squares++){
                        if (board.getPiece(new Square(row + squares, col + squares)) !== undefined){
                            if ((board.getPiece(new Square(row + squares, col + squares)))?.player !== currentPiece.player && !(board.getPiece(new Square(row + squares, col + squares)) instanceof King))
                                moves.push(Square.at(row + squares, col + squares))
                            break;
                        }
                        moves.push(Square.at(row + squares, col + squares))
                    }

                    for (let squares = 1; squares <= row && gameSettings.BOARD_SIZE - col; squares++){
                        if (board.getPiece(new Square(row - squares, col + squares)) !== undefined){
                            if ((board.getPiece(new Square(row - squares, col + squares)))?.player !== currentPiece.player && !(board.getPiece(new Square(row - squares, col + squares)) instanceof King))
                                moves.push(Square.at(row - squares, col + squares))
                            break;
                        }
                        moves.push(Square.at(row - squares, col + squares))
                    }

                    for (let squares = 1; squares < gameSettings.BOARD_SIZE - row && squares <= col; squares++){
                        if (board.getPiece(new Square(row + squares, col - squares)) !== undefined){
                            if ((board.getPiece(new Square(row + squares, col - squares)))?.player !== currentPiece.player && !(board.getPiece(new Square(row + squares, col - squares)) instanceof King))
                                moves.push(Square.at(row + squares, col - squares))
                            break;
                        }
                        moves.push(Square.at(row + squares, col - squares))
                    }

                    for (let r = row - 1; r >= 0; r--){
                        if (board.getPiece(new Square(r, col)) !== undefined){
                            if ((board.getPiece(new Square(r, col)))?.player !== currentPiece.player && !(board.getPiece(new Square(r, col)) instanceof King))
                                moves.push(Square.at(r, col))
                            break;
                        }
                        moves.push(Square.at(r, col))
                    }

                    for (let r = row + 1; r < gameSettings.BOARD_SIZE; r++){
                        if (board.getPiece(new Square(r, col)) !== undefined){
                            if ((board.getPiece(new Square(r, col)))?.player !== currentPiece.player && !(board.getPiece(new Square(r, col)) instanceof King))
                                moves.push(Square.at(r, col))
                            break;
                        }
                        moves.push(Square.at(r, col))
                    }

                    for (let c = col + 1; c < gameSettings.BOARD_SIZE; c++){
                        if (board.getPiece(new Square(row, c)) !== undefined){
                            if ((board.getPiece(new Square(row, c)))?.player !== currentPiece.player && !(board.getPiece(new Square(row, c)) instanceof King))
                                moves.push(Square.at(row, c))
                            break;
                        }
                        moves.push(Square.at(row, c))
                    }

                    for (let c = col - 1; c >= 0; c--){
                        if (board.getPiece(new Square(row, c)) !== undefined){
                            if ((board.getPiece(new Square(row, c)))?.player !== currentPiece.player && !(board.getPiece(new Square(row, c)) instanceof King))
                                moves.push(Square.at(row, c))
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
