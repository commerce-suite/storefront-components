import { Product } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';

export const checkIsOutReleaseDate = (data?: Partial<Product>) => {
  const { releaseDate: releaseDateObj } = data || {};
  if (!releaseDateObj) return true;
  const { now, releaseDate } = releaseDateObj;
  return Number(now) >= Number(releaseDate);
};

export const checkHasBalance = (data?: Partial<Product>) => {
  const { balance } = data || {};
  return !!balance && balance > 0;
};

export const checkHasPrice = (data?: Partial<Product>) => {
  const { price } = data || {};
  return price && !!Number(price);
};
