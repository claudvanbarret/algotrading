export enum Side {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum SymbolEnum {
  BTC = 'BTC',
  ETH = 'ETH',
}

export interface SpreadConfiguration {
  id: number;
  spreadTypeId: number;
  accountId: number;
  symbol: SymbolEnum;
  side: Side;
  notionalFrom: number;
  notionalTo: number;
  spreadPercentil: number;
}
