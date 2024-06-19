import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total }) => {
  if (total) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine
            text="average"
            value={parseFloat(((good + neutral * 0 - bad) / total).toFixed(2))}
          />
          <StatisticLine
            text="positive"
            value={parseFloat(((good / total) * 100).toFixed(2)) + "%"}
          />
        </tbody>
      </table>
    );
  } else {
    return (
      <p>
        <strong>No feedback given!</strong>
      </p>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text={"good"}></Button>
      <Button handleClick={handleNeutralClick} text={"neutral"}></Button>
      <Button handleClick={handleBadClick} text={"bad"}></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </>
  );
};

export default App;
