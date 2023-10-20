const Buttons = ({ options, onLeaveFeedback }) => {
    return <section>
        {options.map(option => (
            <button
                key={option}
                className="btn"
                onClick={onLeaveFeedback}>{option}</button>))}  
    </section>
}

export default Buttons;