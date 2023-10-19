import { Component } from 'react'

export class FeedbackOptions extends Component {
    state = {
        Good: 0,
        Neutral: 0,
        Bad: 0,
    };
    
    onLeaveFeedback = option => this.setState((prevState) => {
        return {
             [option]: prevState[option] + 1
         };
    });

    countTotalFeedback = () => {
        const { Good, Neutral, Bad } = this.state;
        return Good + Neutral + Bad;
    }
    countPositiveFeedbackPercentage = () => {
        const { Good, Neutral, Bad } = this.state;
        const total = Good + Neutral + Bad;
        if (total === 0) {
            return 0;
        }
        return Math.round((Good / total) * 100);
     }
        

    render() {
            return <div>
                <h2>Please leave feadback</h2>
                {this.props.options.map(option => (
                    <button
                        key={option}
                        className="btn"
                        onClick={()=>this.onLeaveFeedback(option)}>{option}</button>))}
                <h3>Statstics</h3>
                {this.props.options.map(option => (
                    <p key={option}>{option}:{this.state[option]}</p>))}
                <p>Total:{this.countTotalFeedback()}</p>
                <p>Positive feedback:{this.countPositiveFeedbackPercentage()}%</p>
            </div>
    }

}


export default FeedbackOptions;