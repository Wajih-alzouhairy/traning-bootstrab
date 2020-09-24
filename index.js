function addItems(e) {
  e.preventDefault();

  let input = document.getElementById("itemForm").value;
  if (input !== "") {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(input));
    let delteButton = document.createElement("button");
    delteButton.className = "btn btn-danger";
    delteButton.appendChild(document.createTextNode("X"));
    li.appendChild(delteButton);
    let ul = document.getElementById("itemsList");
    ul.appendChild(li);
  }
}
document.getElementById("add-form").addEventListener("submit", addItems);

let ul = document.getElementById("itemsList");
ul.addEventListener("click", deleteItems);
function deleteItems(e) {
  e.preventDefault();
  if (e.target.classList.contains("btn")) {
    let li = e.target.parentElement;
    ul.removeChild(li);
  }
}
document.getElementById("filter").addEventListener("keyup", searchItems);

function searchItems(e) {
  let searchItems = e.target.value;
  let items = ul.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    let itemsName = item.firstChild.textContent;
    if (itemsName.indexOf(searchItems) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
