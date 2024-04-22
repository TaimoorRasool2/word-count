#!/usr/bin/env ts-node

import inquirer from "inquirer";

const word :{
    Sentence:string,
}= await inquirer.prompt([
    {name:"Sentence",
     type: "input",
     message:"please add your paragraph"
}
])

const count= word.Sentence.trim().split(" ");
console.log(count);

let x=0;
// let newCount= count.map(function(value){

//     if(value!=''){
//       return value
//         x=x+1
//     }
//     else 
//     return null
// })

// console.log(newCount);
// console.log(newCount.length);
// console.log(x);

let newCount=[];
for(let i of count){
    if(i!=''){
        x+=1;
        newCount.push(i);
    }
}
 console.log(x);
 console.log(newCount);
 
 
