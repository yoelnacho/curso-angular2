import { 
    Component, 
    OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
    selector: 'todos',
    templateUrl: 'app/view/todo.component.html',
    providers: [TodoService]
})

export class TodoComponent implements OnInit {
    public todos:Array<any>;
    public text:string;
    public title:string;
    public editText:string;
    public status:string;
    public oldText:string;
    public total:number;

    constructor(private _todoService: TodoService) { }

    ngOnInit() { 
        this.todos = this._todoService.getTodos();
        this.title = "Todo";
        this.totalTodo();
    }

    totalTodo(){
        this.total = this.todos.length;
        return this.total;
    }

    addTodo(){
        var newTodo = {
            text: this.text
        }
        // Add todo
        this.todos.push(newTodo);

        // Corro la funcion addTodo pasandole el valor obtenido, para almacenarlo en localStorage
        this._todoService.addTodo(newTodo);
        
        // limpio el valor de la variable que se muestra en el input
        this.text = "";
        this.totalTodo();
    }

    deleteTodo(value){
        // bucle mientras index sea menor a la cantidad de elementos del array
        for (var index = 0; index < this.todos.length; index++) {
            // y si la posición del item del array contenga el valor igual del atributo text al valor recibido en la funcion
            if (this.todos[index].text == value) {
                // elimina el item que esté en esa posición del array
                this.todos.splice(index, 1);
                this.totalTodo();
            }   
        }

        // Corro la funcion deleteTodo, pasando el valor a eliminar en el localStorage
        this._todoService.deleteTodo(value);
    }

    editTodo(editText){
        this.status = "edit";
        this.oldText = editText.text;
        this.text = editText.text;

        console.log(this.text);
    }

    updateTodo(){
        // bucle mientras index sea menor a la cantidad de elementos del array
        for (var index = 0; index < this.todos.length; index++) {
            // y si la posición del item del array contenga el valor igual del atributo text al valor recibido en la funcion
            if (this.todos[index].text == this.oldText) {
                // actualizo el item que esté en esa posición del array
                this.todos[index].text = this.text
            }
        }

        // Corro la funcion updateTodo, pasando el valor a editar y el antiguo valor.
        this._todoService.updateTodo(this.text, this.oldText);

        this.status = "default";
        this.text = "";
    }

}