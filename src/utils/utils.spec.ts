import { currencyFormat, getClassByProps } from './utils';

describe('format', () => {
  it('format number as currency BRL', () => {
    expect(currencyFormat(250.0)).toEqual('R$ 250,00');
  });

  it('get class that is true, given one object props with class -> booelan', () => {
    const classByProps = {
      '-inline': true,
      '-test': false,
      '-primary': true,
    };
    expect(getClassByProps(classByProps)).toEqual('-inline -primary');
  });
});
