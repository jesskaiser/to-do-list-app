
function newItem() {

  //Adding a new item to the list of items: 

  //let li = document.createElement("li");
  let li = $('<li></li>');
  //let inputValue = document.getElementById("input").value;
  let inputValue = $('#input').val();
  //let text = document.createTextNode(inputValue);
  //li.appendChild(text);
  li.append(inputValue);

  if (inputValue === '') {
     alert("You must write something!");
  } else {
     //let list = document.querySelector('#list');
    //list.appendChild(li);
    $('#list').append(li)
  }

  //Crossing out an item from the list of items:
  
   function crossOut() {
     //li.classList.toggle("strike");
     li.toggleClass("strike");
   }
  //li.addEventListener("dblclick",crossOut);
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });
  
  //Adding the delete button "X": 

  //let crossOutButton = document.createElement("crossOutButton");
  let crossOutButton = $('<crossOutButton>X</crossOutButton>');
  //crossOutButton.appendChild(document.createTextNode("X"));
  crossOutButton.append(document.createTextNode('X'));
  //li.appendChild(crossOutButton);
  li.append(crossOutButton);

  //crossOutButton.addEventListener("click", deleteListItem);
  crossOutButton.on("click", deleteListItem);
  
  //Adding CLASS DELETE(DISPLAY: NONE) from the css:

   function deleteListItem(){
     //li.classList.add("delete")
     li.addClass("delete")
   }
  
  //Reordering the items: 

  $('#list').sortable();
}