import { Injectable } from '@angular/core';
import { Init} from '../model/todo.model';

@Injectable()
export class TodoService extends Init {
    constructor(){
        super(); // se utiliza al extender el Init
        console.log("inicializando...");
        this.load();
    }

    getTodos(){
        var todos = JSON.parse(localStorage.getItem('todos'));
        return todos;
    }

    addTodo(newTodo){
        var todos = JSON.parse(localStorage.getItem('todos'));
        
        // Add new todo
        todos.push(newTodo);
        
        // Set new todo
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    deleteTodo(value){
        var todos = JSON.parse(localStorage.getItem('todos'));
        
        // Delete todo
        for (var index = 0; index < todos.length; index++) {
            if (todos[index].text == value) {
                todos.splice(index, 1);
            }   
        }
        
        // Set new todo
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    updateTodo(newText, oldText){
        var todos = JSON.parse(localStorage.getItem('todos'));
        
        // Actualizar el valor
        for (var index = 0; index < todos.length; index++) {
            if (todos[index].text == oldText) {
                todos[index].text = newText
            }   
        }
        
        // Set new todo
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}