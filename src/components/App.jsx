import { Component } from 'react'
import Statstics from './Statistics';
import Buttons from './Buttons';
import Section from './Section';
import Notification from './Notification';

export class App extends Component {
    state = {
        Good: 0,
        Neutral: 0,
        Bad: 0,
        isVoteed: false,
    };
    
    onLeaveFeedback = e => this.setState((prevState) => {
        const option = e.target.innerText;
        return {
            [option]: prevState[option] + 1,
            isVoteed:true
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
                <Section title="Please leave feadback">
                   <Buttons options={['Good', 'Neutral', 'Bad']}
                    onLeaveFeedback={this.onLeaveFeedback}
                />
                </Section>
                               
                {(this.state.isVoteed) ? <Section title="Statistics">
                    <Statstics
                        good={this.state.Good}
                        neutral={this.state.Neutral}
                        bad={this.state.Bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                </Section> : <Notification message="There is no feedback" />}   
            </div>
    }

}

