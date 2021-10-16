var randomNumber1= Math.random();
var randomNumber2=Math.random();
randomNumber1 =Math.floor(randomNumber1 *6)+1;
randomNumber2 =Math.floor(randomNumber2 *6)+1;
console.log(randomNumber1+","+randomNumber2);

var randomNumberImg1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomNumberImg1);

/**************************Random Number2************************************* */

var randomNumberImg2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomNumberImg2);
/************************Header change***************************/
if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").textContent="Draw!";
}
else if (randomNumber1>randomNumber2)
{document.querySelector("h1").textContent="🚩Player1 Wins";}


else{
    document.querySelector("h1").textContent="Player2 Wins🚩";
}