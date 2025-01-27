import { Env } from '@stencil/core';

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

export function transformMediaUrl(mediaUrl: string) {
  const cdnUrl = Env.CDN_URL;
  const shopId = window.dooca.shop_id;
  const baseUrl = `${cdnUrl}/${shopId}`;
  if (mediaUrl.startsWith('media://')) {
    return mediaUrl.replace('media://', `${baseUrl}/`);
  }
  return mediaUrl;
}
