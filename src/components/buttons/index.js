import React from 'react'

export function PrimaryButton({name, click}) {
    return (
        <button className="btn btn-primary" onClick={() => click()} >{name}</button>
    )
}
