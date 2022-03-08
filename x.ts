#!/usr/bin/env ts-node

//chmod +x +./x.ts  Mac下添加文件的可执行权限

function createPrefix(n:number): string{
    return "--".repeat(n);
}

class  Person{
    public child:Person[] = [];
    //初始化给个空数组, 防止调用时候出现undefined

    constructor(public name:string){

    }
    sayHi(){
        console.log("name" + this.name);
        
    }
    addChild(child:Person):void{
        this.child.push(child);
    }
    //?表示可选参数
    introduceFamily(n?:number):void{
        n = n || 1;
        console.log(`${createPrefix(n-1) + this.name}`);
        this.child.forEach(child => {
            child.introduceFamily(n+1);
        });
        
    }

}

let grandPa = new Person("王多鱼");
let child1 = new Person("王大锤");
let child2 = new Person("王小豆")

grandPa.addChild(child1);
grandPa.addChild(child2);

let person11 = new Person("王1锤");
let person12 = new Person("王1豆")
child1.addChild(person11);
child1.addChild(person12);


let person21 = new Person("王2锤");
let person22 = new Person("王2豆")
child2.addChild(person21);
child2.addChild(person22);

grandPa.introduceFamily();