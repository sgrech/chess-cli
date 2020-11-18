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

interface Piece {
  color: PieceColors;
  position: Position;
  pieceType: Pieces;
}

class ChessPiece {
  piece: Piece;
  constructor(color: PieceColors, position: Position, pieceType: Pieces) {
    this.piece = { color, pieceType, position };
  }
}
