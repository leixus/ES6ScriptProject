// {
//     function Point(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//
//     Point.prototype.toString = function () {
//         return '('+ this.x + ',' + this.y + ')';
//     };
//
//     var p = new Point(1, 2);
//
//     console.log(p.toString());
// }

{
    class Person {
        constructor(name = 'leixu') {
            this.name = name;
        }

        getPersion () {
            this.setPersion(this.name);
            return this.name;
        }

        setPersion(name) {
            console.log(name);
        }

    }

    let v_person = new Person('lei');

    console.log(v_person.name);

    v_person.getPersion()

}

// {
//     class Person {
//         constructor(name = 'tiandi') {
//             this.name = name;
//         }
//     }
//
//     class OnePerson extends Person {
//
//     }
//
//     console.log('继承', new OnePerson('镰刀'));
// }
//
// {
//     class Person {
//         constructor(name = 'tiandi') {
//             this.name = name;
//         }
//     }
//
//     class OnePerson extends Person {
//         constructor(name = 'child') {
//             super(name);
//             this.type = 'person'
//         }
//     }
//
//     console.log('继承', new OnePerson('锤子'));
// }