import { useState } from 'react';
import style from '../src/App.module.css';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, seetBad] = useState(0);

  const handleIncrement = event => {
    const option = event.target.name;
    switch (option) {
      case 'good':
        setGood(data => data + 1);
        break;

      case 'neutral':
        setNeutral(data => data + 1);
        break;

      case 'bad':
        seetBad(data => data + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return ((good / total) * 100).toFixed(0);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={style.App}>
      <p className={style.title}>
        React homework "feedback-hook" by Anatoliia Riabchenko
      </p>
      <div className={style.section}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {!total > 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    </div>
  );
}
