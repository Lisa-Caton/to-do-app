function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');//form
  const newToDoText = document.getElementById('newToDoText');//input
  const toDoList = document.getElementById('toDoList');//ul

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;// get the text

    let newLi = document.createElement('li');// creat a new li
    let deleteBtn = document.createElement('input');// create a button
    let checkbox = document.createElement('input');// create a new input


    checkbox.type = "checkbox";// set the input's type to checkbox
    deleteBtn.type = "button";// set the input's type to button

    deleteBtn.value = 'delete';// Text content into the delete button
    deleteBtn.setAttribute("id","deleteBtn");

    newLi.textContent = title;// set the title

    newLi.appendChild(checkbox);// attach the checkbox to the li
    newLi.appendChild(deleteBtn);// attach the deleteBtn to the li

    toDoList.appendChild(newLi);// attach the li to the ul

    newToDoText.value = '';// empty the input

     deleteBtn.addEventListener('click', function(){
       toDoList.removeChild(newLi);
      });//ends addEventListener

  });//end addToDoForm.addEventListener
}//end function onReady

window.onload = function() {
  // alert("The window has been loaded!");
  onReady();


};
