/* ES5 something like class..? */
// function Car (options){
//     this.title=options.title;
// }

// Car.prototype.drive = function(){
//     return 'vroom';
// }

// var car1 = new Car({ title: 'genesis' });


/* ES6 something like class..? */

class Car{
    constructor( { title } ){   //보통 클래스에서는 디스트럭처링 안함.
        this.title  = title;
    }

    drive(){
        return 'Vroom';
    }
}

class Audi extends Car{
    constructor(options){
        super(options);
        this.color=options.color;
    }

    honk(){
        return 'BAAAANG';
    }
}

const car2=new Car({ title: 'A6' })
const car3=new Audi({ title: 'A6', color: 'green' });
console.log(car2);
console.log(typeof car2);
console.log(typeof Car);

/* 실습 1 */
//monster는 생성될 때, health가 100이다.
//constructor() 는 options 라는 object를 받으며, name key를 가진다.
//monster의 instance에게 name을 선언하자.
class Monster{
    constructor(options){
        this.health=100;
        this.name=options.name;
    }
}

const monster=new Monster({ name: 'heek'});

/* 실습 2 */
// Monster 클래스의 subclass pika 클래스를 생성.
// 생성자함수는 Monster 와 같다. options를 받는다.
// pika 클래스는 bite() 메서드를 같는다. 인자는 다른 Monster의 객체.
// bite() 를 통과한 다른 pika 인스턴스는 체력(health)가 10 깍인다.

class Pika extends Monster{
    constructor(options){
        super(options);
    }

    bite(monster){
        monster.health-=10;
    }
}

const pika1=new Pika({ name: 'pika1'});
const pika2=new Pika({ name: 'pika2'});
console.log(pika1);
console.log(pika2);
pika1.bite(pika2);
console.log(pika1);
console.log(pika2);
