// Ex03-02 : Select API level 02
window.addEventListener("load", function () {
    var sec03 = document.getElementById("sec03-2");
    
    var txtX = sec03.querySelector("input[name='x']");
    var txtY = sec03.querySelector("input[name='y']");
    var buttonAdd = sec03.querySelector("input[name='add']");
    var txtSum = sec03.querySelector("input[name='sum']");

    buttonAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };

});

// Ex03-01 : Select API level 01
window.addEventListener("load", function () {
    var sec03 = document.getElementById("sec03-1");
    
    var txtX = sec03.querySelector(".txt-x");
    var txtY = sec03.querySelector(".txt-y");
    var buttonAdd = sec03.querySelector(".btn-add");
    var txtSum = sec03.querySelector(".txt-sum");

    buttonAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };

});
