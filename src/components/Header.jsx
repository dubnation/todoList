export function Header(props) {
    const { todos } = props
    const todosLength = todos.length

    var open = 0;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].complete === false) {
            open = open + 1
        }
    }

    const isTasksPlural = todos.length != 1
    const booleanToString = (bool) => {
        if (bool) {
            return "tasks";
        } else {
            return "task";
        }
    };
    
    return (
        <header>
            <h1 className = "text-gradient"> You have {open} {booleanToString(isTasksPlural)} open.</h1>
        </header>
    )
}