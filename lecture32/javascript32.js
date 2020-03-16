// Ex32 : Element Node Attribute Change
window.addEventListener("load", function() {
    var sec32 = document.querySelector("#sec32");
    var menuListDiv = sec32.querySelector(".menu-list");
    var titleInput = sec32.querySelector(".title-input");
    var addBtn = sec32.querySelector(".add-btn");
    var delBtn = sec32.querySelector(".del-btn");
    
    addBtn.onclick = function () {
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        menuListDiv.appendChild(txtNode);
    };
    delBtn.onclick = function () {
        var txtNode = menuListDiv.childNodes[0];
        menuListDiv.removeChild(txtNode);
    };


});