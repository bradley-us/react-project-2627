import React from 'react'

export default function FilterBtns({dispatchFilter, setFilterVisibility}) {

    const filterBtnStyles = {
        background: '#3b5998',
        border: 'none',
        padding: '10px',
        borderRadius: '10px',
        margin: '0 10px 0 0',
        color: 'white',
        cursor: 'pointer'
    }

    return (
        <div
            style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                marginTop: '20px'
            }}
        >
            <button
            style={filterBtnStyles}
            onClick={() => dispatchFilter(setFilterVisibility('SHOW_ALL'))}
            >
                All the tasks
            </button>
            <button
            style={filterBtnStyles}
            onClick={() => dispatchFilter(setFilterVisibility('SHOW_COMPLETED'))}
            >
                Completed
            </button>
            <button
            style={filterBtnStyles}
            onClick={() => dispatchFilter(setFilterVisibility('SHOW_TASKS_ACTIVE'))}
            >
                Tasks to do
            </button>
        </div>
    )
        
            
}