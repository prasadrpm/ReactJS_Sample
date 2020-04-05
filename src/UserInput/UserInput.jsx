import React from 'react';

const userInput = (props) => {
    return <div><input type = "text"
    onChange = { props.nameChangeEvent }
    value = { props.name }
    />
    </div>
}


export default userInput;