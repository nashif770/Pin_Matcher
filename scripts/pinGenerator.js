// pin generator
console.log("hey"); 
function generatePin(){
    let pinGenerated = Math.random()*10000;
    let pin = parseInt(pinGenerated);
    return pin;
}

function getPin (){
    let pin = generatePin();
    let pinString = pin+'';
    if(pinString.length === 4){ 
        return pin;
    }
    else{
        return getPin();
    }

}
//  Code for Generating nUmber 

document.getElementById('generate-pin').addEventListener('click',function(){
    let pin = getPin();
    let displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})    

//code for matching Pins.

document.getElementById('numberPad').addEventListener('click',function(event){
    let numberclicked = event.target.innerText;
    const typeNumberField = document.getElementById('pinField');
    const previousTypedNumber = typeNumberField.value;
    const newTypedNumber = previousTypedNumber+numberclicked;

    if(isNaN(numberclicked)){
        if(numberclicked === 'C'){
            typeNumberField.value = '';
        }
        else if (numberclicked === '<'){
            let num = previousTypedNumber.split('');
            num.pop();
            const Digits = num.join('');
            typeNumberField.value = Digits;
            
        }
    }
    else{
        typeNumberField.value = newTypedNumber;

        if(numberclicked === "<"){
            console.log("yo");
        }
    }
})
