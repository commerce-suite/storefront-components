'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b315d1cd.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.17.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('front-components.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["buy-together_6.cjs",[[0,"showcase-related",{"productsPerPage":[2,"products-per-page"],"showcaseTitle":[1,"showcase-title"],"buttonLabel":[1,"button-label"],"buyTogetherProductIds":[1,"buy-together-product-ids"],"showArrows":[4,"show-arrows"],"productIds":[32],"products":[32],"loading":[32],"load":[64]}],[2,"buy-together",{"productId":[1026,"product-id"],"variationId":[1026,"variation-id"],"promotionTitle":[1,"promotion-title"],"buyButtonText":[1,"buy-button-text"],"showcaseMode":[4,"showcase-mode"],"buyTogetherData":[32],"hasBuyTogether":[32],"isLoading":[32],"isAddingToCart":[32],"formIsValid":[32],"getBuyTogetherData":[64]},[[0,"clickBuyButton","onClickBuyButtonHandler"]],{"buyTogetherData":["watchPropHandler"],"variationId":["watchVariationIdChange"],"productId":["watchProductIdChange"]}],[2,"variation-selector",{"variations":[16],"productId":[2,"product-id"],"showcaseMode":[4,"showcase-mode"]}],[0,"product-card",{"inline":[4],"product":[1040],"showPriceBase":[32]}],[2,"front-select",{"optionsList":[16],"value":[8],"placeholder":[16],"selectId":[1,"select-id"],"selectName":[1,"select-name"],"label":[1]}],[0,"front-image",{"imageSrc":[1025,"image-src"],"textAlt":[1025,"text-alt"],"figCaption":[1025,"fig-caption"],"isSrcLoading":[32]},null,{"imageSrc":["changeImageSrc"]}]]],["buy-together-cart-modal.cjs",[[0,"buy-together-cart-modal",{"containerTitle":[1,"container-title"],"productId":[2,"product-id"],"variationId":[2,"variation-id"],"promotionTitle":[1,"promotion-title"],"buyButtonText":[1,"buy-button-text"]}]]],["front-countdown.cjs",[[2,"front-countdown",{"startDate":[1025,"start-date"],"endDate":[1025,"end-date"],"days":[32],"hours":[32],"minutes":[32],"seconds":[32]},null,{"startDate":["watchStartDateChange"],"endDate":["watchEndDateChange"]}]]],["launch-countdown.cjs",[[0,"launch-countdown",{"productId":[1025,"product-id"],"variationId":[1025,"variation-id"],"dataTargetDate":[1,"data-target-date"],"dataInitialDate":[1,"data-initial-date"],"dataCountdownTitle":[1,"data-countdown-title"],"dataDescription":[1,"data-description"],"dateTime":[32]},null,{"variationId":["watchVariationIdChange"],"productId":["watchProductIdChange"]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=front-components.cjs.js.map