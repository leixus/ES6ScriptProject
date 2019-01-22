// {
//     let test1 = {k: 123, o: 456};
//
//     let test2 = [1,2,3,4,5,6,7];
//
//     console.log(Object.entries(test2));
//
//     for (let [key, value] of Object.entries(test1)) {
//         console.log([key, value]);
//     }
// }
//
// {
//     const fruits = ['apple','coconut','mango','durian'];
//     //ES6中的for...of循环，遍历属性值
//     for(let fruit of fruits){
//         console.log(fruit);
//     }
// }

{
    let arr = ['Hello', 'World'];

    let map = arr[Symbol.iterator]();

    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}

{
    let obj = {
        start: [1,3,2],
        end: [9,8,6],
        [Symbol.iterator]() {
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            return {
                next() {
                    if (index < len) {
                        return {
                            value: arr[index],
                            done: false
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    }

    for (let key of obj) {
        console.log(key);
    }
}




















