// window.onload = function () {
window.addEventListener("load", function() {
    var btnPrint = document.getElementById("btn-print");

    btnPrint.onclick = function () {

        var x = prompt("please input x : ", 0);
        var y = prompt("please input y : ", 0);

        x = parseInt(x);
        y = parseInt(y);

        btnPrint.value = x + y; // value값 변경
    };

});