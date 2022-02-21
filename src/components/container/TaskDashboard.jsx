import React, { useReducer, useState } from 'react';
import Task from '../pure/Task';

export const ACTIONS = {
    ADD_TASK: 'ADD_TASK',
    TOGGLE_TASK: 'TOGGLE_TASK',
    DELETE_TASK: 'DELETE_TASK',
}

function reducerTask(tasks, action) {
    switch (action.type) {
        case ACTIONS.ADD_TASK:
            return [
                ...tasks,
                newTask(action.payload.taskText)
            ]
        case ACTIONS.TOGGLE_TASK:
            return tasks.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task, completed: !task.completed
                    } 
                } return task
            })
        case ACTIONS.DELETE_TASK:
            return tasks.filter(task => task.id !== action.payload.id)
        default:
            return tasks
    }
}



function newTask(taskDescription) {
    return { 
        id: Date.now(),
        taskDescription,
        completed: false
    }
}


export default function Taskdashboard() {

    const [tasks, dispatch] = useReducer(reducerTask, [])
    const [taskText, setTaskText] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({
            type: ACTIONS.ADD_TASK,
            payload: {
                taskText
            }
        })
        setTaskText('')
    }

    console.log(tasks)

    const inputStyles = {
        padding: '10px',
        width: '100%',
        minWidth: '250px',
        fontSize: '20px',
        fontWeight: 'thin',
        borderRadius: '10px'

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={taskText}
                    onChange={e => {
                                setTaskText(e.target.value)
                            }
                        }
                    style={inputStyles}
                />
            </form>
            {
                tasks.map(task => {
                    return <Task key={task.id} task={task} dispatch={dispatch}/>
                })
            }

        </>
    );
}