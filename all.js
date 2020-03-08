$(function () {
    function removeLoading() {
        $(".loading").fadeOut(800);
    }

    $(window).on('load', function () {
        setTimeout(function () {
            removeLoading();
        }, 100);
    }); 
    
    console.log(".o88b.  .d88b.  db    db d888888b d8888b.\n") +
    console.log("d8P  Y8 .8P  Y8. 88    88   `88'   88  `8D\n") +
    console.log("8P      88    88 Y8    8P    88    88   88\n") +
    console.log("8b      88    88 `8b  d8'    88    88   88\n") +
    console.log("Y8b  d8 `8b  d8'  `8bd8'    .88.   88  .8D\n") +
    console.log(" `Y88P'  `Y88P'     YP    Y888888P Y8888D'\n\n") +
    console.log("oooooooooooooooooooooooooooooooooooooooo\n\n") +
    console.log("오우 이스터에그를 발견하셨군요! 만나서 반갑습니다 :-D")
    console.log("이 웹 개발자의 포트폴리오를 보시려면 php1.dothome.co.kr로 가시면 됩니다!")
});

$(document).ready(() => {
    $.getJSON("https://api.msub.kr/", (c) => {
        $("#confirmation").append(c.confirmation);
        $("#cured").append(c.cured);
        $("#dead").append(c.dead);
        $("#suspicion").append(c.suspicion)
        $("body")
    });
});