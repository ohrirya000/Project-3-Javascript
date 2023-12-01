//Favorite activities show/hide descriptions code
var i1 = 0
function showDesc1() {
    var desc1 = document.getElementById("desc1");
    if(i1 == 1){
        descText1.remove()
        i1--
    } else {
        descText1 = document.createElement("p");
        descText1.classList.add("linktext");
        descText1.innerHTML = "I have been doing Taekwondo for 11 years, and have become a 3rd degree black belt. This is one of my favorite activities, and I go to class twice a week.";
        desc1.appendChild(descText1);
        i1++;
    }
}

var i2 = 0
function showDesc2() {
    var desc2 = document.getElementById("desc2");
    if(i2 == 1){
        descText2.remove()
        i2--
    } else {
        descText2 = document.createElement("p");
        descText2.classList.add("linktext");
        descText2.innerHTML = "This is one of my favorite things to do in my downtime. I don't usually play competitive games, but I play Rocket League, Forza Horizon 5, and some others like Minecraft.";
        desc2.appendChild(descText2);
        i2++;
    }
}

var i3 = 0
function showDesc3() {
    var desc3 = document.getElementById("desc3");
    if(i3 == 1){
        descText3.remove()
        i3--
    } else {
        descText3 = document.createElement("p");
        descText3.classList.add("linktext");
        descText3.innerHTML = "Another thing I like to do during free time is listen to music. I really enjoy it, and a fun fact is that I have over 300 songs in one play list.";
        desc3.appendChild(descText3);
        i3++;
    }
}
var number1 = document.getElementById("num1")
var number2 = document.getElementById("num2")
var number3 = document.getElementById("num3")

function changeSiteColor(){
    if(document.body.style.backgroundColor == "rgb(240, 240, 240)"){
        document.body.style.backgroundColor = "rgb(25, 25, 25)";
        number1.style.backgroundColor = "rgb(106, 17, 190)"
        number2.style.backgroundColor = "rgb(106, 17, 190)"
        number3.style.backgroundColor = "rgb(106, 17, 190)"
    } else {
        document.body.style.backgroundColor = "rgb(240, 240, 240)";
        number1.style.backgroundColor = "aqua"
        number2.style.backgroundColor = "aqua"
        number3.style.backgroundColor = "aqua"
    };
};