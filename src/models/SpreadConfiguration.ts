export enum Side {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum SymbolEnum {
  BTC = 'BTC',
  ETH = 'ETH',
}

export enum SpreadType {
  WORKING_HOURS = 1,
  NIGHT_SHIFT,
}

export interface SpreadConfiguration {
  id: number;
  spreadTypeId: SpreadType;
  accountId: number;
  symbol: SymbolEnum;
  side: Side;
  notionalFrom: number;
  notionalTo: number;
  spreadPercentil: number;
}
