import React from 'react';

class PollHeader extends React.Component{
    render(){
        var headerText = {
            color: 'white'
        };
        return(
            <h1 style={headerText} className="text-center">{this.props.text}</h1>
        );
    }
}

export default PollHeader;
