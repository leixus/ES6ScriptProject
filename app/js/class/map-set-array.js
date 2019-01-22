// {
//     // 增 删 改 查
//
//     let map = new Map();
//
//     let array = [];
//
//     // 增
//     map.set('t', 1);
//
//     array.push({'t': 1});
//
//     // console.log(map.get('t'));
//     // console.log(array);
//
//     console.info('map-array', map, array);
//
//     // 查
//     let map_exist = map.has('t');
//
//     let array_exist = array.find(item => item.t);
//
//     console.info('map_array', map_exist, array_exist);
//
//     // 改
//     map.set('t', 2);
//
//     array.forEach(item => item.t? item.t = 2 : '');
//
//     console.log('map-array-two', map, array);
//
//     // 删
//     map.delete('t');
//
//     let index = array.findIndex(item => item.t);
//
//     array.splice(index, 1);
//
//     // console.log(index);
//
//     console.info('map-array-del', map, array)
// }

{
    console.log('Set');
}

{
    let set = new Set();

    let array = [];

    // 增删改查

    // 增
    set.add({t: 1});

    array.push({t: 1});

    console.log(set, array);

    // 查
    let set_exist = set.has({t: 1});

    console.log(set_exist);

}