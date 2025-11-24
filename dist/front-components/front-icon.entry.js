import { r as registerInstance, h } from './index-02e5006d.js';

const frontIconCss = "@import url('https://fonts.googleapis.com/icon?family=Material+Icons');";

const FrontIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = 'home';
        this.size = '24px';
        this.color = '#000';
    }
    render() {
        return (h("span", { key: '59c5c29ff8f8070e8163080e808c5355c118a133', class: "material-icons", style: { color: this.color, fontSize: this.size } }, this.name));
    }
};
FrontIcon.style = frontIconCss;

export { FrontIcon as front_icon };

//# sourceMappingURL=front-icon.entry.js.map