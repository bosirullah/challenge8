var ratingNum = 0;
for(var i = 0;i<5;i++){
    document.querySelectorAll(".box")[i].addEventListener("click",function (){  
        resetStyle();
        this.classList.add("box-click-style");
        ratingNum = getRatingNum();
    })  
}

document.querySelector("button").addEventListener("click",function (){
    var element = document.querySelector("img");
    element.setAttribute("src","images/illustration-thank-you.svg");

    element.classList.add("img2");
    removePrevTags();
    changeText();
    createElement();
    
})

function changeText(){
    document.querySelector('h1').innerHTML = "Thank You";
    document.querySelector('p').innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support,don’t hesitate to get in touch!";
    document.querySelector('h1').classList = "text";
    document.querySelector('p').classList = "text";
}

function removePrevTags(){
    document.querySelector(".img1").classList.remove("img1");
    document.querySelector(".boxes").remove();
    document.querySelector("button").remove();
}

function resetStyle(){
    for(var i = 0;i<5;i++){
        document.querySelectorAll('.box')[i].classList.remove("box-click-style");
    }
}

function getRatingNum(){
    var num = document.querySelector(".box-click-style");
    return num.textContent;
}

function createElement(){
    document.querySelector(".rat").classList.add("rating");
    var ele = document.createElement('p');
    var text = document.createTextNode("You selected " + ratingNum + " out of 5");
    ele.appendChild(text);
    var parent = document.querySelector(".rating");
    parent.appendChild(ele);
}