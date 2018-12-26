{
    // 对象扩展
    let o = 1;
    let l = 2;

    let es5 = {
        o: o,
        l: l
    };

    let es6 = {
        o,
        l
    };

    console.log(es5);
    console.log(es6);
}

{
    let es5fn = {
        hello: function () {
            console.log('Hello');
        }
    };

    let es6fn = {
        hello() {
            console.log('World');
        }
    };

    es5fn.hello();
    es6fn.hello();

}

{
    let a = 'b';
    let es5_obj = {
        a: 'c',
        b: 'c'
    };

    let es6_obj = {
        [a]: 'c'
    };

    console.log(es5_obj, es6_obj);
}

{
    console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc');
    console.log('数组', Object.is([], []), [] === []);
}

{
    console.log(Object.assign({a: 'a'}, {b: 'b'}));

    console.log(Object.assign({}, 'a'));

}

{
    let test1 = {k: 123, o: 456};

    for (let [key, value] of Object.entries(test1)) {
        console.log([key, value]);
    }
}

{
    let {a,b,..c}
}





































