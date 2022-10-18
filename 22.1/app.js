
let form = document.getElementById('form');
let sumbit =document.getElementById("sumbit");
let input =document.querySelector("input");
let ask=document.getElementsByClassName("ask_user");
let p1 = document.getElementById('1');
let p2 = document.getElementById('2');
let p3 = document.getElementById('3');

sumbit.addEventListener('onclick',function(e){
    e.preventDefault;
    ask.style.display = 'flex';
    ask.style.width='500px';
    ask.style.height='500px';
    ask.style.backgroundcolor='white';
    ask.style.border = "solid 2px black";

})