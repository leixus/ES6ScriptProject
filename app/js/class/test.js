{
    function* objEntries(obj) {
        let proKeys = Reflect.ownKeys(obj);
        // console.log(proKeys);

        for (let proKey of proKeys) {
            yield [proKey, obj[proKey]]
        }
    }

    let jane = {one: 'lei', two: 'xu'};

    for (let [key, value] of objEntries(jane)) {
        // console.log(`${key}, ${value}`);
    }
}

{
    // const person = {
    //     sayName() {
    //         console.log('hello!');
    //     },
    // };
    //
    // console.log(person.sayName.name);

    const obj = {
        get foo() {},
        set foo(x) {}
    };

    // const desc = Object.getOwnPropertyDescriptor(obj, 'foo');

    // console.log(desc.get.name);
    //
    // console.log(desc.set.name);

}

{
    let target = {a: 1};

    let source1 = {b: 2};
    let source2 = {c: 3};

    Object.assign(target, source1, source2);

    // console.log(target);

    let v1 = 'abc';
    let v2 = true;
    let v3 = 10;
    // let obj = Object.assign({}, v1, v2, v3);
    // console.log(obj);

    let obj = {a: 1};
    // console.log(Object.assign(obj) === obj);
}

{
    console.log(...[1, 2, 3])
}









































