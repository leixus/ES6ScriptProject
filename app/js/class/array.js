{
    let arr = Array.of(3,4,7,9,11);
    console.log('arr', arr);
}

{
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    var arr1 = [].slice.call(arrayLike); 
    console.log(arr1);
    let arr2 = Array.from(arrayLike);
    console.log(arr2);
}


{
    let ps = document.querySelectorAll('p');
    console.log(ps);
    // Array.from(ps).filter(p => {
    //     return p.textContent.length < 100;
    // });
    // console.log(bb);
    Array.from(ps).forEach(function(item) {
        console.log(item.textContent);
    });
}

{
    console.log([1, 2, undefined].fill(7));

    console.log([1, 2, 3, 4, 5, 6, 7].fill(9, 1, 3));
}

{

    for (let index of [12,45,78,89].keys()) {
        console.log('index', index);
    }

    // for (let value of [12,'lk',78,89].values()) {
    //     console.log('value', value);
    // }

    for (let [index, value] of [12,45,78,89].entries()) {
        console.log('value', index, value);
    }
}

{
    console.log([1,2,3,4,5,6,7].copyWithin(0,3,6));
    console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1));
}

{
    console.log([1, 4, -5, 10].find((n) => n < 0));
    console.log([1, 5, 10, 15].find(function (value, index, arr) {
        return value > 9;
    }));

    console.log([1, 5, 10, 15].findIndex(function (value, index, arr) {
        return value > 9;
    }));

    function f(v){
        return v > this.age;
    }
    let person = {name: 'John', age: 20};
    [10, 12, 26, 15].find(f, person);    // 26

    console.log([NaN].findIndex(y => Object.is(NaN, y)));
}