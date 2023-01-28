    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
        // .then( () => populateTodos())
        // .then(() => logTodos())
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        for(let i=0; i < arrayOfTodos.length; i++){

    // find the order list by ID and put it in a variable
    let todoList = document.getElementById('todo-list');

    // create an element for a list item (li)
    let todoItem = document.createElement('LI');

    // create the text element for the title
    let todoTitle = document.createTextNode(arrayOfTodos[i].title)

    // put the list item in the order list (ol)
    todoItem.appendChild(todoTitle);
    todoList.appendChild(todoItem);
    } }


const populateTodos2 = () => {
let todoSection = document.getElementById('container');
let tdTitle =  doucment.createTextNode(arrayOfTodos[0].title);
let tdComplete = docment.createTextNode(arrayOfTodos[0].completed);
let tdLine = 'Title: ${tdTitle} status is ${todoComplete}'

let todoP = document.createElement('P');

}