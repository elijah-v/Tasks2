import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiCheckSquare } from 'react-icons/fi';
import { RiArrowDropUpLine } from 'react-icons/ri';

const Todo = ({todos,completeToDo, removeToDo, editToDo, todoExpansion}) => {
    const [edit,setEdit] = useState({input:'', id:null});

    const submitEdit = (value)=>{
        editToDo(edit.id,value);
        setEdit({input:'', id: null, description:'',expanded:false});

    };

    const handleExpansion = (id)=>{
        todoExpansion(id);
    };

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitEdit} />
    }

    return todos.map((todo,index)=>(
        <div className={todo.isComplete ? 'todo__row complete': 'todo__row'} key={index}>
           { todo.expanded === true ? 
            (<>
            <div className='todo__rowTop'>
            <div key={todo.id}>{todo.input}</div>
            <div className='icons'>
                <RiCloseCircleLine onClick={()=>removeToDo(todo.id)} className='delete__icon'/>
                <TiEdit onClick={()=>setEdit({input:todo.input, id:todo.id, description: todo.description, expanded:false})} className='edit__icon'/>
                <FiCheckSquare className='check__icon' onClick={()=>completeToDo(todo.id)}/>
            </div>
            </div>
                
            <div className='todo__descriptionRender'>
            <textarea className='todo__descriptionForm' rows='8' cols='60' value={todo.description} onChange={()=>todo.description}></textarea>
            
            <div>
                <div className='todo__rowdInnerDropdownDiv' onClick={()=>handleExpansion(todo.id)}>
                <RiArrowDropUpLine className='dropdown__icon collapse'/>
                </div>
            </div>
            </div>
            </>)
            :
            (<>
            <div className='todo__rowTop'>
            <div key={todo.id}>{todo.input}</div>
            <div className='icons'>
                <RiCloseCircleLine onClick={()=>removeToDo(todo.id)} className='delete__icon'/>
                <TiEdit onClick={()=>setEdit({input:todo.input, id:todo.id, description: todo.description})} className='edit__icon'/>
                <FiCheckSquare className='check__icon' onClick={()=>completeToDo(todo.id)}/>
            </div>
            </div>
            <div className='todo__rowdInnerDropdownDiv' onClick={()=>handleExpansion(todo.id)}>
                <RiArrowDropDownLine className='dropdown__icon'/>
            </div>
            </>)}
        </div>
    ));
}

export default Todo