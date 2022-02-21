import React from 'react'
import { ACTIONS } from '../container/TaskDashboard'

export default function Task({task, dispatch}) {

    const btnStyles = {
        padding: '10px 20px 10px 20px',
        backgroundColor: task.completed ? '#f8f7f8' : 'green',
        color: task.completed ? 'black' : 'white',
        border: 'none',
        borderRadius: '10px',
        marginTop: '20px',
        marginLeft: '20px',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }

    const btnDelStyles = {
        padding: '10px 20px 10px 20px',
        backgroundColor: 'tomato',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        marginTop: '20px',
        marginLeft: '20px',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }

  return (
    <div>
        <span style={{fontSize: '20px', color: task.completed ? 'gray' : 'white', marginTop: '20px'}}>{task.taskDescription}</span>
        <button
            style={btnDelStyles}
            onClick={() => dispatch(
                {
                    type: ACTIONS.DELETE_TASK,
                    payload: {
                        id: task.id
                    }
                }
            )}
        >
            Delete
        </button>
        <button
            style={btnStyles}
            onClick={() => dispatch(
                {
                    type: ACTIONS.TOGGLE_TASK,
                    payload: {
                        id: task.id
                    }
                }
            )}
        >
            {task.completed ? 'Mark as undone' : 'Mark as done'}
        </button>
    </div>
  )
}
