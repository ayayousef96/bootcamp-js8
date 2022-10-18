const keyboard = document.querySelector('.keyboard');
let letters_guessed = document.getElementById('letters_guessed');
let box =document.getElementById('letter');
let play_again= document.getElementById('play_again');
let all_letters =new Set();
let msg = document.getElementById('msg');
let the_letter ='a';
document.body.addEventListener('keypress', function(e) {
    if(e.key == the_letter){
        msg.innerText = 'Right Letter!';
        msg.style.color='green';
        box.innerText = the_letter;
        play_again.innerText="Do you want to play again?"
        let yesbtn = document.createElement('button');
        yesbtn.style.width='50px';
        yesbtn.style.height='20px';
        yesbtn.type=SubmitEvent;
        yesbtn.innerText='yes'
        yesbtn.style.backgroundColor='white';
        document.body.appendChild(yesbtn);
        
        
    }
    if(e.key != the_letter){
        msg.innerText = 'Nope , Wrong letter!!';
        msg.style.color='red';
    }
    if( letters_guessed.innerText == ''){
        letters_guessed.innerText=e.key;
        all_letters.add(e.key);
    }
    else{
        if(all_letters.has(e.key)){
            msg.innerText = "you had guessed this letter before!";

        }
        else{
            all_letters.add(e.key);
            letters_guessed.innerText= letters_guessed.innerText +' ,' + e.key;
        }
    }
    
    
})