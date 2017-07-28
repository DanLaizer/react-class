import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton';
import Background from '../img/larry.png';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            header: 'JUST GONNA SEND IT',
            question: 'What is the best?',
            answer1: 'Tacos',
            answer2: 'Pizza',
            answer3: 'Cheese',
            checkedValue: '',
            correctAnswer: 'Tacos'
        };
        this.setCheckedValue = this.setCheckedValue.bind(this);
    }

    setCheckedValue(value){
        this.setState({
            checkedValue: value
        });
        console.log('current choice: ' + value);
    }

    render(){
        var rowStyle = {
            backgroundColor:'#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };
        var headerStyle = {
            backgroundImage: 'url(' + Background + ')',
            padding: '120px'
        };
        const choices = [
            {value: 'Tacos', label:'Tacos'},
            {value: 'Pizza', label:'Pizza'},
            {value: 'Cheese', label:'Cheese'}
        ];

        return(
            <div className="container">
                <div style={headerStyle} className="jumbotron">
                    <PollHeader text={this.state.header} />
                </div>
                <div style={rowStyle} className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <form>
                            <PollQuestion text={this.state.question} />
                            <RadioButtonGroup
                                name='answer'
                                checkedValue={this.state.checkedValue}
                                choices={choices}
                                onChange={this.setCheckedValue}
                            />
                            <PollSubmitButton />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;
