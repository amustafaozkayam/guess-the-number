let min = 1;
let max = 100;
let right = 10 ;

let minNumber = document.querySelector('.min');
let maxNumber = document.querySelector('.max');
let guessInput = document.getElementById('input');
let guessButton = document.querySelector('.button')
let messages = document.getElementById('message')
let container=document.querySelector('.container')
let result = document.getElementById('result')

minNumber.innerHTML = min;
maxNumber.innerHTML = max;

function randomNumber(){
    return Math.floor(Math.random() * 100 +1)
}
const number = randomNumber() 


guessButton.addEventListener('click',(e)=>{
    if(e.target.className ==='ply-again'){
        window.location.reload() 
    }
})

guessButton.addEventListener('click', ()=>{
 
   console.log(number);
   if(guessInput.value == '' || guessInput.value < min || guessInput.value > 100){
        messages.innerText = 'Invalid Enterance, Enter a Number Again..'
        messages.style.color = 'red'
        return;}

       
    if (guessInput.value == number){
        messages.innerText = 'You Win, Congrats...';
        result.innerText= ''  
        messages.style.color = 'blue';
        guessButton.style.backgroundColor = 'blue'
        guessInput.disabled = 'true'
        guessInput.style.borderColor = 'blue'
        guessButton.textContent = 'Play Again'
        guessButton.className = 'ply-again'    
    }

    
    else{
        right -=1
        if(guessInput.value ==''){
            return;
        }
        if (guessInput.value > number){
            result.innerText = 'Decrease!  '
            guessInput.value > number ? (maxNumber.innerText = guessInput.value) : null}

        if (guessInput.value < number){
            result.innerText='Incerase! '
            guessInput.value < number ? (minNumber.innerText = guessInput.value) : null}

    
        if(right <=0 ){
            messages.innerText = `Game Over, The number was : ${number}`
            guessInput.disabled = 'true'
            result.innerText= ''          
            guessInput.style.borderColor = 'red'
            messages.style.color = 'crimson'
            guessButton.textContent = 'Play Again'
            guessButton.className = 'ply-again'
            guessButton.style.backgroundColor = 'red'
            
                  
        
        }
        else{
            messages.innerText =`You have ${right} attempts left!`
            messages.style.color = 'green'
        }
    }
})

