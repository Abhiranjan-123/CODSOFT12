let butt = document.querySelector(".button");
let box = document.querySelector(".box999");
let buttx = document.querySelector(".button1");
let buttonn = document.querySelector("#bhi");
let k=document.querySelector(".c");
let l = document.querySelector(".bla");
let m = document.querySelector(".thank");


butt.addEventListener("click",() => {
    box.classList.remove('box999'); 
      box.classList.add('box9999'); 
});
buttx.addEventListener("click",() =>{
    box.classList.add('box999');
    box.classList.remove('box9999');
});

/*buttonn.addEventListener("click",() =>{
   k.classList.add('n');
   k.classList.remove('pk23');
    
 });*/

l.addEventListener("click",() =>{
    m.classList.remove('thank');
    m.classList.add('thank1');
});














