export function Tabs(props) {
    const { todos, currTab, setCurrTab } = props
    const tabs = ['All', 'Open', 'Completed']

    var open = 0;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].complete === false) {
            open = open + 1
        }
    }

    const numTasks = [todos.length, open, todos.length - open]
    return (
        <nav className = "filter-buttons">
            {tabs.map((tab, tabIndex) => {
                return (
                    <button key = {tabIndex}
                    onClick = {() => {setCurrTab(tab);}}
                    className = "filter-buttons">
                        
                        <h4>{tab} {(numTasks[tabIndex])}</h4>
                    </button>
                )
            })}

        </nav>
    )
}