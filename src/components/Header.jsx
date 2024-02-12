import img from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header>
      <img src={img} alt="Header image" />
      <h1>React Quiz</h1>
    </header>
  );
}
