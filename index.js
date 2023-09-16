var randomNumber1=Math.random();
randomNumber1*=6;
randomNumber1=Math.floor(randomNumber1)+1;
document.querySelector("img").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2=Math.random();
randomNumber2*=6;
randomNumber2=Math.floor(randomNumber2)+1;
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1=== randomNumber2){
    document.querySelector("h1").textContent="Draw!";
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Play 1 win!";
}
else document.querySelector("h1").textContent="Play 2 win!🚩";