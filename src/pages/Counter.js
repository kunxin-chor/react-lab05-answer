import React from 'react'

export default function Counter(props)
{
    return (<div>
        <button onClick={props.increaseCount}>Click me</button>
    </div>)
}