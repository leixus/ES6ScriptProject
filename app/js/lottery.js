import './lottery/base.js';
import Timer from './lottery/timer';
import './lottery/calculate.js';
import './lottery/interface.js';

const copyProperties = function (target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
            // 对象source，获取到key
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc)
        }
    }
}

const mix = function (...mixins) {
    class Mix{}
    for (let mixin of mixins) {
        copyProperties(Mix, mixin);
        copyProperties(Mix.prototype, mixin.prototype);
    }
}

class Lottery extends min(Timer) {
    constructor() {
        super();

        // this.updateState();
    }

    /**
     *
     * */
    updateState() {
        let selt = this;
        setTimeout(function () {
            self.updateState();
        }, 500);
    }
}

export default Lottery;

