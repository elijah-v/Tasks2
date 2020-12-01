import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import Days from './Days';

const TodoList = () => {
    const [todos,setTodos] = useState([
        {
            input: 'Example tasks',
            id: Math.random() * 10000,
            description: '-To start click a day of the week. \n-Write a task title in the add task field. \n-To expand a task click on the dropdown arrow. To collapse it click on the collapse arrow. \n-To edit a task click on the edit button. Add a description and rewrite the title if desired. \n-To mark a task as completed without deleting it click on the checkmark button. To delete it click on the "x" or delete button.',
            day: 'Monday',
            expanded:true
        },
        {
            input:'Example 2',
            id: Math.random() * 10000,
            description: '',
            day: 'Monday',
            expanded:false
        },
        {
            input:'Example 3',
            id: Math.random() * 10000,
            description:'',
            day: 'Monday',
            expanded:false
        },
        {
            input:'Example 4',
            id: Math.random() * 10000,
            description:'',
            day: 'Monday',
            expanded:false
        },
    ]);
    const [day, setDay] = useState('Monday');

    const addToDo = (todo)=>{
        if(!todo.input || /^\s*$/.test(todo.input)){
            return;
        };
        setTodos([...todos,todo]);
    };

    const removeToDo = (id)=>{
        setTodos([...todos].filter(todo=>todo.id !==id));
    };

    const editToDo = (todoId, newInput)=>{
        if(!newInput.input || /^\s*$/.test(newInput.input)){
            return;
        };
        setTodos(todos.map(item=>{
            if(item.id === todoId){
            item.input = newInput.input;
            item.description = newInput.description};
            return item}));};

    const completeToDo = (id)=>{
        let updatedToDos = todos.map(todo=>{if(todo.id === id){todo.isComplete = !todo.isComplete};
        return todo;
    })
        setTodos(updatedToDos);
    };

    const todoExpansion = (id)=>{
        setTodos(todos.map(item=>{if(item.id === id){item.expanded = !item.expanded};
        return item
    }));
    };

    return (
        <div>
            <Days day={day} setDay={setDay}/>
            <TodoForm onSubmit={addToDo} day={day}/>
            {}
            <Todo todos={todos.filter(todo=>todo.day===day)} completeToDo={completeToDo} removeToDo={removeToDo} editToDo={editToDo} 
            todoExpansion={todoExpansion}/>
        </div>
    )
}

export default TodoList