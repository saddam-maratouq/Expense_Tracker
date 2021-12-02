// in Transaction component we use Math.abs to fix the proplem with + - requierd two time  


// Remember you can use ternery operoeator and asign it to value Examples : (line 8-10 ) => Transaction comp

    const Sign = trans.amount < 0  ? '-' : '+' 

    const classCouler = trans.amount < 0  ? 'minus' : 'plus' 

    --- 

// exampel Reduce prototype function in js there is 2 way (line 15-25 ) => Balance comp 

**first one** 

const numbers = [175, 69, 25]; 

const reducer = (acc, item) => acc + item  ;

  const sum = numbers.reduce(reducer ) //  , 20  , 0 is important cuz protect from err which Array is empty value ...

  // 20 is deafult acc value and you can say  + to the total of this array  

console.log(sum) 

//+20 => 289  

// deafult => 269 


**Secound way** 





---

//Exampel toFixed methode in js  we use to fixed to take specfic number of  decimal place in this ex : (Balance component line 9 )

let apple = 22.9123 

const total = apple.toFixed(2) //3

const number = Number(total) 
console.log(number)  

// =>  22.91 

if (3) =>  22.912 




// exampel important in this app to filter negative number and calc it 

  const reducer = (acc,item) => acc + item

  const expense =  (amount
  .filter(item => item < 0 )  //[-20,-10]
  .reduce(reducer).toFixed(2) ) * -1 

 console.log(expense);   


