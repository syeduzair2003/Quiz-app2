// import React, { useState } from "react";
// import questions from "../data";
// import Timer from "./Timer";
// import Result from "./Result";
// import ProgressBar from "./ProgressBar";

// const Quiz = () => {
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [score, setScore] = useState(0);
//     const [showResult, setShowResult] = useState(false);
//     const [timeLeft, setTimeLeft] = useState(10);
//     const [selectedAnswer, setSelectedAnswer] = useState(null);
//     const [isAnswered, setIsAnswered] = useState(false);

// const handleAnswer = (option) => {
//     if (isAnswered) return;

//     setSelectedAnswer(option);
//     setIsAnswered(true);

//     if (option.isCorrect) {
//         setScore(score + 1);
//     }

//     setTimeout(() => {
//         nextQuestion();
//     }, 1000);
// }

// const nextQuestion = () => {
//     setSelectedAnswer(null);
//     setIsAnswered(false);
//     setTimeLeft(10);

//     if (currentQuestion + 1 < questions.length) {
//         setCurrentQuestion(currentQuestion + 1);
//     } else {
//         setShowResult(true);
//     }
// }

// const restartQuiz = () => {
//     setCurrentQuestion(0);
//     setScore(0);
//     setShowResult(false);
//     setSelectedAnswer(null);
//     setIsAnswered(false);
//     setTimeLeft(10);
// }

// return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       {!showResult ? (
//         <>
//           <ProgressBar
//             currentQuestion={currentQuestion + 1}
//             totalQuestions={questions.length}
//           />

//           <Timer
//             timeLeft={timeLeft}
//             setTimeLeft={setTimeLeft}
//             nextQuestion={nextQuestion}
//           />

//           <h2 className="text-xl font-semibold mt-4 mb-4">
//             {questions[currentQuestion].text}
//           </h2>

//           <div className="space-y-3">
//             {questions[currentQuestion].options.map((option, index) => {
//               let buttonStyle = "bg-gray-200";

//               if (isAnswered) {
//                 if (option.isCorrect) {
//                   buttonStyle = "bg-green-500 text-white";
//                 } else if (selectedAnswer === option && !option.isCorrect) {
//                   buttonStyle = "bg-red-500 text-white";
//                 }
//               }

//               return (
//                 <button
//                   key={index}
//                   onClick={() => handleAnswer(option)}
//                   disabled={isAnswered}
//                   className={`w-full px-4 py-2 rounded transition ${buttonStyle}`}
//                 >
//                   {option.text}
//                 </button>
//               );
//             })}
//           </div>
//         </>
//       ) : (
//         <Result
//           score={score}
//           totalQuestions={questions.length}
//           restartQuiz={restartQuiz}
//         />
//       )}
//     </div>
//   );

// }
// export default Quiz

import React, { useState } from "react";
import questions from "../data";
import Timer from "./Timer";
import Result from "./Result";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (option) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option.isCorrect) setScore(score + 1);
    setTimeout(() => nextQuestion(), 1000);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setTimeLeft(10);
    if (currentQuestion + 1 < questions.length) setCurrentQuestion(currentQuestion + 1);
    else setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setTimeLeft(10);
  };

  return (
    <div
      className="relative p-6 md:p-10 rounded-lg
                 w-full max-w-4xl h-[550px] md:h-[580px] mx-auto
                 bg-gradient-to-r from-teal-900 via-slate-900 to-gray-900
                 border border-purple-600
                 shadow-[0_0_15px_3px_rgba(139,92,246,0.7)]
                 text-white"
    >
      {!showResult ? (
        <>
         
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 h-full">

          
            <div className="w-full md:w-2/5">
              <p className="text-xs md:text-sm text-gray-300 mb-1">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <h2 className="text-lg md:text-xl font-extrabold leading-snug">
                {questions[currentQuestion].text}
              </h2>
            </div>
            
            <div className="w-full md:w-3/5 flex flex-col">
              <Timer
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
                nextQuestion={nextQuestion}
              />

              <div className="space-y-3 mt-4">
                {questions[currentQuestion].options.map((option, index) => {
                  let buttonStyle = "bg-gray-800 hover:bg-gray-700 text-white";
                  if (isAnswered) {
                    if (option.isCorrect) buttonStyle = "bg-green-600 text-white";
                    else if (selectedAnswer === option && !option.isCorrect) buttonStyle = "bg-red-600 text-white";
                    else buttonStyle = "bg-gray-800 text-gray-400";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      disabled={isAnswered}
                      className={`w-full flex items-center space-x-4 rounded-lg py-3 px-4 text-left text-sm md:text-base font-medium transition ${buttonStyle}`}
                    >
                      <span className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg select-none">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
         
          <div className="w-full mt-2 md:mt-4">
            <div className="h-1.5 bg-gray-700 rounded-full">
              <div
                className="h-1.5 bg-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </>
      ) : (
        <Result
          score={score}
          totalQuestions={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;