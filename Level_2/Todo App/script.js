var items = JSON.parse(localStorage.getItem("todo-list")) || [];

// function to add item to the items array
function addItem() {
  var inputBox = document.querySelector("#todo-input");
  var item = inputBox.value;

  // If input box is empty, return and alert the user
  if (item === "") return alert("Enter Some Tasks it Can't be Empty");

  // If input is valid, add item to items array
  items.push({
    value: item,
    time: new Date().toLocaleDateString("en-US")
  });

  // then convert to a string with JSON.stringify and save to localStorage
  localStorage.setItem("todo-list", JSON.stringify(items));

  // call function to list all items
  listItems();

  // clear input box
  inputBox.value = "";
}

// removes item, then saves new items array to localStorage
function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

function markAsDone(index) {
  items[index].done = !items[index].done;
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

// function that generates list of items and populates the html
function listItems() {
  var list = "";
  for (var i = 0; i < items.length; i++) {
    list += "<li class=" + (items[i].done ? "done" : "") + ">";
    list += items[i].value + " ";
    list +=
      "<small title='click me to mark as done' class='label' onclick='markAsDone(" +
      i +
      ")'>" +
      items[i].time +
      "</small> ";
    list +=
      "<span class='label alert' onclick='deleteItem(" +
      i +
      ")'>delete</span></li>";
  }
  document.querySelector("#list-items").innerHTML = list;
}

// function to run when page loads
(function () {
  listItems();
})();
