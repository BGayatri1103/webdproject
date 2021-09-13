let max=parseInt(prompt("Enter the maximum number: "));
while(!max)
{
    max=parseInt(prompt("Enter a valid number: "));
}
const target = Math.floor(Math.random()*max)+1;


let guess = parseInt(prompt("Enter your first guess: "));
let attempt=1;
while(parseInt(guess)!==target)
{
    if(guess==='stop') break;
    attempt++;
    if(guess>target)
    guess = prompt("Too high! Enter a new guess: ");
    
    else 
    guess = prompt("Too low! Enter a new guess: ");
}
if(guess==='stop')
console.log("GOODBYE!! SEE YOU AGAIN SOON.")
else
{console.log("YOU GOT IT!!");
console.log(`It took you ${attempt} guess(s).`);}