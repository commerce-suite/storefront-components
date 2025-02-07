'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-53de1b7a.js');
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
  return index.bootstrapLazy([["custom-card_16.cjs",[[0,"live-shop",{"hashRoom":[1,"hash-room"],"liveShopNotFound":[32],"videoId":[32],"isSmallDevice":[32],"isChatOpen":[32],"isLoading":[32],"liveShopRegister":[32],"liveShopItemsService":[32],"liveShopItems":[32],"liveSocket":[32]}],[0,"live-shop-mobile",{"videoId":[1,"video-id"],"liveShopData":[16],"items":[16]}],[0,"live-shop-desktop",{"videoId":[1,"video-id"],"liveShopData":[16],"items":[16],"isChatOpen":[4,"is-chat-open"],"toggleChat":[16]}],[0,"live-shop-not-found"],[0,"tab-selector",{"tabs":[16],"activeTab":[32]}],[0,"highlight-card",{"items":[16],"highlightedItems":[32],"nonHighlightedItems":[32]},null,{"items":["handleItemsChange"]}],[0,"live-video-chat",{"videoId":[1,"video-id"]}],[4,"custom-card",{"cardTitle":[1,"card-title"],"cardDescription":[1,"card-description"],"customClass":[1,"custom-class"]}],[0,"live-video-player",{"videoId":[1,"video-id"],"autoPlay":[4,"auto-play"]}],[0,"product-card",{"inline":[4],"customClass":[1,"custom-class"],"product":[1040],"basePrice":[16],"paymentOptions":[16]}],[0,"product-price",{"basePrice":[16],"paymentOptions":[16]}],[0,"front-image",{"imageSrc":[1025,"image-src"],"textAlt":[1025,"text-alt"],"figCaption":[1025,"fig-caption"],"isSrcLoading":[32]},null,{"imageSrc":["changeImageSrc"]}],[0,"product-price-billet",{"price":[2],"priceCompare":[2,"price-compare"]}],[0,"product-price-credit-card",{"price":[2],"priceCompare":[2,"price-compare"],"parcels":[2],"parcelPrice":[2,"parcel-price"],"hasInterest":[4,"has-interest"]}],[0,"product-price-pix",{"price":[2],"priceCompare":[2,"price-compare"]}],[0,"product-price-simple",{"price":[2],"priceCompare":[2,"price-compare"]}]]],["buy-together-cart-modal.cjs",[[0,"buy-together-cart-modal",{"containerTitle":[1,"container-title"],"productId":[2,"product-id"],"variationId":[2,"variation-id"],"promotionTitle":[1,"promotion-title"],"buyButtonText":[1,"buy-button-text"]}]]],["showcase-related.cjs",[[0,"showcase-related",{"productsPerPage":[2,"products-per-page"],"showcaseTitle":[1,"showcase-title"],"buttonLabel":[1,"button-label"],"buyTogetherProductIds":[1,"buy-together-product-ids"],"showArrows":[4,"show-arrows"],"productIds":[32],"products":[32],"loading":[32],"load":[64]}]]],["launch-countdown.cjs",[[0,"launch-countdown",{"productId":[1025,"product-id"],"variationId":[1025,"variation-id"],"dataTargetDate":[1,"data-target-date"],"dataInitialDate":[1,"data-initial-date"],"dataCountdownTitle":[1,"data-countdown-title"],"dataDescription":[1,"data-description"],"dateTime":[32]},null,{"variationId":["watchVariationIdChange"],"productId":["watchProductIdChange"]}]]],["maintenance-mode.cjs",[[0,"maintenance-mode",{"maintenanceModeData":[32],"maintenanceModeService":[32],"recaptchaToken":[32],"isLoading":[32],"isInitialLoading":[32],"userMessage":[32]},[[0,"tokenReceived","handleTokenReceived"]]]]],["mini-player.cjs",[[0,"mini-player",{"videoId":[1,"video-id"],"autoPlay":[4,"auto-play"],"mainTitle":[1,"main-title"],"buttonText":[1,"button-text"],"showMiniPlayer":[32],"positionX":[32],"positionY":[32],"isDragging":[32]}]]],["cashback-credit.cjs",[[2,"cashback-credit",{"customer_id":[2],"cashback":[16],"product":[1040],"credit":[32]},null,{"customer_id":["onCustomerIdChange"],"product":["onProductChange"]}]]],["info-modal.cjs",[[0,"info-modal",{"modalTitle":[1,"modal-title"],"modalDescription":[1,"modal-description"],"hideButtons":[4,"hide-buttons"],"primaryButtonText":[1,"primary-button-text"],"secondaryButtonText":[1,"secondary-button-text"],"position":[1]}]]],["front-select_2.cjs",[[2,"variation-selector",{"variations":[16],"productId":[2,"product-id"],"showcaseMode":[4,"showcase-mode"]}],[2,"front-select",{"optionsList":[16],"value":[8],"placeholder":[16],"selectId":[1,"select-id"],"selectName":[1,"select-name"],"label":[1]}]]],["buy-together.cjs",[[2,"buy-together",{"productId":[1026,"product-id"],"variationId":[1026,"variation-id"],"promotionTitle":[1,"promotion-title"],"buyButtonText":[1,"buy-button-text"],"showcaseMode":[4,"showcase-mode"],"buyTogetherData":[32],"hasBuyTogether":[32],"isLoading":[32],"isAddingToCart":[32],"formIsValid":[32],"getBuyTogetherData":[64]},[[0,"clickBuyButton","onClickBuyButtonHandler"]],{"buyTogetherData":["watchPropHandler"],"variationId":["watchVariationIdChange"],"productId":["watchProductIdChange"]}]]],["front-countdown.cjs",[[2,"front-countdown",{"startDate":[1025,"start-date"],"endDate":[1025,"end-date"],"days":[32],"hours":[32],"minutes":[32],"seconds":[32]},null,{"startDate":["watchStartDateChange"],"endDate":["watchEndDateChange"]}]]],["google-recaptcha.cjs",[[0,"google-recaptcha",{"siteKey":[1,"site-key"],"recaptchaId":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=front-components.cjs.js.map