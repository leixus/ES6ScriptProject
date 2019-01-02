{
    console.log('Promise处理异步问题');
}

// {
//     // 基本定义
//     let ajax = function (callback) {
//         console.log('执行回调1');
//
//         setTimeout(function () {
//             callback && callback.call();
//         }, 1000);
//     };
//
//     ajax(function () {
//         console.log('开始执行2');
//     });
// }
//
// {
//     let ajax = function () {
//         console.log('执行1');
//
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 resolve();
//             }, 1000)
//         })
//     };
//
//     ajax().then(function () {
//         // 成功
//         console.log('success');
//     }, function () {
//         // 错误的时候
//         console.log('error');
//     });
// }

// {
//     let ajax = function () {
//         console.log('执行3');
//
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 resolve();
//             }, 1000)
//         })
//     };
//
//     ajax().then(function () {
//         console.log('第一次');
//        return new Promise(function (resolve, reject) {
//            setTimeout(function () {
//                resolve();
//            }, 2000);
//        });
//     }).then(function () {
//         console.log('2次执行');
//     })
// }

// {
//     let ajax = function (num) {
//         console.log('执行');
//         return new Promise(function (resolve, reject) {
//             if (num > 5) {
//                 resolve();
//             } else {
//                 throw new Error('出错了');
//             }
//         })
//     };
//
//     ajax(6).then(function () {
//         console.log(6);
//     }).catch(function (err) {
//         console.log('catch', err)
//     });
//
//     ajax(3).then(function () {
//         console.log(3);
//     }).catch(function (err) {
//         console.log('catch1', err)
//     });
// }

// {
//     function loadImg(src) {
//         return new Promise((resolve, reject) => {
//             let img = document.createElement('img');
//
//             img.src = src;
//
//             img.onload = function () {
//                 resolve(img);
//             };
//
//             img.onerror = function (err) {
//                 reject(err);
//             }
//         })
//     }
//
//     function showImgs(imgs) {
//         imgs.forEach(function (img) {
//             document.body.appendChild(img);
//         })
//     }
//
//     Promise.all(
//         [
//             loadImg('http://t2.hddhhn.com/uploads/tu/201612/98/st93.png'),
//             loadImg('http://t2.hddhhn.com/uploads/tu/201611/228/st87.png'),
//             loadImg('http://t2.hddhhn.com/uploads/tu/201607/253/1.png')
//         ]
//     ).then(
//         showImgs
//     )
// }

{
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');

            img.src = src;

            img.onload = function () {
                resolve(img);
            };

            img.onerror = function (err) {
                reject(err);
            }
        })
    }

    function showImgs(imgs) {
        // imgs.forEach(function (img) {
            document.body.appendChild(imgs);
        // })
    }

    Promise.race(
        [
            loadImg('http://t2.hddhhn.com/uploads/tu/201612/98/st93.png'),
            loadImg('http://t2.hddhhn.com/uploads/tu/201611/228/st87.png'),
            loadImg('http://t2.hddhhn.com/uploads/tu/201607/253/1.png')
        ]
    ).then(
        showImgs
    )
}













