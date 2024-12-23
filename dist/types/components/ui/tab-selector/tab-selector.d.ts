export declare class TabSelector {
    tabs: {
        name: string;
        label: string | any;
        content: () => any;
    }[];
    activeTab: string;
    handleTabClick(tabName: string): void;
    componentWillLoad(): void;
    render(): any;
}
