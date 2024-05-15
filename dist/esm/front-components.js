import { p as promiseResolve, b as bootstrapLazy } from './index-f45e2507.js';
export { s as setNonce } from './index-f45e2507.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.17.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["front-select",[[2,"front-select",{"optionsList":[16],"value":[8],"placeholder":[16],"selectId":[1,"select-id"],"selectName":[1,"select-name"],"label":[1]}]]],["variation-selector",[[2,"variation-selector",{"variations":[16],"productId":[2,"product-id"],"showcaseMode":[4,"showcase-mode"]}]]],["front-image_3",[[0,"showcase-related",{"productsPerPage":[2,"products-per-page"],"showcaseTitle":[1,"showcase-title"],"buttonLabel":[1,"button-label"],"buyTogetherProductIds":[1,"buy-together-product-ids"],"showArrows":[4,"show-arrows"],"productIds":[32],"products":[32],"load":[64]}],[2,"product-card",{"inline":[4],"product":[1040],"showPriceBase":[32]}],[0,"front-image",{"imageSrc":[1025,"image-src"],"textAlt":[1025,"text-alt"],"figCaption":[1025,"fig-caption"],"isSrcLoading":[32]},null,{"imageSrc":["changeImageSrc"]}]]],["buy-together",[[2,"buy-together",{"productId":[1026,"product-id"],"variationId":[1026,"variation-id"],"showcaseMode":[4,"showcase-mode"],"buyTogetherData":[32],"hasBuyTogether":[32],"isLoading":[32],"isAddingToCart":[32],"formIsValid":[32],"getBuyTogetherData":[64]},[[0,"clickBuyButton","onClickBuyButtonHandler"]],{"buyTogetherData":["watchPropHandler"],"variationId":["watchVariationIdChange"],"productId":["watchProductIdChange"]}]]],["front-countdown",[[2,"front-countdown",{"startDate":[1025,"start-date"],"endDate":[1025,"end-date"],"days":[32],"hours":[32],"minutes":[32],"seconds":[32]},null,{"startDate":["watchStartDateChange"],"endDate":["watchEndDateChange"]}]]],["launch-countdown",[[0,"launch-countdown",{"productId":[1025,"product-id"],"variationId":[1025,"variation-id"],"dataTargetDate":[1,"data-target-date"],"dataInitialDate":[1,"data-initial-date"],"dataCountdownTitle":[1,"data-countdown-title"],"dataDescription":[1,"data-description"],"dateTime":[32]},null,{"variationId":["watchVariationIdChange"],"productId":["watchProductIdChange"]}]]]], options);
});

//# sourceMappingURL=front-components.js.map