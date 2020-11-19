# chess-cli notes

## Entities

### Chess Piece

- symbol
- colour
- tile position
- movement rules
- special movement rules

### Board

- fixed number of tiles
- chess pieces
- rows `{1..8}`
- columns `{a..h}`

### Tiles

- row number
- column letter
- colour
- occupied

## Movement

- all moves that expose the same colour king piece to capture are invalid
- three possible movement types
  - piece has never moved before
  - piece is unobstructed
  - piece does not end outside of board

### Pawns

- can move two tiles vertically if on starting tile
- can move one tile vertically if next tile is unoccupied
- can move one tile diagonally if diagonal tile is occupied by other colored piece
- can move one tile diagonally if other colored pawn moves two tiles and occupies tile horizontally next to pawn
- when piece has moved to the last row opposite starting point, it can be substituted with any other piece

#### White Pawn

- can only move upwards

#### Black Pawn

- can only move downwards

### Rooks

- can move horizontally up to and including any occupied tile
- can move vertically up to and including any occupied tile

### Knights

- can move two tiles vertically and one tile horizontally, or two tiles horizontally and one tile vertically

### Bishops

- can move diagonally up to and including any occupied tile

### Queen

- can move horizontally up to and including any occupied tile
- can move vertically up to and including any occupied tile
- can move diagonally up to and including any occupied tile

### King

- can move one tile horizontally
- can move one tile vertically
- can move one tile diagonally
- can do any of the above movements as long as it does not expose the piece to capture
- can move two tiles vertically if
  - the piece has never moved before
  - the rook positioned in the direction the piece is moving has never moved
  - the tiles between the piece and rook, in the direction of the movement, are not occupied
  - the tiles between the piece and rook, in the direction of the movement, are not threated by any opposing piece
- when the piece moves two tiles vertically, the rook in the direction of the movement will occupy the tile next to piece, opposite the direction the piece has moved

