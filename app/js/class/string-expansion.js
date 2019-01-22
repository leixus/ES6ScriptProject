// {
//     let str = "\u0061";
//     let str2 = "\uD842\uDFB7";

//     let str3 = "hell\u{6F}"
//     console.log(str3);
// }

// codePointAt()
// {
//     var s = "𠮷";
//     console.log(s.length);
//     console.log(s.charAt(0));
//     console.log(s.charAt(1));
//     console.log(s.charCodeAt(0));
//     console.log(s.charCodeAt(1));
// }

// {
//     console.log("a", "\u0061");

//     console.log("s", "\u{20BB7}");

//     console.log("1".padStart("2", 0));

//     console.log("3".padEnd("2", 0));
// }

{
    let user = {
        name: "leixu",
        "work": "webSoft"
    };

    abc`i am ${user.name}, ${user.work}`

    // console.log(abc`i am ${user.name}, ${user.work}`);

    function abc(s, v1, v2) {
        console.log(s, v1, v2);
    }
}