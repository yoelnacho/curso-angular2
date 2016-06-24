export class Init {
    load(){
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
            console.log('No todos Found...');
            
            var todos = [
                { text: "Primer item"},
                { text: "Segundo item"},
                { text: "Tercer item"}
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return 
        } else {
            console.log('Found Todos...');
        }        
    }
}
