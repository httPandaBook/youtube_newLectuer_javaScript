// Ex04-01 : Select API level 01 with ChildNode
window.addEventListener("load", function () {
    var sec04 = document.querySelector("#sec04-1");
    // var inputs = sec04.querySelectorAll("input");
    var box = sec04.querySelector(".box");
    var input01 = box.children[0]; // box.childNodes[0];
    var input02 = box.children[1]; // box.childNodes[1];

    input01.value = "hello";
    input02.value = "okay";

});
