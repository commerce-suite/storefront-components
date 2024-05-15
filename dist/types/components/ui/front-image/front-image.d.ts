export declare class FrontImage {
    imageSrc: string;
    textAlt: string;
    figCaption: string;
    isSrcLoading: boolean;
    private getImageClassByProps;
    private onSrcLoadError;
    private onSrcLoadFinish;
    changeImageSrc(): void;
    render(): any;
}
