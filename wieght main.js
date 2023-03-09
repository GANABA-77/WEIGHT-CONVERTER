const form = document.querySelector(".my-form")
const inputField = document.querySelector(".kilo");
const msg = document.querySelector(".msg")
const gramInputField = document.querySelector("#gram")
const useList = document.querySelector("#user")

//---------- ADDING EVENTLISTENER---------//
form.addEventListener("submit", onSubmit);

//---------- CREATE A FUNCTION---------//
function onSubmit(e) {
    e.preventDefault();

    if(inputField.value === ""){
        msg.classList.add("error");
        msg.innerHTML = "Please input all Fields";

        setTimeout(() => msg.remove(), 1000);
    } 
    else{
//---------- PERFORM CALCULATION ---------//
        const inputValue = inputField.value;
        const convert = inputValue * 1000;
        gramInputField.value = convert ;
    }

   if(gramInputField === ""){
    msg.classList.add("error");
    msg.innerHTML = "Please input all Fields";

    setTimeout(() => msg.remove(), 1000);
   }
   else{
    const inputValue = gramInputField.value;
    const convert = inputValue / 1000;
    inputField.value = convert ;
   }
}