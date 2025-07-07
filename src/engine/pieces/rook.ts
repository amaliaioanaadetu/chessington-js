import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import gameSettings from "../gameSettings";
import King from "./king";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                let currentPiece = board.getPiece(new Square(row, col))
                if (currentPiece instanceof Rook){
                    for (let r = 0; r < gameSettings.BOARD_SIZE; r++){
                        if (r !== row){
                            if (board.getPiece(new Square(r, col)) !== undefined){
                                if ((board.getPiece(new Square(r, col)))?.player !== currentPiece.player && !(board.getPiece(new Square(r, col)) instanceof King))
                                    moves.push(Square.at(r, col))
                                break;
                            }
                            moves.push(Square.at(r, col))
                        }

                    }

                    for (let c = 0; c < gameSettings.BOARD_SIZE; c++ ){
                        if (c !== col){
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
        }

        return moves;
    }
}
