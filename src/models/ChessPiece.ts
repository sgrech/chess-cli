import { PieceColors, PieceSymbols } from "@interfaces/chess";

export abstract class ChessPiece {
  color: PieceColors;
  position: Position;
  pieceSymbol: PieceSymbols;

  constructor(
    color: PieceColors,
    position: Position,
    pieceSymbol: PieceSymbols
  ) {
    this.color = color;
    this.position = position;
    this.pieceSymbol = pieceSymbol;
  }

  abstract move(nextPosition: string): void;
}
