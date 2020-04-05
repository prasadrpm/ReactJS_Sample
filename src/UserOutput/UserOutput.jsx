import React from 'react';


const userOutput = (prop) => {
    return (
        <div>
            <p> {prop.name} </p>
            <p> {prop.address} </p>
        </div>
    )
}

export default userOutput;