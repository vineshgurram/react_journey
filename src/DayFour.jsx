import Bio from "./Bio";
import IfElse from "./IfElse";
import LogicalAnd from "./LogicalAnd";
import Ternary from "./Ternary";

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
