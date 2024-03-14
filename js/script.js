// Variables
var body = document.body;
var addTodo = document.getElementById("addTodo");
let todoList = document.getElementById("todoList");
var todoBottom = document.getElementById("todoBottom");
var filterButtonsContainer = document.getElementById("filterButtonsContainer");
var todoActions = document.getElementById("todoActions");
var clearCompletedButton = document.getElementById("clearCompletedButton");
var showAll = document.getElementById("showAll");
var showAllLabel = document.getElementById("showAllLabel");
var showActive = document.getElementById("showActive");
var showActiveLabel = document.getElementById("showActiveLabel");
var showCompleted = document.getElementById("showCompleted");
var showCompletedLabel = document.getElementById("showCompletedLabel");
var itemsLeftCount = document.getElementById("itemsLeftCount");
var itemCount = 0;


// Function for adding todo items
function addTodoItem() {

    itemCount += 1;
    itemsLeftCount.innerHTML = itemCount;

    var listItem = document.createElement("li");
    listItem.id = "listItem";

    var todoLink = document.createElement("a");
    todoLink.id = "todoLink";

    var newTodo = document.getElementById("newTodo");
    var todoText = document.createTextNode(newTodo.value);
    newTodo.value = "";

    todoLink.appendChild(todoText);
    listItem.appendChild(todoLink);
    todoList.appendChild(listItem);

    // Button for completing todo item
    var completeButton = document.createElement("button");
    completeButton.classList.add("button", "circle");
    listItem.appendChild(completeButton);

    completeButton.addEventListener("click", () => {

        completeButton.classList.toggle("check") +
            todoLink.classList.toggle("strike") + listItem.classList.toggle("cL");

        if (listItem.classList.contains("cL")) {
            itemCount -= 1;
            itemsLeftCount.innerHTML = itemCount;
        }

        else {
            itemCount += 1;
            itemsLeftCount.innerHTML = itemCount;
        }

    });


    // Button for deleting todo item
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("cross");

    deleteButton.addEventListener("click", () => {

        listItem.remove()

        if (!listItem.classList.contains("cL")) {
            itemCount -= 1;
            itemsLeftCount.innerHTML = itemCount;
        }

    });

    listItem.appendChild(deleteButton);


    // Button for deleting completed todo items
    clearCompletedButton.addEventListener("click", () => {

        itemCount != 0;
        itemsLeftCount.innerHTML = itemCount;

        if (listItem.classList.contains("cL")) {
            listItem.remove()
        }

    });


    // Filter for showing all the todo items
    showAll.addEventListener("click",
        () => {

            showAllLabel.classList.add("active");
            showActiveLabel.classList.remove("active");
            showCompletedLabel.classList.remove("active");

            if (listItem.classList.contains("cL")) {
                listItem.style.display = "block";
            } else {
                listItem.style.display = "block"
            }


        });

    // Filter for showing all the active todo items
    showActive.addEventListener("click",
        () => {

            showActiveLabel.classList.add("active");
            showAllLabel.classList.remove("active");
            showCompletedLabel.classList.remove("active");

            if (listItem.classList.contains("cL")) {
                listItem.style.display = "none"
            } else {
                listItem.style.display = "block"
            }


        });

    // Filter for showing all the completed todo items
    showCompleted.addEventListener("click",
        () => {

            showActiveLabel.classList.remove("active");
            showAllLabel.classList.remove("active");
            showCompletedLabel.classList.add("active");

            if (listItem.classList.contains("cL")) {
                listItem.style.display = "block"
            } else {
                listItem.style.display = "none"
            }


        });

}

// Function for toggling theme
function toggleTheme() {
    var themeIcon = document.getElementById("themeIcon");
    var filterButtonsContainer = document.getElementById("filterButtonsContainer");
    var listItemDark = document.querySelector("#listItem");
    if (themeIcon.getAttribute('src') === "images/icon-moon.svg") {

        themeIcon.setAttribute('src',
            "images/icon-sun.svg");
    } else {

        themeIcon.setAttribute('src', "images/icon-moon.svg");
    }



    body.classList.toggle("dark-mode");
    addTodo.classList.toggle("dark-todo");
    todoBottom.classList.toggle("dark-bottom");
    todoActions.classList.toggle("dark-todoActions");
    todoList.classList.toggle("dark-todoList");
    filterButtonsContainer.classList.toggle("dark-filterButtonsContainer");
}