import React from 'react';

class ChangeText extends React.Component {
    constructor(props){
        super(props);

        this.state={
            text: '',
            value: 'hello',
        }

        this.handleChange=this.handleChange.bind(this)
        this.apply=this.apply.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    apply(){
      this.setState(({ value }) => ({ text: value }));
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.apply}>ok</button>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default ChangeText;