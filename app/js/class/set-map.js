// {
//     let list = new Set();
//
//     list.add(5);
//
//     list.add(7);
//
//     console.log('size', list.size);
// }
//
// {
//     let s = new Set();
//
//     [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
//
//     for (let i of s) {
//         console.log(i);
//     }
// }
//
// {
//     let map = new Map();
//
//     let arr = ['123', 'Hello World'];
//
//     map.set(arr, 456);
//
//     console.log(map);
//     console.log(map.get(arr));
//     console.log(arr);
// }

{
    let s = new Set();

    let arr = [2,3,45,6,78,9,5];

    arr.forEach(x => s.add(x));

    for (let i of s) {
        console.log(i);
    }
}

{
    let list = new Set();

    list.add(2);
    list.add(3);
    list.add(4);

    console.log(list);

    let arr = [1,2,3,4,2,3];

    let list2 = new Set(arr);

    console.log(list2);

    console.log(list2.size);
}

{
    let  arr = ['leixu', 'lixiaoshuang', 'dmo'];

    let list3 = new Set(arr);

    console.log(list3.has('leixu'));

    console.log(list3.delete('leixu'));
    console.log(list3);

    list3.clear();
    console.log(list3);

}

{
    let  arr = ['leixu', 'lixiaoshuang', 'dmo'];

    let list = new Set(arr);

    for (let key of list.keys()) {
        console.log(key);
    }

    for (let value of list.values()) {
        console.log(value);
    }

    for (let [key, value] of list.entries()) {
        console.log(key, value);
    }

    list.forEach((item, index, list) => {
        console.log(item, index, list);
    })
}

// WeakSet 只能是对象
{
    let weakList = new WeakSet();

    let obj = {};

    weakList.add(obj);

    // weakList.add(2);

    console.log(weakList);
}

{
    let map = new Map();

    let arr = ['123', 'map'];

    map.set('myKey', 456);

    console.log(map, map.get('myKey'));

}

{
    let map = new Map([['a', 123], ['b', 456]]);

    console.log(map);

    console.log(map.size);

    map.delete('a');

    console.log(map);

    map.clear();

    console.log(map);
}


// WeakMap的key只能是对象

{
    let weakMap = new WeakMap();

    let abc = {};

    weakMap.set(abc, 123);

    console.log(weakMap.get(abc));

    let name = {'name': 'leixu'};

    weakMap.set(name, 8564521);

    console.log(weakMap.get(name));
}














































