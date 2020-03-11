// window.onload = function () {
window.addEventListener("load", function() {
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var buttonAdd = document.getElementById("button-add");
    var txtSum = document.getElementById("txt-sum");

    buttonAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };

});