// Ex30 : Element Node Attribute Change
window.addEventListener("load", function() {
    var sec30 = document.querySelector("#sec30");
    var srcInput = sec30.querySelector(".src-input");
    // var srcSelect = sec30.querySelector("img-select");
    var chageBtn = sec30.querySelector(".change-btn");
    var img = sec30.querySelector(".img");
    
    chageBtn.onclick = function () {
        img.src =  "imges/" + srcInput.value;
        // img.src =  "imges/" + srcSelect.value;
    };


});