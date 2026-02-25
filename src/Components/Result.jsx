// import React from "react";

// const Result = ({ score, totalQuestions, restartQuiz }) => {
//   const percentage = ((score / totalQuestions) * 100).toFixed(2);

//   return (
//     <div className="text-center">
//       <h2 className="text-2xl font-bold mb-4">Quiz Completed</h2>
//       <p className="text-lg mb-2">
//         Your Score: {percentage}%
//       </p>
//       <button
//         onClick={restartQuiz}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         Restart Quiz
//       </button>
//     </div>
//   );
// };

// export default Result;

import React from "react";

const Result = ({ score, totalQuestions, restartQuiz }) => {
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="text-center py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Quiz Completed</h2>
      <p className="text-2xl md:text-3xl mb-8">
        Your Score: <span className="text-purple-600 font-bold">{percentage}%</span>
      </p>
      <button
        onClick={restartQuiz}
        className="px-8 py-3 md:px-12 md:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg md:text-xl font-semibold transition"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;