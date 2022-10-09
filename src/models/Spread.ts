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

export interface Spread {
  id: number;
  spreadTypeId: SpreadType;
  accountId: number;
  symbol: SymbolEnum;
  side: Side;
  notionalFrom: number;
  notionalTo: number;
  spreadPercentil: number;
}

export enum Spreadcessor {
  ACCOUNT_ID = 'accountId',
  SPREAD_TYPE = 'spreadTypeId',
  SYMBOL = 'symbol',
  SIDE = 'side',
  NOTIONAL_FROM = 'notionalFrom',
  NOTIONAL_TO = 'notionalTo',
  SPREAD_PERCENTIL = 'spreadPercentil',
}
