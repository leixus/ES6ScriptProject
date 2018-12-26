{
    let list = new Set();

    list.add(5);

    list.add(7);

    console.log('size', list.size);
}

{
    let s = new Set();

    [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

    for (let i of s) {
        console.log(i);
    }
}

{
    let map = new Map();

    let arr = ['123', 'Hello World'];

    map.set(arr, 456);

    console.log(map);
    console.log(map.get(arr));
    console.log(arr);
}