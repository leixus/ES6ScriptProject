{
    function log(x, y) {
        y = y || 'world';
        console.log(x, y);
    }

    log(0);
}

{
    console.log('a', ...[0,1,2,3]);
}

{
    // 伪调用
    function test1(x) {
        console.log('x： ' + x);
    }

    function test2(x) {
        return test1(x);
    }

    test2(3);
}