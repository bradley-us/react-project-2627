import React, { useReducer, useState } from 'react'
import FilterBtns from '../pure/FilterBtns'
import Task from '../pure/Task'

// REDUCERS IMPORTS
import reducerTask from '../reducers/reducerTask'
import filterReducer from '../reducers/filterReducer'


// ******* VARIABLES ACTIONS *******

const SET_VIS_FILTER = 'SET_VIS_FILTER'

export const ACTIONS = {
    ADD_TASK: 'ADD_TASK',
    TOGGLE_TASK: 'TOGGLE_TASK',
    DELETE_TASK: 'DELETE_TASK',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_TASKS_ACTIVE: 'SHOW_TASKS_ACTIVE'
}
// ******* VARIABLES ACTIONS *******


// FILERING WITHOUT MODIFYING THE ORIGINAL ARRAY !!
const filterTasks = (tasks, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return tasks;
        case 'SHOW_COMPLETED':
            console.log('hola')
            return tasks.filter((todo) => todo.completed);
        case 'SHOW_TASKS_ACTIVE':
            return tasks.filter((todo) => !todo.completed)
        default:
            return tasks;
    }
}

export default function Taskdashboard() {

    const [tasks, dispatch] = useReducer(reducerTask, [])
    const [taskText, setTaskText] = useState('');
    const [filterValue, dispatchFilter] = useReducer(filterReducer)

    // OBTAINING DATA FROM FILTER WITHOUT MODIFYING THE ORIGINAL ARRAY !!
    const taskList = (givingTasks, givingFilter) => {
        return (
            filterTasks(givingTasks, givingFilter)
        )
    }

    // THIS TAKE DATA FROM THE ORIGINAL ARRAY WHICH CONTAINS ALL OF THE TASKS... AND CREATE A NEW ARRAY >>> tasksFiltered.map() WHERE IT'S GOING TO BE DISPLAYED !!
    const tasksFiltered = taskList(tasks, filterValue)

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


    // ******* FILTER ACTION
    function setFilterVisibility(filter) {
        return {
            type: SET_VIS_FILTER,
            payload: {
                filter
            }
        }
    } 

    const inputStyles = {
        padding: '10px',
        width: '100%',
        minWidth: '300px',
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
                tasksFiltered.map(task => {
                    return <Task key={task.id} task={task} dispatch={dispatch}/>
                })
            }

            <FilterBtns dispatchFilter={dispatchFilter} setFilterVisibility={setFilterVisibility} />
        </>
    );
}