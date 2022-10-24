
//const oneMeter = 3.281 
//1 liter = 0.264 gallon
//1 kilogram = 2.204 pound
//*/

const numBox = document.getElementById("num-box")
//let userInput = numBox.value 
const convertEl = document.getElementById("convert-btn")

const resultsOne = document.getElementById("results1") 
const resultsTwo = document.getElementById("results2")
const resultsThree = document.getElementById("results3") 

const output1El = document.getElementById("output1-el")
const output2El = document.getElementById("output2-el")
const output3El = document.getElementById("output3-el")




convertEl.addEventListener("click", function(){
  
   const feet = numBox.value / 3.281
   const meters = numBox.value * 3.281
   
   const liters = numBox.value / 0.264
   const gallons = numBox.value * 0.264
   
   const kilogram = numBox.value / 2.204
   const pounds = numBox.value * 2.204 
   
   const feetMeters = `${numBox.value} meters = ${meters.toFixed(2)} feet | ${numBox.value} feet = ${feet.toFixed(2)} meters`
   
   const litersGallons = `${numBox.value} liters = ${gallons.toFixed(2)} gallons | ${numBox.value} gallons = ${liters.toFixed(2)} liters`
   
   const kilogramsPounds = `${numBox.value} kilos = ${pounds.toFixed(2)} | ${numBox.value} pounds = ${kilogram.toFixed(2)}`
   
   output1El.textContent = feetMeters
   output2El.textContent = litersGallons
   output3El.textContent = kilogramsPounds 
   
})

    
    
    

