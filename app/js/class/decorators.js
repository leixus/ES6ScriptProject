{
    // 修饰方法
    let readonly = function (target, name, descriptor) {
        descriptor.writable = false;
        return descriptor
    };

    class Test {
        @readonly
        time() {
            return '2019-01-02'
        }
    }

    let test = new Test();

    // test.time = function () {
    //     console.log('reset time');
    //     return 'reset 2019-01-02'
    // }

    console.log(test.time());
}

{
    let typename = function (target, name, descriptor) {
        target.myname = 'hello';
    }

    @typename
    class Test {

    }

    console.log('类修饰符', Test.myname);
}

{
    let log = (type) => {
        return function (target, name, descriptor) {
            // descriptor.value就是show方法
            let src_method = descriptor.value;
            descriptor.value = (...arg) => {
                // 先执行show方法
                src_method.apply(target, arg);
                console.log(`log ${type}`);
            }
            // console.log(`log ${type}`);
        }
    }

    class Ad {

        @log('show')
        show () {
            console.log('AD is show');
        }

        @log('clcik')
        click () {
            console.log('AD is click');
        }
    }

    let ad = new Ad();
    ad.show();
    ad.click();
}
















