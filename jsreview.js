// 2026-11-25 13:02:48:533
// purity 2

// connecting to the server

const test=5
console.log(test)
console.log("hello world!")

const addition = (a,b)=>{return(a+b)}
console.log("2+3="+addition(2,3))

const array=[2,1,5]
console.log("in")
// what
for(const item in array){
    console.log(item) //so this is index??? what??? it's string too
    console.log(item+item) //type string
}
console.log("of")
for(const item of array){
    console.log(item) //type number, can tell cuz console says it's yellow
    console.log(item+item) //type number
    console.log(item/2) //can become float
    //item=item+1 //item is constant, this doesn't work
    //console.log(item)
}

let array2=[2,5,1]
console.log("nonconstant in")
for(let item in array2){
    console.log(item) //index as string
    console.log(item+item) //index as string
    console.log(item*2) //index converted to number
    console.log(item/2) //index converted to number
    console.log("array2 in item:")
    console.log(array2[item]) //will never be undefined, by definition
}
console.log("nonconstant of")
for(let item of array2){
    console.log(item) //item as number
    console.log(item+item) //item as number
    console.log(item*2) //item as number
    console.log(item/2) //item as number
    console.log("array2 of item:")
    console.log(array2[item]) //could be undefined
}
// huh ok cool
// so i can use "in" to get the index, and "of" to get the item itself.
// cool!
