// ES6的解构赋值
// {
//     function move({x = 0, y = 0} = {}) {
//         console.log(x, y);
//         return [x, y];
//     }

//     let moveOne = move({x: 3, y: 8});
//     console.log(moveOne);
// }

// {
//     function move({x, y} = {x: 0, y: 0}) {
//         console.log(x, y);
//         return [x, y];
//     }

//     let moves = move({x: 10, y: 20});
//     console.log(moves);
// }

// {
//     [1, undefined, 3].map((x = 'yes') => {
//         console.log(x);
//     });
// }

// 圆括号的问题 
// {
    // let [(a)] = [1]; // 错误

    // let {x: (c)} = {} 

    // let ({x: c}) = {};

    // let {(x: c)} = {};
// }

// 函数参数
// {
    // 错误
    // function f([(z)]) {
    //     return z;
    // }

    // [(b)] = [3]; // 页面中报错

    // ({p: (d)} = {}); // 页面中报错

    // [(parseInt.prop)] = [3]; // 正确
// }

// 用途
// {
//     let x = 1;
//     let y = 3;

//     [x, y] = [y, x];

//     console.log(x, y);
// }

{
    function example() {
        return [1, 2, 3];
    }

    let [a, b, c] = example();
    console.log(a, b, c);

    function example2() {
        return {
            foo: 11,
            bar: 22
        };
    };
    let {foo, bar} = example2();
    console.log(foo, bar);
}