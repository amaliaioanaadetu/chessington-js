import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import gameSettings from "../gameSettings";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves: Square[] = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                let currentPiece = board.getPiece(new Square(row, col))
                if (currentPiece instanceof King){
                    if (col + 1 < gameSettings.BOARD_SIZE)
                        if ((board.getPiece(new Square(row, col + 1)))?.player !== currentPiece.player && !(board.getPiece(new Square(row, col + 1)) instanceof King))
                            moves.push(Square.at(row, col + 1))
                    if (row + 1 < gameSettings.BOARD_SIZE && col + 1 < gameSettings.BOARD_SIZE)
                        if ((board.getPiece(new Square(row + 1, col + 1)))?.player !== currentPiece.player && !(board.getPiece(new Square(row + 1, col + 1)) instanceof King))
                            moves.push(Square.at(row + 1, col + 1))
                    if (row + 1 < gameSettings.BOARD_SIZE)
                        if ((board.getPiece(new Square(row + 1, col)))?.player !== currentPiece.player && !(board.getPiece(new Square(row + 1, col)) instanceof King))
                            moves.push(Square.at(row + 1, col))
                    if (row + 1 < gameSettings.BOARD_SIZE && col - 1 >= 0)
                        if ((board.getPiece(new Square(row + 1, col - 1)))?.player !== currentPiece.player && !(board.getPiece(new Square(row + 1, col - 1)) instanceof King))
                            moves.push(Square.at(row + 1, col - 1))
                    if (col - 1 >= 0)
                        if ((board.getPiece(new Square(row, col - 1)))?.player !== currentPiece.player && !(board.getPiece(new Square(row, col - 1)) instanceof King))
                            moves.push(Square.at(row, col - 1))
                    if (row - 1 >= 0 && col - 1 >= 0)
                        if ((board.getPiece(new Square(row - 1, col - 1)))?.player !== currentPiece.player && !(board.getPiece(new Square(row - 1, col - 1)) instanceof King))
                            moves.push(Square.at(row - 1, col - 1))
                    if (row - 1 >= 0)
                        if ((board.getPiece(new Square(row - 1, col)))?.player !== currentPiece.player && !(board.getPiece(new Square(row - 1, col)) instanceof King))
                            moves.push(Square.at(row - 1, col))
                    if (row - 1 >= 0 && col + 1 < gameSettings.BOARD_SIZE)
                        if ((board.getPiece(new Square(row - 1, col + 1)))?.player !== currentPiece.player && !(board.getPiece(new Square(row - 1, col + 1)) instanceof King))
                            moves.push(Square.at(row - 1, col + 1))
                }
            }
        }
        return moves;
    }
}
