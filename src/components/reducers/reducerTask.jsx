import { ACTIONS } from '../container/TaskDashboard'

function newTask(taskDescription) {
    return { 
        id: Date.now(),
        taskDescription,
        completed: false
    }
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
                        ...task,
                        completed: !task.completed
                    } 
                } return task
            })

        case ACTIONS.DELETE_TASK:
            return tasks.filter(task => task.id !== action.payload.id)
        
        default:
            return tasks
    }
}

export default reducerTask;