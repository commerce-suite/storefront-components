import { r as registerInstance, h } from './index-f50d7c2c.js';

const frontIconCss = "@import url('https://fonts.googleapis.com/icon?family=Material+Icons');";
const FrontIconStyle0 = frontIconCss;

const FrontIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = 'home';
        this.size = '24px';
        this.color = '#000';
    }
    render() {
        return (h("span", { key: '0653c7b1f38090771a80276ce5a2d6e1beebb363', class: "material-icons", style: { color: this.color, fontSize: this.size } }, this.name));
    }
};
FrontIcon.style = FrontIconStyle0;

export { FrontIcon as front_icon };

//# sourceMappingURL=front-icon.entry.js.map