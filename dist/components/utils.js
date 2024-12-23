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

export { currencyFormat as c, extractYouTubeVideoId as e, getClassByProps as g };

//# sourceMappingURL=utils.js.map