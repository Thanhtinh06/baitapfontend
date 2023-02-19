
//ES5: Declare class
function SinhVien(_name,_age){
    this.name = _name;
    this.age = _age;
}

//ES6: Declare class
class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Mother {
    constructor(_name){
        this.name = _name;
    }
    colorEyes(){
        console.log("black");
    }
    getName(){
        return this.name;
    }
}

// const mother = new Mother("Thao");
// mother.name;
// mother.colorEyes();

class Me extends Mother{
    constructor(_name,_age){
        //Super() kế thừa constructor của class mother
        super(_name);
        this.age = _age;
    }
    colorSkin(){
        console.log("yellow")
    }
    //overidding  
    getName(){
        return `Hello ${this.name}`
    }
}
const me = new Me("Voi");
me.colorSkin();
me.colorEyes();
console.log(me.getName()); 

//export only 1 function or class
export default Me;