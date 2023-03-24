let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');
let screenValue = "";

for(let item of button){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText
        console.log("Button text is :", buttonText);
        if(buttonText == 'X'){
            buttonText = "*";
            screenValue = screenValue+buttonText;
            screen.value = screenValue; 
        }
        else if(buttonText == 'AC'){
            screenValue = "";
            screen.value= screenValue;
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue);
        }
        else{
            screenValue = screenValue+buttonText;
            screen.value = screenValue;
        }
    })
}