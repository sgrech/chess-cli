enum PieceColors {
  WHITE,
  BLACK,
}

enum Pieces {
  ROOK = "R",
  KNIGHT = "N",
  BISHOP = "B",
  QUEEN = "Q",
  KING = "K",
}

interface Position {
  column: number;
  row: number;
}

abstract class ChessPiece {
  constructor(color: PieceColors, position: Position, pieceType: Pieces) {}
}
