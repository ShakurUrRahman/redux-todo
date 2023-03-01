import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, deleteToDo, removeAllToDo } from '../actions/actions';
import './ToDo.css'

const ToDo = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.toDoReducer.list)
    // console.log(list);

    const addTask = (event) => {
        event.preventDefault()
        const form = event.target;
        const data = form.task.value;
        dispatch(addToDo(data))
        form.reset();

    }
    return (
        <div>
            <div className='work-box'>
                <figure className='caption-parent'>
                    <p className='caption'>Create Task Here</p>
                </figure>
                <div className='input-box'>
                    <form onSubmit={addTask}>
                        <input className='input-text' placeholder='Write your task...' type="text" name="task"
                            id="task" />
                        <button className='input-btn'>+</button>
                    </form>
                </div>
                {
                    list?.map((l) =>
                        <div key={l.id} className='task-box'><h4 className='task-name'>{l.data}</h4>
                            <button onClick={() => { dispatch(deleteToDo(l.id)) }} className='delete-btn'>X</button>
                        </div>)
                }
                <div className='remove-all'>
                    <button onClick={() => dispatch(removeAllToDo())}>Remove All</button>
                </div>
            </div >
        </div >
    );
};

export default ToDo;