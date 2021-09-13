const p1btn=document.querySelector("#p1btn");
const p2btn=document.querySelector("#p2btn");
const p1display=document.querySelector("#p1display");
const p2display=document.querySelector("#p2display");
const resetbtn = document.querySelector("#reset");
const newwinscore=document.querySelector("#playto");

let p1score=0;
let p2score=0;

let winscore=3;

let isgameover=false;

p1btn.addEventListener('click',function(){
    if(!isgameover)
    {
        p1score++;
        if(p1score===winscore)
        {
            isgameover=true;
            p1display.classList.add('has-text-success');
            p2display.classList.add('has-text-danger');
            p1btn.disabled=true;
            p2btn.disabled=true;
        }
        p1display.textContent=p1score;
    }
   
})


p2btn.addEventListener('click',function(){
    if(!isgameover)
    {
        p2score++;
        if(p2score===winscore)
        {
            isgameover=true;
            p2display.classList.add('has-text-success');
            p1display.classList.add('has-text-danger');
            p1btn.disabled=true;
            p2btn.disabled=true;
        }
        p2display.textContent=p2score;
    }
   
})



function reset(){
    isgameover=false;
    p1score=0;
    p2score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove('has-text-success','has-text-danger');
    p2display.classList.remove('has-text-success','has-text-danger');
    p1btn.disabled=false;
            p2btn.disabled=false;
}

newwinscore.addEventListener('change',function(){
    winscore=parseInt(this.value);
    reset();
})

resetbtn.addEventListener('click',reset)