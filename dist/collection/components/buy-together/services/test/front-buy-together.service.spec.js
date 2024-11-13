import { buyTogetherData } from "../__mocks__/buy-together-data.mock";
jest.mock('@uxshop/storefront-core');
import { FrontBuyTogetherService } from "../front-buy-together.service";
describe('FrontBuyTogetherService', () => {
    const service = new FrontBuyTogetherService();
    const data = buyTogetherData;
    it('It should change Color for data api and productCard', () => {
        const { productCard, productTargetUpdated } = service.changeColor('266425', data.product);
        const color = {
            id: 266425,
            name: 'Lilas Claro',
            slug: 'lilas-claro',
            hexadecimal: '#A565A1',
            position: 2,
        };
        const image = {
            productId: null,
            src: 'https://optimizer.dchomolog.dooca.store/103779/products/ct23970002-a-107x1-1.jpg?v=1696602536',
            alt: null,
            colorIds: [266425],
            variationIds: [],
            position: 2,
        };
        const idVariationSelected = '9480237';
        expect(productTargetUpdated.color).toEqual(color);
        expect(productTargetUpdated.id).toEqual(idVariationSelected);
        expect(productTargetUpdated.images).toEqual([image]);
        expect(productCard.id).toEqual(idVariationSelected);
        expect(productCard.image.src).toEqual(image.src);
        expect(productCard.selectVariations.find(({ selectType }) => selectType === 'color').currentValue).toEqual(color.id);
    });
    it('It should change Attribute for data api and productCard', () => {
        const { productCard, productTargetUpdated } = service.changeAttribute('462521', data.product);
        const attribute = {
            id: 462521,
            name: '36',
            slug: '36',
            attributeId: 74679,
            attributeName: 'Tamanho calçados',
            position: 2,
            isActive: true,
        };
        const idVariationSelected = '9480247';
        expect(productTargetUpdated.attribute).toEqual(attribute);
        expect(productTargetUpdated.id).toEqual(idVariationSelected);
        expect(productCard.id).toEqual(idVariationSelected);
        expect(productCard.selectVariations.find(({ selectType }) => selectType === 'attributes')
            .currentValue).toEqual(attribute.id);
    });
    it('It should change AttributeSecondary for data api and productCard', () => {
        // Change Tamanho de Calçado for 36
        const { productTargetUpdated: targetUpdate } = service.changeAttribute('462521', data.product);
        // Change MAterial for couro
        const { productCard, productTargetUpdated } = service.changeAttributeSecondary('462515', targetUpdate);
        const attributeSecondary = {
            id: 462515,
            name: 'Couro',
            slug: 'couro',
            attributeId: 74678,
            attributeName: 'Material',
            position: 1,
            isActive: true,
        };
        const idVariationSelected = '9480246';
        expect(productTargetUpdated.attributeSecondary).toEqual(attributeSecondary);
        expect(productTargetUpdated.id).toEqual(idVariationSelected);
        expect(productCard.id).toEqual(idVariationSelected);
        expect(productCard.selectVariations.find(({ selectType }) => selectType === 'secondaryAttributes')
            .currentValue).toEqual(attributeSecondary.id);
    });
});
//# sourceMappingURL=front-buy-together.service.spec.js.map
