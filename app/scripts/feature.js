function feature() {
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
    unfade(document.getElementById('light'));
}
function feature_close() {
    fade(document.getElementById('light'));
    setTimeout(function(){
        document.getElementById('light').style.display='none';
        document.getElementById('fade').style.display='none';
    },500);
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
