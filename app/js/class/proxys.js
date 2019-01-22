{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };

    let monitor = new Proxy(obj, {
        // 拦截对象属性的读取
        get(target, key, receiver) {
            console.log(`get ${key}`);
            return target[key].replace('2017', '2018');
        },

        // 拦截对象设置属性
        set(target, key, value, receiver) {
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key]
            }
        },

        // 判断是否有某个属性

        has(target, key) {
            if (key === 'name') {
                return target[key]
            } else {
                return false;
            }
        },

        // 拦截 删除属性
        deleteProperty(target, key) {
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },

        // 拦截 Object.key(), Object.getOwnProperySymbols
        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time')
        }
    });

    // console.log(monitor);

    console.log(monitor.time);

    monitor.time = '2019';

    monitor.name = 'leixu';

    console.log(monitor.time);
    console.log(monitor.name);
    console.log(monitor);

    console.log('name' in monitor, 'time' in monitor);

    // delete monitor.time;
    // console.log(monitor);
    // delete monitor._r;
    // console.log(monitor);

    console.log(Object.keys(monitor));


}

// Reflect
{
    let obj = {
        time: '2018-12-31',
        name: 'net',
        _r: 123
    };

    console.log(Reflect.get(obj, 'time'));
}

{
    // 实现一个结果，校验
    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let va = this._validator[key];
                    // console.log(va(value));
                    if (!!va(value)) {
                        return Reflect.set(target, key, value, proxy);
                    } else {
                        throw Error(`不能设置${key}到${value}`);
                    }
                } else {
                    throw Error(`${key} 不存在`);
                }
            }
        })
    }

    const personValidators = {
        name(val) {
            return typeof val === 'string';
        },
        age(val) {
            return typeof val === 'number' && val > 18;
        },
        mobile(val) {
            return val.length === 11;
        }
    };

    class Person {
        constructor (name, age) {
            this.name = name;
            this.age = age;
            // this.mobile = '18851604548';
            return validator(this, personValidators)
        }
    }

    let person = new Person('leixu', 30);

    console.log(person);

    person.name = '李晓霜';
}

















