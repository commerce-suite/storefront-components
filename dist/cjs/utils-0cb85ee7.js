'use strict';

const index = require('./index-53de1b7a.js');

function currencyFormat(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}
function getClassByProps(classByProps) {
    return Object.keys(classByProps)
        .filter(key => classByProps[key])
        .map(key => key)
        .join(' ');
}
function extractYouTubeVideoId(url) {
    if (!url)
        return null;
    const regex = /(?:watch\?v=|live\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
function transformMediaUrl(mediaUrl) {
    const cdnUrl = index.Env.CDN_URL;
    const shopId = window.dooca.shop_id;
    const baseUrl = `${cdnUrl}/${shopId}`;
    if (mediaUrl.startsWith('media://')) {
        return mediaUrl.replace('media://', `${baseUrl}/`);
    }
    return mediaUrl;
}

exports.currencyFormat = currencyFormat;
exports.extractYouTubeVideoId = extractYouTubeVideoId;
exports.getClassByProps = getClassByProps;
exports.transformMediaUrl = transformMediaUrl;

//# sourceMappingURL=utils-0cb85ee7.js.map