import React from 'react'

export default function FilterBtns(filterActive = true, onClick, children) {
    if(filterActive){
        return (<button style={{fontWeight: 'bold', background: 'LightGrey', border: 'none', padding: '10px'}}>{children}</button>)
    } else { return (
        <button
        style={{background: 'white', border: 'none', padding: '10px'}}
        onClick={onClick}
        >
            {children}
        </button>
        )
    }
}