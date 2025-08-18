import { Env } from "@stencil/core";
export function currencyFormat(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}
export function getClassByProps(classByProps) {
    return Object.keys(classByProps)
        .filter(key => classByProps[key])
        .map(key => key)
        .join(' ');
}
export function extractYouTubeVideoId(url) {
    if (!url)
        return null;
    const regex = /(?:watch\?v=|live\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
export function transformMediaUrl(mediaUrl) {
    const cdnUrl = Env.CDN_URL;
    const shopId = window.dooca.shop_id;
    const baseUrl = `${cdnUrl}/${shopId}`;
    if (mediaUrl.startsWith('media://')) {
        return mediaUrl.replace('media://', `${baseUrl}/`);
    }
    return mediaUrl;
}
//# sourceMappingURL=utils.js.map
