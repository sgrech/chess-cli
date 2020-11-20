export enum PieceColors {
  WHITE,
  BLACK,
}

export enum PieceSymbols {
  ROOK = "R",
  KNIGHT = "N",
  BISHOP = "B",
  QUEEN = "Q",
  KING = "K",
  PAWN = "P",
}

export interface Position {
  column: number;
  row: number;
}
