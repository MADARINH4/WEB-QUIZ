import { useEffect } from 'react';
import img from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';

const PERCENTAGE = {
  skipped: null,
  correctly: null,
  incorrectly: null,
};

export default function Summary({ answers }) {
  PERCENTAGE.skipped = Math.round(
    (answers.filter((answer) => answer === null).length / answers.length) * 100
  );
  PERCENTAGE.correctly = Math.round(
    (answers.filter((answer, index) => answer === QUESTIONS[index].answers[0])
      .length /
      answers.length) *
      100
  );
  PERCENTAGE.incorrectly = Math.round(
    100 - PERCENTAGE.skipped - PERCENTAGE.correctly
  );

  return (
    <div id="summary">
      <img src={img} alt="Quiz complete" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{PERCENTAGE.skipped}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{PERCENTAGE.correctly}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{PERCENTAGE.incorrectly}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClass = 'user-answer';

          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
