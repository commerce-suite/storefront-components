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

export function extractYouTubeVideoId(url: string) {
  if (!url) return null;

  const regex = /(?:watch\?v=|live\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);

  return match ? match[1] : null;
}
