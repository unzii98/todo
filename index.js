#!/usr/bin/env node
import inquirer from "inquirer";
let todos = ["sara", "unzi"];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Select an option ",
                choices: ["Add", "update", "view", "delete"]
            }
        ]);
        if (ans.select === "Add") {
            let addTodo = await inquirer.prompt([
                {
                    type: "input",
                    message: "Add item in a list",
                    name: "todo"
                }
            ]);
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select === "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "update item in the list",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add item in a list",
                name: "todo"
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select === "view") {
            console.log("****TO DO List***");
            console.log("todos");
            console.log("**************");
        }
        if (ans.select === "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "update item in the list",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log("todos");
        }
    } while (true);
}
createTodo(todos);
