let target = document.querySelector("#typing");
let stringArr = ["웹 개발자", "프론트엔드 개발자", "웹 퍼블리셔"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

function typing(randomArr) {
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            typing(randomArr);
        }, 300); 
    }
}
typing(selectStringArr);

function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);


// var str = "프론트엔드 개발자";
// var c = 0;

// setInterval(function() {
//     if(c<10)
//         $('#typing').append(str[c]);
//         c++;
// }, 300);


// var options = {
//     strings: ["프론트엔드 개발자", "웹 개발자", "웹 퍼블리셔"],
//     typeSpeed: 40,
//     backSpeed: 100,
//     fadeOut: false,
//     smartBackspace: true,
//     cursorChar: '_',
//     loop: true
// };
// var typed = new Typed('#typing', options);
