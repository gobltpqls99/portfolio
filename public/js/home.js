let target = document.querySelector("#typing");
let stringArr = ["웹 개발자", "프론트엔드 개발자", "웹 퍼블리셔"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 300);





var typingInterval = null;
var typing = ['프론트엔드 개발자', '웹 개발자', '백엔드 개발자', '웹 퍼블리셔'];
var typingIdx = 0;
var $span = $('#typing')

typingInterval = setInterval(onInterval, 150);
function onInterval() {
	var spanLen = $span.text().length;
	var typingLen = typing[typingIdx].length

	if(spanLen == typingLen) {
		clearInterval(typingInterval);
		setTimeout(function(){
			$span.html('&nbsp;');
			typingIdx = typingIdx == typing.length - 1 ? 0 : typingIdx + 1;
			typingInterval = setInterval(onInterval, 150);
		}, 2000)
	}
	else {
		$span.text( typing[typingIdx].substr(0, spanLen + 1) )
	}
}
