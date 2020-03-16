// Ex31 : Element Node Attribute Change
window.addEventListener("load", function() {
    var sec31 = document.querySelector("#sec31");
    var srcInput = sec31.querySelector(".src-input");
    var colorInput = sec31.querySelector(".color-input");
    // var srcSelect = sec31.querySelector("img-select");
    var chageBtn = sec31.querySelector(".change-btn");
    var img = sec31.querySelector(".img-class");
    
    chageBtn.onclick = function () {
        img.src =  "imges/" + srcInput.value;
        // img.src =  "imges/" + srcSelect.value;
        // img.style["border-color"] = colorInput.value;
        img.style.borderColor = colorInput.value;
        console.log(img.className);

    };


});