import { useState } from "react";
import Counter from "./tasks/Counter";
import DayOne from "./days/DayOne";
import DayTwo from "./days/DayTwo";
import DayThree from "./days/DayThree";
import DayFour from "./days/DayFour";
import DayFive from "./days/DayFive";
import ExerciseEight from "./exercise/ExerciseEight";
import ExerciseFive from "./exercise/ExerciseFive";
import ExcerciseFour from "./exercise/ExerciseFour";
import ExerciseNine from "./exercise/ExerciseNine";
import ExcerciseOne from "./exercise/ExerciseOne";
import ExerciseSeven from "./exercise/ExerciseSeven";
import ExerciseSix from "./exercise/ExerciseSix";
import ExcerciseThree from "./exercise/ExerciseThree";
import ExcerciseTwo from "./exercise/ExerciseTwo";
import ProfileCard from "./tasks/ProfileCard";
import Welcome from "./tasks/Welcome";
import PropsDrilling from "./concepts/propsDrilling/PropsDrilling";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>
        <strong>Week 01</strong>
      </p>
      {/* <DayOne /> */}
      {/* <DayTwo /> */}
      {/* <Counter />*/}
      {/*<DayThree />*/}
      {/*<DayFour />*/}
      {/*<DayFive />*/}

      {/* <ExcerciseOne /> */}
      {/* <ExcerciseTwo /> */}
      {/* <ExcerciseThree />*/}
      {/*<ExcerciseFour />*/}
      {/*<ExerciseFive />*/}
      {/*<ExerciseSix />*/}
      {/*<ExerciseSeven />*/}
      {/*<ExerciseEight />*/}
      {/*<ExerciseNine />*/}

      <PropsDrilling count={count} setCount={setCount} />
    </>
  );
}

export default App;
