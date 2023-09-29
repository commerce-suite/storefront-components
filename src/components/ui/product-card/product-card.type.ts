interface IImage {
  src: string;
  alt?: string;
}

export interface IProductCard {
  name: string;
  image: IImage;
  price: number;
  priceBase?: number;
}
