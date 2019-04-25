// question one 
let city = 'new york'
let cityFirstLetter = city[0].toUpperCase();
let cityBegins = cityFirstLetter + city.substring(1,3);
 if((cityBegins=='Los')||(cityBegins=='New')){
    console.log(`The city name (${city})is begin with ${cityBegins}`)
}else{console.log(`The city name (${city}) does not begin with "Los" or "New"`)}
console.log('--------------------------------------')


//question Two

let anyArray =[4.66,6,7]
if(anyArray.length === 3){
let sumArray = parseInt(anyArray[0]) + parseInt(anyArray[1]) + parseInt(anyArray[2])
console.log(` The sum of three elements is = ${sumArray}`)
}else{console.log('The length of the array must be 3')}

console.log('--------------------------------------')

//question three

let firstName= 'John';
let lastName = 'Doe';
let name = `"${lastName}, ${firstName}"`
console.log(name)

console.log('--------------------------------------')

//question four

let myNumber = 100.34;
let myIntegerNumber = parseInt(myNumber)
if(myNumber == myIntegerNumber){
    if(myNumber %100 ==0){
        console.log(`${true} this is number divisible by 100`)
    }else {console.log(`${false} this is number does not divisible by 100`)}
}else {console.log('this number must be "INTEGER"')}

console.log('--------------------------------------')

//question five
let antherArray= ['new','pander','scoop']
let ending = "er"
let newArray= []
for(i=0; i<antherArray.length;i++){
    let addEnding = antherArray[i] + ending
    newArray.push(addEnding)
}
console.log(newArray)

console.log('--------------------------------------')

//question six
let startNumber = 1
let endNumber = 10
for(let i = startNumber ; i<=endNumber ; i++){
    if(i%2==0){
        console.log(`${i} is EVEN`)
    }else{console.log(`${i} is ODD`)}
}
console.log('--------------------------------------')
//question seven

let firstAngle = 24;
let secondAngle = 68;
let thirdAngle = 180 - (firstAngle + secondAngle)
if(thirdAngle == 90){
    console.log(`this angle is "Right"`)
}else if(thirdAngle>90){
    console.log(`this angle is "Obtuse"`)
}else{ console.log(`this angle is "acute"`)}

console.log('--------------------------------------')
//question eight
 let myString ='maria james smith'
let splitedString= myString.split(' ')

for(i=0;i<splitedString.length;i++){
    let newWord = splitedString[i][0].toUpperCase()+splitedString[i].slice(1)
    console.log(newWord)
}

console.log('--------------------------------------')

//question nine
let newString = "this is an example";
let numberOfWord = newString.split(' ');
console.log(`number of words in this sting is ${numberOfWord.length}`)

console.log('--------------------------------------')

//question ten

let x = [1,3,4,6]
let updateX = []
for(let i = 0; i<x.length;i++){
    y = x[i]* x.length
updateX.push(y)
    
}
console.log(updateX)