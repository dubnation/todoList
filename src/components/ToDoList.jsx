import { ToDoCard } from "./ToDoCard"; // Ensure this is at the top of the file



export function ToDoList(props) {
    const { todos, currTab, handleDoneTodo} = props;
    console.log(props)

    function tabList(tab) {
        let newToDoList = []
        switch (tab) { // Use the parameter passed to the function
            case 'Open':
                todos.forEach(todo => {
                    if (todo.complete === false) {
                        newToDoList.push(todo)
                    }
                });
                console.log(newToDoList)
                return newToDoList // Return filtered results directly
            case 'Completed':
                return todos.filter(val => val.complete); // Return filtered results directly
            default:
                return todos; // Return all todos if tab doesn't match 'Open' or 'Completed'
        }
    }


    const filteredTodos = tabList(currTab)

    return (
        <>
        {filteredTodos.map((todo, todoIndex) => (
            <ToDoCard 
            key={todoIndex} 
            todo={todo} 
            handleDoneTodo = {handleDoneTodo}
            {...props} // Pass other necessary props
            />
        )
    )}      
        </>
    );
}



