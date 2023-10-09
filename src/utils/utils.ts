export function currencyFormat(value: number) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function getClassByProps(classByProps: { [key: string]: boolean }): string {
  return Object.keys(classByProps)
    .filter(key => classByProps[key])
    .map(key => key)
    .join(' ');
}
