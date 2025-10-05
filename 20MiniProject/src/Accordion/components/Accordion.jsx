import React, { useState } from "react";
import { accordionData } from "./data";
function Accordion() {
  const [isActive, setIsActive] = useState(null);

  const handleClick = (index) => {
    if (isActive === index) {
      setIsActive(null);
    } else {
      setIsActive(index);
    }
  };
  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index}>
          <div onClick={() => handleClick(index)}>{item.question}</div>
          {isActive === index && <div>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
