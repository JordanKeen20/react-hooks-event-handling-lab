import React from 'react';
// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input type = 'password' 
            placeholder = 'text goes here'
            onChange = {() => console.log("Entering password...")} 
            />
        </div>
    )
}

export default Keypad;