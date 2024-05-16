
export type BoardState = Array<Array<string | null>>;

export type GameTurn = {
  square: { row: number, col: number },
  player: string
};

export type GameTurnsType = GameTurn[];

export type PlayersType = Record<string, string>;

export type HandleRestartMatchType = () => void;

export type OnSelectSquareType = (rowIndex: number, colIndex: number) => void;

export type onChangeNameType = (symbol: string, playerName: string) => void;
