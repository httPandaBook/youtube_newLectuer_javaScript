// Ex33-1 : Element Node Attribute Change
window.addEventListener("load", function() {
    var sec33 = document.querySelector("#sec33");
    var menuListDiv = sec33.querySelector(".menu-list");
    var titleInput = sec33.querySelector(".title-input");
    var addBtn = sec33.querySelector(".add-btn");
    var delBtn = sec33.querySelector(".del-btn");
    
    addBtn.onclick = function () {
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        
        var aNode = document.createElement("a");
        aNode.href = "";
        aNode.appendChild(txtNode);


        var liNode = document.createElement("li");
        liNode.appendChild(aNode);
        
        menuListDiv.appendChild(liNode);
    };
    delBtn.onclick = function () {
        var txtNode = menuListDiv.childNodes[0];
        menuListDiv.removeChild(txtNode);
    };


});