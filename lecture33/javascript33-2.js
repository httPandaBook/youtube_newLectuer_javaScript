// Ex33-2 : Element Node Attribute Change
window.addEventListener("load", function() {
    var sec33 = document.querySelector("#sec33");
    var menuListDiv = sec33.querySelector(".menu-list");
    var titleInput = sec33.querySelector(".title-input");
    var addBtn = sec33.querySelector(".add-btn");
    var delBtn = sec33.querySelector(".del-btn");
    
    addBtn.onclick = function () {
        var title = titleInput.value;
        // menuListDiv.innerHTML += "<li><a href=''>" + title + "</a></li>";
        var html = "<a href=''>" + title + "</a>"
        var li = document.createElement("li");
        li.innerHTML = html;

        menuListDiv.appendChild(li);
        // menuListDiv.append(title);

    };
    delBtn.onclick = function () {
        var txtNode = menuListDiv.childNodes[0];
        
        var liNode = menuListDiv.children[0];
        // menuListDiv.removeChild(liNode);
        liNode.remove();

    };


});