{
    // Genertaor基本定义
    function* helloWorldGenerator() {
        yield 'hello';
        yield 'world';
        return 'ending';
    }
    let hw = helloWorldGenerator();

    hw.next()

}