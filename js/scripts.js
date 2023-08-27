const result = document.querySelector("#result");
const equalBtn = document.querySelector('#equal-btn');
const buttons = document.querySelectorAll("#buttons-container button");
const clearBtn = document.querySelector(".clear-btn");
const backspaceBtn = document.querySelector(".backspace-btn")
const screenOn = document.querySelector(".screen-on");

//Function

function clear(){
   result.innerHTML = "";
   screenOn.classList.remove("hide");
   result.classList.add("hide");

};

function equal(){
    if(result.textContent != 'Erro'){
                    
        result.innerHTML = eval(result.innerHTML)
    }
}

function backspace(){
    if(result.textContent){
        result.innerHTML = result.innerText.slice(0, -1) + ""
    }
    if(result.innerHTML === ""){
        screenOn.classList.remove("hide");
        result.classList.add("hide");
    }
};

//Event
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;
        if(value === "="){
            if(result.innerHTML ===""){
                return;
            }else{
                equal()
              
            }
        } else {
            result.innerHTML += value;
            screenOn.classList.add("hide");
            result.classList.remove("hide");
            
            /*preventing that operations cannot be
             typed beyond the least at the beginning of the calculation */
            const operat = ["+", "/", "*"]
            if(operat.includes(result.innerHTML.charAt(0))){
                result.innerHTML = ""
                screenOn.classList.remove("hide");
                result.classList.add("hide");
            }
    
            /* allowing operation editing*/
            const operations = ["+", "-", "/", "*"]
            if(operations.includes(value)){
                const tudo = result.innerText
                const penultimo = result.innerText.charAt(result.innerText.length -2);
                if(operations.includes(penultimo)){
                    result.innerHTML = tudo.slice(0, -1) + ""
                    result.innerHTML = tudo.slice(0, -2) + value
                }
            }
           
        }
        
    })
});

clearBtn.addEventListener("click", (e)=>{
    clear();
});

backspaceBtn.addEventListener("click", (e)=>{
    backspace();
});


