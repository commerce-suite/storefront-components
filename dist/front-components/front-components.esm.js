import { B as BUILD, c as consoleDevInfo, H, d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-97983932.js';
export { s as setNonce } from './index-97983932.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.17.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? Array.from(doc.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["live-shop",[[0,"live-shop",{"hashRoom":[1,"hash-room"],"liveShopNotFound":[32],"videoId":[32],"isSmallDevice":[32],"isChatOpen":[32],"isLoading":[32],"liveShopRegister":[32],"liveShopItemsService":[32],"liveShopItems":[32]}]]],["buy-together-cart-modal",[[0,"buy-together-cart-modal",{"containerTitle":[1,"container-title"],"productId":[2,"product-id"],"variationId":[2,"variation-id"],"promotionTitle":[1,"promotion-title"],"buyButtonText":[1,"buy-button-text"]}]]],["showcase-related",[[0,"showcase-related",{"productsPerPage":[2,"products-per-page"],"showcaseTitle":[1,"showcase-title"],"buttonLabel":[1,"button-label"],"buyTogetherProductIds":[1,"buy-together-product-ids"],"showArrows":[4,"show-arrows"],"productIds":[32],"products":[32],"loading":[32],"load":[64]}]]],["front-countdown",[[2,"front-countdown",{"startDate":[1025,"start-date"],"endDate":[1025,"end-date"],"days":[32],"hours":[32],"minutes":[32],"seconds":[32]},null,{"startDate":["watchStartDateChange"],"endDate":["watchEndDateChange"]}]]],["launch-countdown",[[0,"launch-countdown",{"productId":[1025,"product-id"],"variationId":[1025,"variation-id"],"dataTargetDate":[1,"data-target-date"],"dataInitialDate":[1,"data-initial-date"],"dataCountdownTitle":[1,"data-countdown-title"],"dataDescription":[1,"data-description"],"dateTime":[32]},null,{"variationId":["watchVariationIdChange"],"productId":["watchProductIdChange"]}]]],["mini-player",[[0,"mini-player",{"videoId":[1,"video-id"],"autoPlay":[4,"auto-play"],"mainTitle":[1,"main-title"],"buttonText":[1,"button-text"],"showMiniPlayer":[32],"positionX":[32],"positionY":[32],"isDragging":[32]}]]],["info-modal",[[0,"info-modal",{"modalTitle":[1,"modal-title"],"modalDescription":[1,"modal-description"],"hideButtons":[4,"hide-buttons"],"primaryButtonText":[1,"primary-button-text"],"secondaryButtonText":[1,"secondary-button-text"],"position":[1]}]]],["product-card",[[0,"product-card",{"inline":[4],"customClass":[1,"custom-class"],"product":[1040],"showPriceBase":[32]}]]],["highlight-card",[[0,"highlight-card",{"items":[16],"highlightedItems":[32],"nonHighlightedItems":[32]},null,{"items":["filterItemsHandler"]}]]],["custom-card",[[4,"custom-card",{"cardTitle":[1,"card-title"],"cardDescription":[1,"card-description"],"customClass":[1,"custom-class"]}]]],["live-shop-mobile",[[0,"live-shop-mobile",{"videoId":[1,"video-id"],"liveShopData":[16],"items":[16]}]]],["live-shop-desktop",[[0,"live-shop-desktop",{"videoId":[1,"video-id"],"liveShopData":[16],"items":[16],"isChatOpen":[4,"is-chat-open"],"toggleChat":[16]}]]],["front-select",[[2,"front-select",{"optionsList":[16],"value":[8],"placeholder":[16],"selectId":[1,"select-id"],"selectName":[1,"select-name"],"label":[1]}]]],["variation-selector",[[2,"variation-selector",{"variations":[16],"productId":[2,"product-id"],"showcaseMode":[4,"showcase-mode"]}]]],["front-image",[[0,"front-image",{"imageSrc":[1025,"image-src"],"textAlt":[1025,"text-alt"],"figCaption":[1025,"fig-caption"],"isSrcLoading":[32]},null,{"imageSrc":["changeImageSrc"]}]]],["buy-together",[[2,"buy-together",{"productId":[1026,"product-id"],"variationId":[1026,"variation-id"],"promotionTitle":[1,"promotion-title"],"buyButtonText":[1,"buy-button-text"],"showcaseMode":[4,"showcase-mode"],"buyTogetherData":[32],"hasBuyTogether":[32],"isLoading":[32],"isAddingToCart":[32],"formIsValid":[32],"getBuyTogetherData":[64]},[[0,"clickBuyButton","onClickBuyButtonHandler"]],{"buyTogetherData":["watchPropHandler"],"variationId":["watchVariationIdChange"],"productId":["watchProductIdChange"]}]]],["live-shop-not-found",[[0,"live-shop-not-found"]]],["tab-selector",[[0,"tab-selector",{"tabs":[16],"activeTab":[32]}]]],["live-video-chat",[[0,"live-video-chat",{"videoId":[1,"video-id"]}]]],["live-video-player",[[0,"live-video-player",{"videoId":[1,"video-id"],"autoPlay":[4,"auto-play"]}]]]], options);
});

//# sourceMappingURL=front-components.esm.js.map