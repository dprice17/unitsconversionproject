const output1El = document.getElementById("output1-el")
const output2El = document.getElementById("output2-el")
const output3El = document.getElementById("output3-el")

const numBox = document.getElementById("num-box")
//let userInput = numBox.value 
const convertEl = document.getElementById("convert-btn")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")



convertEl.addEventListener("click", function(){
      
    if (lengthEl){
        lengthEl = false
        const feetPerMeter = 3.281
        const feet = numBox.value / feetPerMeter
        const meters = numBox.value * feetPerMeter 
        
        const feetMeters = `${numBox.value} meters = ${meters.toFixed(2)} feet | ${numBox.value} feet = ${feet.toFixed(2)} meters`
        
        output1El.innerHTML = 
        `
         <div id="results1">
            <h3 class="units">Length (Meters/Feet)</h3>
            <div id="output1-el"></div>
            ${feetMeters}
        </div>
        `  
             
    }   else if (volumeEl) {
        volumeEl = false
        const litersPerGallon = 0.264
        const liters = numBox.value / litersPerGallon
        const gallons = numBox.value * litersPerGallon
        
        const litersGallons = `${numBox.value} liters = ${gallons.toFixed(2)} gallons | ${numBox.value} gallons = ${liters.toFixed(2)} liters`
        
         output2El.innerHTML = 
        `
         <div id="results2">
            <h3 class="units">Volume (Liters/Gallons)</h3>
            <div id="output2-el"></div>
            ${litersGallons}
        </div>
        `
    
        
    }  else if (massEl){
       massEl = false
       const kilogramPerPound = 2.204 
       const kilogram = numBox.value / kilogramPerPound
       const pounds = numBox.value * kilogramPerPound 
       
       const kilogramsPounds = `${numBox.value} kilos = ${pounds.toFixed(2)} pounds | ${numBox.value} pounds = ${kilogram.toFixed(2)} kilos`
       
        output3El.innerHTML = 
        `
         <div id="results3">
            <h3 class="units">Mass (Kilograms/Pounds)</h3>
            <div id="output3-el"></div>
            ${kilogramsPounds}
        </div>
        `
    }
    
})


    
    
    


    
    

