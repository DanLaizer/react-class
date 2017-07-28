import React from 'react';

function PollHeader(props){
    return(
        <h1 style={{color: 'white'}} className="text-center">{props.text}</h1>
    );
}

export default PollHeader;
