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

export { currencyFormat as c, getClassByProps as g };

//# sourceMappingURL=utils.js.map