import React from 'react';
import RadioButton from './RadioButton';

class RadioButtonGroup extends React.Component{
    render(){
        const choiceItems = this.props.choices.map(choice => {
            const {value, label} = choice;
            const checked = value === this.props.checkedValue;

            return (
                <RadioButton
                    Key={`radio-button-${value}`}
                    label={label}
                    name={this.props.name}
                    value={value}
                    checked={checked}
                    onChange={this.props.onChange}
                />
            );
        });
        return(
            <div className="radio">
                {choiceItems}
            </div>
        );
    }
}

export default RadioButtonGroup;
