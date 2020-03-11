// Ex02 : Element selction second Step
window.addEventListener("load", function () {
    var sec02 = document.getElementById("sec02-2");
    
    var txtX = sec02.getElementsByClassName("txt-x")[0];
    var txtY = sec02.getElementsByClassName("txt-y")[0];
    var buttonAdd = sec02.getElementsByClassName("button-add")[0];
    var txtSum = sec02.getElementsByClassName("txt-sum")[0];

    buttonAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };

});

// Ex02 : Element selction upgrade first Step
window.addEventListener("load", function () {
    var sec02 = document.getElementById("sec02-1");
    var inputs = sec02.getElementsByTagName("input");

    var txtX = inputs[0];
    var txtY = inputs[1];
    var buttonAdd = inputs[2];
    var txtSum = inputs[3];

    buttonAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };

});

// Ex01 : Calculte Program
window.addEventListener("load", function () {
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