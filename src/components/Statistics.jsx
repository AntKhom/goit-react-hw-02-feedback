const Statstics = ({good,neutral,bad,total,positivePercentage}) => {
    return <section>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total}</p>
        <p>Positive feedback:{positivePercentage}%</p>
    </section>
    
};

export default Statstics;