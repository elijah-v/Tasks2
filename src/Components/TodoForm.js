import React, { useState } from 'react';

const TodoForm = ({onSubmit, edit, day}) => {
    const [input, setInput] = useState(edit ? edit.input : '');
    const [description, setDescription] = useState(edit ? edit.description : '');

    const inputText = (event)=>{
        setInput(event);
    };
    
    const submitInput = (event)=>{
    event.preventDefault();
    onSubmit({
        input,
        id: Math.random() * 1000,
        description,
        day,
        expanded:false
    });
    setInput('');
    setDescription('');
    };

    return (
            <div>
            {edit ?(<><form onSubmit={event=>submitInput(event)}> 
            <input value={input} type='text' className='todo__input edit' placeholder='Edit task'
             onChange={event=>inputText(event.target.value)}/>
             <div>
             <textarea form='todo__form' value={description} rows='10' cols='70' className='todo__inputDescription edit' 
             onChange={event=>setDescription(event.target.value)}></textarea>
             </div>
             <button className='todo__button edit'>Edit task</button>
            </form>
            </>):
            (<><form id='todo__form' onSubmit={event=>submitInput(event)}>
                <input value={input} type='text' className='todo__input' placeholder='Add task'
            onChange={event=>inputText(event.target.value)} />
           <button className='todo__button'>Add task</button>
           </form>
           </>)
           }
           </div>
            

    )
}

export default TodoForm