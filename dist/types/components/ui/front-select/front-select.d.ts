import { IFrontSelectOption } from './front-select.type';
export declare class FrontSelect {
    optionsList: IFrontSelectOption[];
    value: any;
    placeholder: IFrontSelectOption;
    selectId: string;
    selectName: string;
    label: string;
    componentWillLoad(): void;
    render(): any;
}
