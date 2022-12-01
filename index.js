const outputEl = document.getElementById('outputEl')
const numBox = document.getElementById('numBox')
const convertBtn = document.getElementById('convertBtn')



convertBtn.addEventListener('click', function(){
    
    const selectList = document.querySelector('#selectList')
    const optionValue = selectList.options[selectList.selectedIndex].value
  
    if (optionValue === 'Length'){
    
        const feetPerMeter = 3.281
        const feet = numBox.value / feetPerMeter
        const meters = numBox.value * feetPerMeter 
        
        const feetMeters = 
        
        `${numBox.value} meters = ${meters.toFixed(2)} feet | 
        ${numBox.value} feet = ${feet.toFixed(2)} meters`
        
        outputEl.innerHTML = 
        `
         <div class='results'>
            <h3 class='units'>Length (Meters/Feet)</h3>
            ${feetMeters}
        </div>
        `  

             
    }   
    
    else if (optionValue === 'Volume') {
        
        const litersPerGallon = 0.264
        const liters = numBox.value / litersPerGallon
        const gallons = numBox.value * litersPerGallon
        
        const litersGallons = 
        
        `${numBox.value} liters = ${gallons.toFixed(2)} gallons | 
        ${numBox.value} gallons = ${liters.toFixed(2)} liters`
        
         outputEl.innerHTML = 
        `
         <div class='results'>
            <h3 class='units'>Volume (Liters/Gallons)</h3>
            ${litersGallons}
        </div>
        `
    
        
    }  
    
    else if (optionValue === 'Mass'){
        
       const kilogramPerPound = 2.204 
       const kilogram = numBox.value / kilogramPerPound
       const pounds = numBox.value * kilogramPerPound 
       
       const kilogramsPounds = 
       
       `${numBox.value} kilos = ${pounds.toFixed(2)} pounds | 
       ${numBox.value} pounds = ${kilogram.toFixed(2)} kilos`
       
        outputEl.innerHTML = 
        `
         <div class='results'>
            <h3 class='units'>Mass (Kilograms/Pounds)</h3>
            ${kilogramsPounds}
        </div>
        `
    }
    
})


    
    
    

