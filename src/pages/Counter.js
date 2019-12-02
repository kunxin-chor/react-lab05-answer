import React from 'react'

export default function Counter(props)
{
    
    function whenClicked() {
        props.increaseCount()
        props.history.push('/view-count');
    } 
    
    return (<div>
        <button onClick={whenClicked}>Click me</button>
    </div>)
}