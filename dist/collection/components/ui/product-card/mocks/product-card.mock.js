const product = {
    id: 1234,
    image: {
        src: 'https://cdn.dooca.store/816/products/camiseta-ce-e-fi-de-quem-marrom_1600x2000+fill_ffffff.jpg?v=1686845906',
    },
    name: 'Bolsa Essencial',
    price: 389.9,
    priceBase: 499.99,
};
const productWithSpecialPrice = {
    id: 1234,
    image: {
        src: 'https://cdn.dooca.store/816/products/camiseta-ce-e-fi-de-quem-marrom_1600x2000+fill_ffffff.jpg?v=1686845906',
    },
    name: 'Bolsa Essencial',
    price: 389.9,
    priceBase: 499.99,
    specialPrice: 299.9,
};
const variations = [
    {
        label: 'Cor',
        options: [
            { name: 'branco', value: '12321' },
            { name: 'azul', value: '12321' },
        ],
        currentValue: '12321',
        selectType: 'color',
    },
    {
        label: 'Tamanho',
        options: [
            { name: 'M', value: '789' },
            { name: 'P', value: '456' },
            { name: 'G', value: '123' },
        ],
        currentValue: '456',
        selectType: 'attributes',
    },
];
const productWithVariations = Object.assign(Object.assign({}, product), { selectVariations: variations });
export { product, productWithVariations, productWithSpecialPrice };
//# sourceMappingURL=product-card.mock.js.map
