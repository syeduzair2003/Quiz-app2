// import React, { useEffect } from "react";

// const Timer = ({ timeLeft, setTimeLeft, nextQuestion }) => {
//   useEffect(() => {
//     if (timeLeft === 0) {
//       nextQuestion();
//       return;
//     }

//     const timer = setTimeout(() => {
//       setTimeLeft(timeLeft - 1);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft]);

//   return (
//     <div className="text-right text-red-500 font-semibold">
//       Time Left: {timeLeft}s
//     </div>
//   );
// };

// export default Timer;

import React, { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft, nextQuestion }) => {
  useEffect(() => {
    if (timeLeft === 0) {
      nextQuestion();
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="text-right text-red-400 font-semibold text-lg md:text-xl select-none">
      Time Left: {timeLeft}s
    </div>
  );
};

export default Timer;