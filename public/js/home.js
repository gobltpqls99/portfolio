
var str = "프론트엔드 개발자";
var c = 0;

setInterval(function() {
    if(c<10)
        $('#typing').append(str[c]);
        c++;
}, 300);