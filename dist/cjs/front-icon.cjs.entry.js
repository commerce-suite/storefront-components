'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ed1a22c2.js');

const frontIconCss = "@import url('https://fonts.googleapis.com/icon?family=Material+Icons');";
const FrontIconStyle0 = frontIconCss;

const FrontIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.name = 'home';
        this.size = '24px';
        this.color = '#000';
    }
    render() {
        return (index.h("span", { key: '59c5c29ff8f8070e8163080e808c5355c118a133', class: "material-icons", style: { color: this.color, fontSize: this.size } }, this.name));
    }
};
FrontIcon.style = FrontIconStyle0;

exports.front_icon = FrontIcon;

//# sourceMappingURL=front-icon.cjs.entry.js.map