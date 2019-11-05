function ToDoList() {
  this.todo = []
}

ToDoList.prototype.addTask = function(task) {
  this.todo.push("<li>" + task + "</li>");
}

function Todo(thing) {
  this.thing = thing
}

// Todo.prototype.taskli = function() {
//   return this["<li>" + "thing" + "</li>"];
// }

var todoList = new ToDoList();



// begin frontend

$(document).ready(function() {
  $(".form-group").submit(function(event) {
      event.preventDefault();
    var userInput = $("input#newtask").val();
    var task = new Todo(userInput);
    todoList.addTask(task);




    console.log(task.thing);
    console.log(todoList);

// new Todo(

    $("ul#outputlist").append(task.thing);


  });
});






// being testing stuff

//
// var task = new Todo("laundry");
// var task1 = new Todo("sweep");
// var task2 = new Todo("paint the fence");
//
// todoList.addTask(task);
// todoList.addTask(task1);
// todoList.addTask(task2);
//
// console.log(todoList);
