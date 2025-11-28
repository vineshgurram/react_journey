import { useState } from "react";
import Counter from "./Counter";
import DayFive from "./DayFive";
import DayFour from "./DayFour";
import DayOne from "./DayOne";
import DayThree from "./DayThree";
import DayTwo from "./DayTwo";
import ExerciseEight from "./exercise/ExerciseEight";
import ExerciseFive from "./exercise/ExerciseFive";
import ExcerciseFour from "./exercise/ExerciseFour";
import ExerciseNine from "./exercise/ExerciseNine";
import ExcerciseOne from "./exercise/ExerciseOne";
import ExerciseSeven from "./exercise/ExerciseSeven";
import ExerciseSix from "./exercise/ExerciseSix";
import ExcerciseThree from "./exercise/ExerciseThree";
import ExcerciseTwo from "./exercise/ExerciseTwo";
import ProfileCard from "./ProfileCard";
import Welcome from "./Welcome";

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
      <ExerciseEight />
      <ExerciseNine />
    </>
  );
}

export default App;
