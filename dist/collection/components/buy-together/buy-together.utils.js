export const checkIsOutReleaseDate = (data) => {
    const { releaseDate: releaseDateObj } = data || {};
    if (!releaseDateObj)
        return true;
    const { now, releaseDate } = releaseDateObj;
    return Number(now) >= Number(releaseDate);
};
export const checkHasBalance = (data) => {
    const { balance, isSellOutOfStock } = data || {};
    return (!!balance && balance > 0) || isSellOutOfStock;
};
export const checkHasPrice = (data) => {
    const { price } = data || {};
    return price && !!Number(price);
};
//# sourceMappingURL=buy-together.utils.js.map
