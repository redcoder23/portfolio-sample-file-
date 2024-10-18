var n = Math.random();
n *= 6;
n = Math.floor(n) + 1;

var a = Math.random();
a *= 6;
a = Math.floor(a) + 1;


document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + n + ".png");

document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + a + ".png");
 
if(n>a) 
{
    document.querySelector("h1").textContent="🚩 PLAYER 1 WINS";
}
else if(a>n) 
{
    document.querySelector("h1").textContent="PLAYER 2 WINS 🚩";
}
else 
{
    document.querySelector("h1").textContent="DRAW"; 
}