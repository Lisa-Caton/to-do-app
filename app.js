function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');//form
  const newToDoText = document.getElementById('newToDoText');//input
  const toDoList = document.getElementById('toDoList');//ul


  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;// get the text

    let newLi = document.createElement('li');// creat a new li

    let checkbox = document.createElement('input');// create a new input

    checkbox.type = "checkbox";// set the input's type to checkbox

    newLi.textContent = title;// set the title

    newLi.appendChild(checkbox);// attach the checkbox to the li

    toDoList.appendChild(newLi);// attach the li to the ul

    newToDoText.value = '';// empty the input

  });//end addToDoForm.addEventListener
}//end function onReady

window.onload = function() {
  alert("The window has been loaded!");
  onReady();
};
