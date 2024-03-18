import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  numberOfChars: number;
}

function ExpandableText({ children, numberOfChars }: Props) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const childrenString = typeof children === "string" ? children : "";
  return (
    <div>
      <p>
        {expanded
          ? childrenString
          : childrenString.slice(0, numberOfChars) + " ..."}
      </p>
      <button onClick={toggleExpanded}>
        {expanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default ExpandableText;
