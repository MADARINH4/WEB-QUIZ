import { useEffect, useState } from 'react';

export default function QuestionTimer({ timer, nextQuestion }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const time = setTimeout(nextQuestion, timer);

    return () => {
      clearTimeout(time);
    };
  }, [timer, nextQuestion]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timer} />;
}
