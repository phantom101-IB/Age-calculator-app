// variables
// inputs parts
let dayHolder = document.querySelector(".day-holder")
let monthHolder = document.querySelector(".month-holder")
let yearHolder = document.querySelector(".year-holder")

// output parts

let dayResults = document.querySelector("#day-holder-dd")
let monthResults = document.querySelector("#month-holder-mm")
let yearResults = document.querySelector("#year-holder-yy")

// validation
isValid = false
// enter button

let enterBtn = document.querySelector(".image-div")

// alerts
let titleColor = document.querySelectorAll(".alert-warn")
let dayAlert = document.querySelector("#day-alert")
let monthAlert = document.querySelector("#month-alert")
let yearAlert = document.querySelector("#year-alert")
let pdWarn = document.querySelector(".pdwarning")
let pmWarn = document.querySelector(".pmwarning")
let pyWarn = document.querySelector(".pywarning")


function ageCalc(){
    let currentYear = new Date().getFullYear()
    if(dayHolder.value == "" || monthHolder.value == "" || yearHolder == ""){
        dayAlert.textContent = "This Field is Required"
        monthAlert.textContent = "This Field is Required"
        yearAlert.textContent = "This Field is Required"
        dayHolder.classList.add("change-color")
        pdWarn.classList.add("change-color")
        monthHolder.classList.add("change-color")
        pmWarn.classList.add("change-color")
        yearHolder.classList.add("change-color")
        pyWarn.classList.add("change-color")
    }

    else if(+dayHolder.value ===0 || +monthHolder.value ===0 || +yearHolder.value ===0 ){
        alert("Invalid Input")
    }

    else if(dayHolder.value > 31){
        alert("Invalid Day")
    }

    else if(monthHolder.value > 12){
        alert("Invalid Month")
    }

    else if(yearHolder.value > currentYear){
        alert("Invalid Year")
    }

    else{
        const birthDate = `${yearHolder.value}/${monthHolder.value}/${dayHolder.value}`
        let dateObject = new Date(birthDate)
        console.log(dateObject)
        let ageMill = new Date() - dateObject
        console.log(ageMill)
        const ageDiff = new Date(ageMill)
        console.log(ageDiff)
    
        yearResults.textContent = ageDiff.getUTCFullYear() - 1970
        monthResults.textContent = ageDiff.getUTCMonth()
        dayResults.textContent = ageDiff.getUTCDate() - 1

    }



}

dayHolder.addEventListener("input", (e)=>{
    if(+dayHolder.value > 31){
        isValid = false
        dayAlert.innerHTML = "Invalid Date"
        dayHolder.classList.add("change-color")
        pdWarn.classList.add("change-color")
        return
    }
    else{
        isValid = true
        dayAlert.innerHTML = ""
        dayHolder.classList.remove("change-color")
        pdWarn.classList.remove("change-color")

    }

    if(+dayHolder.value === 0){
        isValid = false
        dayAlert.innerHTML = "Must be a Valid Date"
        dayHolder.classList.add("change-color")
        pdWarn.classList.add("change-color")
        isValid = false
        return
    }

    else{
        isValid = true
        dayAlert.innerHTML = ""
        dayHolder.classList.remove("change-color")
        pdWarn.classList.remove("change-color")

    }
        

})

monthHolder.addEventListener("input", (e)=>{
    if(+monthHolder.value > 12){
        isValid = false
        monthAlert.innerHTML = "Invalid Month"
        monthHolder.classList.add("change-color")
        pmWarn.classList.add("change-color")
        return
    }
    else{
        isValid = true
        monthAlert.innerHTML = ""
        monthHolder.classList.remove("change-color")
        pmWarn.classList.remove("change-color")

    }

    if(+monthHolder.value === 0){
        isValid = false
        monthAlert.innerHTML = "Must be a Valid Month"
        isValid = false
        monthHolder.classList.add("change-color")
        pmWarn.classList.add("change-color")

        return
    }

    else{
        isValid = true
        monthAlert.innerHTML = ""
        monthHolder.classList.remove("change-color")
        pmWarn.classList.remove("change-color")

    }
        

})


yearHolder.addEventListener("input", (e)=>{
    let currentYear = new Date().getFullYear()

    if(+yearHolder.value > currentYear){
        isValid = false
        yearAlert.innerHTML = "Must be Current/Past Year"
        yearHolder.classList.add("change-color")
        pyWarn.classList.add("change-color")

        return
    }
    else{
        isValid = true
        yearAlert.innerHTML = ""
        yearHolder.classList.remove("change-color")
        pyWarn.classList.remove("change-color")

    }

    if(+yearHolder.value === 0){
        isValid = false
        yearAlert.innerHTML = "Must be a Valid Year"
        isValid = false
        yearHolder.classList.add("change-color")
        pyWarn.classList.add("change-color")

        return
    }

    else{
        isValid = true
        yearAlert.innerHTML = ""
        yearHolder.classList.remove("change-color")
        pyWarn.classList.remove("change-color")
    }
        

})




enterBtn.addEventListener("click", ageCalc)