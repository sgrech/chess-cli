import { ChessPiece } from "./ChessPiece";
import { PieceColors, PieceSymbols } from "../types/chess";

export class BlackPawn extends ChessPiece {
  constructor(position: Position) {
    super(PieceColors.BLACK, position, PieceSymbols.PAWN);
  }

  move(nextPosition: string) {
    console.log(nextPosition);
  }
}
