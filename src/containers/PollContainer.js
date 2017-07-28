import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton';
import CurrentChoice from '../components/CurrentChoice';
import Background from '../img/larry.png';
import $ from 'jquery';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            header: '',
            question: '',
            checkedValue: '',
            choices: [],
            correctAnswer: ''
        };
        this.setCheckedValue = this.setCheckedValue.bind(this);
    }

    setCheckedValue(value){
        this.setState({
            checkedValue: value
        });
        console.log('current choice: ' + value);
    }

    componentWillMount() {
        console.log('componentWillMount()');
    }
    componentDidMount(){
        console.log('componentDidMount');
        this.serverRequest = $.get('http://localhost:8081/data/data.json', function (result) {
            var data = result;
            this.setState({
                header: data.poll.header,
                question: data.poll.questions[0].question,
                choices: data.poll.questions[0].choices,
                correctAnswer: data.poll.questions[0].correctAnswer
            });
        }.bind(this));
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps()');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()');
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate()');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount()');
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
                                choices={this.state.choices}
                                onChange={this.setCheckedValue}
                            />
                            <CurrentChoice text={this.state.checkedValue} />
                            <PollSubmitButton />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;
