const RESET = "\x1b[0m";
const BRIGHT = "\x1b[1m";
const DIM = "\x1b[2m";
const UNDERSCORE = "\x1b[4m";
const BLINK = "\x1b[5m";
const REVERSE = "\x1b[7m";
const HIDDEN = "\x1b[8m";

const FGBLACK = "\x1b[30m";
const FGRED = "\x1b[31m";
const FGGREEN = "\x1b[32m";
const FGYELLOW = "\x1b[33m";
const FGBLUE = "\x1b[34m";
const FGMAGENTA = "\x1b[35m";
const FGCYAN = "\x1b[36m";
const FGWHITE = "\x1b[37m";

const BGBLACK = "\x1b[40m";
const BGRED = "\x1b[41m";
const BGGREEN = "\x1b[42m";
const BGYELLOW = "\x1b[43m";
const BGBLUE = "\x1b[44m";
const BGMAGENTA = "\x1b[45m";
const BGCYAN = "\x1b[46m";
const BGWHITE = "\x1b[47m";

const WKING = `${FGWHITE}K`;
const WQUEEN = `${FGWHITE}Q`;
const WROOK = `${FGWHITE}R`;
const WBISHOP = `${FGWHITE}B`;
const WKNIGHT = `${FGWHITE}N`;
const WPAWN = `${FGWHITE}P`;

const BKING = `${FGBLACK}K`;
const BQUEEN = `${FGBLACK}Q`;
const BROOK = `${FGBLACK}R`;
const BBISHOP = `${FGBLACK}B`;
const BKNIGHT = `${FGBLACK}N`;
const BPAWN = `${FGBLACK}P`;

const EMPTY = " ";
const ROWS = ["8", "7", "6", "5", "4", "3", "2", "1"];
const COLUMNS = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface coordinate {
  column: number;
  row: number;
}

// const WKING = "\u2654";
// const WQUEEN = "\u2655";
// const WROOK = "\u2656";
// const WBISHOP = "\u2657";
// const WKNIGHT = "\u2658";
// const WPAWN = "\u2659";

// const BKING = "\u265A";
// const BQUEEN = "\u265B";
// const BROOK = "\u265C";
// const BBISHOP = "\u265D";
// const BKNIGHT = "\u265E";
// const BPAWN = "\u265F";

function printRow(rowString: Array<string>, row: string, alt = false): void {
  let rowOutput = `  ${row}  `;
  let padding = "     ";
  for (let i = 0; i < rowString.length; i++) {
    if (i % 2 === 0) {
      rowOutput += `${alt ? BGMAGENTA : BGCYAN}   ${rowString[i]}   `;
      padding += `${alt ? BGMAGENTA : BGCYAN}       `;
    } else {
      rowOutput += `${alt ? BGCYAN : BGMAGENTA}   ${rowString[i]}   `;
      padding += `${alt ? BGCYAN : BGMAGENTA}       `;
    }
  }
  rowOutput += `${RESET}`;
  padding += `${RESET}`;
  console.log(padding);
  console.log(rowOutput);
  console.log(padding);
}

function printRowFooter(): void {
  let rowFooter = "     ";
  for (const column of COLUMNS) {
    rowFooter += `   ${column}   `;
  }
  console.log("");
  console.log(rowFooter);
}

function getCoordinate(pos: string): coordinate {
  const [cColumn, cRow] = pos.split("");
  const column = COLUMNS.indexOf(cColumn);
  const row = ROWS.indexOf(cRow);

  return { row, column };
}

function getPawnCoordinates(
  pos: string,
  whiteToMove: boolean
): Array<coordinate> {
  const targetCoordinate = getCoordinate(pos);
  const originCoordinates = [];
  if (whiteToMove) {
    if (targetCoordinate.row === 4) {
      originCoordinates.push(
        { row: targetCoordinate.row + 1, column: targetCoordinate.column },
        { row: targetCoordinate.row + 2, column: targetCoordinate.column }
      );
    } else {
      originCoordinates.push({
        row: targetCoordinate.row + 1,
        column: targetCoordinate.column,
      });
    }
  } else {
    if (targetCoordinate.row === 3) {
      originCoordinates.push(
        { row: targetCoordinate.row - 1, column: targetCoordinate.column },
        { row: targetCoordinate.row - 2, column: targetCoordinate.column }
      );
    } else {
      originCoordinates.push({
        row: targetCoordinate.row - 1,
        column: targetCoordinate.column,
      });
    }
  }
  return originCoordinates;
}

function movePiece(
  board: string[][],
  move: string,
  whiteToMove: boolean
): string[][] {
  const pawnCoordinates = getPawnCoordinates(move, whiteToMove);
  const targetPawnCoordinates = getCoordinate(move);
  let isMoveValid = false;
  let pawnToMove: coordinate = { row: 0, column: 0 };
  const pawnPieceToMove = whiteToMove ? WPAWN : BPAWN;
  for (const pawnCoordinate of pawnCoordinates) {
    if (board[pawnCoordinate.row][pawnCoordinate.column] === pawnPieceToMove) {
      isMoveValid = true;
      pawnToMove = pawnCoordinate;
    }
  }
  if (isMoveValid) {
    board[pawnToMove.row][pawnToMove.column] = EMPTY;
    board[targetPawnCoordinates.row][
      targetPawnCoordinates.column
    ] = pawnPieceToMove;
  }
  return board;
}

const board = [
  [BROOK, BKNIGHT, BBISHOP, BQUEEN, BKING, BBISHOP, BKNIGHT, BROOK],
  [BPAWN, BPAWN, BPAWN, BPAWN, BPAWN, BPAWN, BPAWN, BPAWN],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [WPAWN, WPAWN, WPAWN, WPAWN, WPAWN, WPAWN, WPAWN, WPAWN],
  [WROOK, WKNIGHT, WBISHOP, WQUEEN, WKING, WBISHOP, WKNIGHT, WROOK],
];

function printBoard(board: string[][]) {
  for (let row = 0; row < board.length; row++) {
    printRow(board[row], ROWS[row], row % 2 !== 0);
  }

  printRowFooter();
}

printBoard(movePiece(board, "a5", true));
printBoard(movePiece(board, "a6", false));
