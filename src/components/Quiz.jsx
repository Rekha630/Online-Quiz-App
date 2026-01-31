import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is React?",
      options: ["Library", "Framework", "Language", "Database"],
      answer: "Library",
    },
    {
      question: "Who developed React?",
      options: ["Google", "Facebook", "Microsoft", "Amazon"],
      answer: "Facebook",
    },
    {
      question: "Which hook is used for state?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: "useState",
    },
    {
      question: "What is JSX?",
      options: [
        "JavaScript XML",
        "Java Syntax",
        "JSON format",
        "HTML only",
      ],
      answer: "JavaScript XML",
    },
    {
      question: "Which command starts a Vite project?",
      options: [
        "npm start",
        "npm run dev",
        "npm run build",
        "npm serve",
      ],
      answer: "npm run dev",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div>
      <h1>Quiz</h1>

      {showResult ? (
        <>
          <h2>
            Your Score: {score} / {questions.length}
          </h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
          <br /><br />
          <button onClick={() => navigate("/")}>Home</button>
        </>
      ) : (
        <>
          <h3>
            Question {current + 1} of {questions.length}
          </h3>
          <h2>{questions[current].question}</h2>

          {questions[current].options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(opt)}>
              {opt}
            </button>
          ))}
        </>
      )}
    </div>
  );
}

export default Quiz;

