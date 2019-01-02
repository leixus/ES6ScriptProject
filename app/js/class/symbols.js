{
    // let a1 = Symbol();
    //
    // let a2 = Symbol();
    //
    // console.log(a1 === a2);

}

{
    // let myIterator = {};
    //
    // myIterator[Symbol.iterator] = function* () {
    //
    // }
}

{
    // class Collection {
    //     *[Symbol.iterator]() {
    //         let i = 0;
    //
    //         while (this[i] !== undefined) {
    //             yield this[i];
    //             ++i;
    //         }
    //     }
    // }
    //
    // let mycollection = new Collection();
    //
    // mycollection[0] = 1;
    //
    // mycollection[1] = 2;
    //
    // for (let value of mycollection) {
    //     console.log(value);
    // }
}

{
    let s1 = Symbol();

    let s2 = Symbol();

    // console.log(s1 === s2);
}

{
    // 生成Symbol之前检查a3这个key是否已经存在
    // 如果已经存在，则返回key的value
    // 如果不存在，则生成一个Symbol类型的值
    let a3 = Symbol.for('a3');

    let a4 = Symbol.for('a3');

    // console.log('for', a3 === a4);

}

{
    let a5 = Symbol.for('abc');

    let obj = {
        [a5]: '123',
        'abc': 345,
        'c': 789
    };

    // console.log('多个key', obj);
    //
    // console.log(Object.entries(obj));

    for (let [key, value] of Object.entries(obj)) {
        // console.log('let of', key, value);
    }

    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        // console.log(item);
        // console.log(obj[item]);
    });

    Reflect.ownKeys(obj).forEach(function (item) {
        console.log(item);
        console.log(obj[item]);
    })

}

























