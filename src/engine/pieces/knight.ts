import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import gameSettings from "../gameSettings";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves:Square[] = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                let currentPiece = board.getPiece(new Square(row, col))
                if (currentPiece instanceof Knight){
                    if (row + 2 < gameSettings.BOARD_SIZE && col + 1 < gameSettings.BOARD_SIZE)
                        moves.push(Square.at(row + 2, col + 1))
                    if (row + 2 < gameSettings.BOARD_SIZE && col - 1 >= 0)
                        moves.push(Square.at(row + 2, col - 1))
                    if (row - 2 >= 0 && col + 1 < gameSettings.BOARD_SIZE)
                        moves.push(Square.at(row - 2, col + 1))
                    if (row - 2 >= 0 && col - 1 >= 0)
                        moves.push(Square.at(row - 2, col - 1))
                    if (row + 1 < gameSettings.BOARD_SIZE && col + 2 < gameSettings.BOARD_SIZE)
                        moves.push(Square.at(row + 1, col + 2))
                    if (row + 1 < gameSettings.BOARD_SIZE && col - 2 >= 0)
                        moves.push(Square.at(row + 1, col - 2))
                    if (row - 1 >= 0 && col + 2 < gameSettings.BOARD_SIZE)
                        moves.push(Square.at(row - 1, col + 2))
                    if (row - 1 >= 0 && col - 2 >= 0)
                        moves.push(Square.at(row - 1, col - 2))
                }
            }
        }
        return moves;
    }
}
