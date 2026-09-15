import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";
import { Hero, Villain } from "../interfaces";

// import { Hero } from "./interfaces/Hero";
// import { Villain } from "./interfaces";
// printObject(123)
// printObject('Hugo')
// printObject({ a:1, b:2, c:3 })
// printObject([1,2,3,4,5,6,7,8,9,10])


// console.log( genericFunction(3.1416).toFixed(2) )
// console.log(genericFunctionArrow( new Date() ).getDate() )


const deadpool = {
  name: 'Deadpool',
  realName: 'Wave Winstan Wilson',
  dangerLevel: 130
}

console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel )

