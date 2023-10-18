import { Component } from 'react'

export class FeedbackOptions extends Component {
    state = {
        Good: 0,
        Neutral: 0,
        Bad: 0,
    };
    
    onLeaveFeedback = option => this.setState((prevState) => {
        console.log(option); 
        return {
             [option]: prevState[option] + 1
         };
    });

    render() {
            return <div>
                <h2>Please leave feadback</h2>
                {this.props.options.map(option => (
                    <button
                        key={option}
                        className="btn"
                        onClick={(evt)=>this.onLeaveFeedback(evt.target.textContent)}>{option}</button>))}
                <h3>Statstics</h3>
                {this.props.options.map(option => (
                    <p key={option}>{option}:{this.state[option]}</p>))}
            </div>
    }

}


export default FeedbackOptions;