var randomnumber1 = Math.floor((Math.random() * 6 ) + 1);
var randomnumber2 = Math.floor((Math.random() * 6 ) + 1);
var imgpath1 = "./images/dice"+randomnumber1+".png";
var imgpath2 = "./images/dice"+randomnumber2+".png";
document.querySelector(".img1").setAttribute("src" , imgpath1);
document.querySelector(".img2").setAttribute("src" , imgpath2);


if(imgpath1 > imgpath2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if(imgpath1 < imgpath2){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="It's a tie!";
}