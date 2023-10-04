import { currencyFormat } from './utils';

describe('format', () => {
  it('format number as currency BRL', () => {
    expect(currencyFormat(250.0)).toEqual('R$ 250,00');
  });
});
