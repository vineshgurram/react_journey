import Bio from "../tasks/Bio";
import IfElse from "../concepts/IfElse";
import LogicalAnd from "../concepts/LogicalAnd";
import Ternary from "../concepts/Ternary";

export default function DayFour() {
  const conditionalRendering = [
    "if else",
    "Ternary Operator",
    "Logical AND",
    "Early Return",
    "Returning variables",
  ];
  return (
    <>
      <p>
        <strong>Day 04 - Conditional Rendering of UI</strong>
      </p>
      <p>5 types of Conditional Rendering of UI -</p>
      <ol>
        {conditionalRendering.map((list) => (
          <li key={list}>{list}</li>
        ))}
      </ol>

      <IfElse />
      <Ternary />
      <LogicalAnd />
      <Bio />
    </>
  );
}
