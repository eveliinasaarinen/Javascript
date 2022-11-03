document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kirjoita jotain!") //Lisäsin kommentin jos kenttä tyhjä
            
    }

    else if(document.querySelector('#newtask input').value.length < 3){
        alert("Tekstin tulee olla vähintään 3 merkkiä pitkä!") //Lisäsin kommentin jos alle 3 merkkiä
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">Poista
                </button>
            </div>
        `; //Poisto nappula

        // function to add todos to local storage
function addToLocalStorage(tasks) {
    // conver the array to string then store it.
    localStorage.setItem('todos', JSON.stringify(tasks));
    // render them to screen
    renderTodos(tasks);
  }
  // function helps to get everything from local storage
function getFromLocalStorage() {
    const reference = localStorage.getItem('tasks');
    // if reference exists
    if (reference) {
      // converts back to array and store it in todos array
      todos = JSON.parse(reference);
      renderTodos(todos);
    }
  }
  // initially get everything from localStorage
  getFromLocalStorage();
        

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
