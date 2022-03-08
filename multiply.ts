#!/usr/bin/env ts-node
console.log(process.argv);

let m:number = parseInt(process.argv[2]);
let n:number = parseInt(process.argv[3]);

if(Number.isNaN(m) || Number.isNaN(n)){
    console.log("只接受整数");
    process.exit(1);
}
console.log(m-n)