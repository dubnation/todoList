import { useState } from 'react'


export function ToDoInput(props) {
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState('')
    return (
        <div className = "input-container">
            <input value = {inputValue} onChange = {(e) => {setInputValue(e.target.value)}} placeholder = "Add task"/>
            <button onClick = {() => {
                if (!inputValue) { return }
                handleAddTodo(inputValue)
                setInputValue('')
            }}
            > 
                <h4> 
                    Add
                </h4>

            </button>



        </div>
    )
}