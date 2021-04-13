import React, { useState } from "react";

export default function Frontend() {
  // const increaseSlider = useRef(new Array());
  // const valueCounterRef = useRef(new Array());

  const [frontEnd] = useState([
    {
      id: 1,
      skill: "HTML/CSS",
      value: 90,
    },
    {
      id: 3,
      skill: "JavaScript",
      value: 80,
    },
    {
      id: 4,
      skill: "React",
      value: 50,
    },
    {
      id: 5,
      skill: "jQuery",
      value: 90,
    },
  ]);

  return (
    <div className="main_frontend">
      <h1>Frontend Skills</h1>
      {frontEnd.map((item) => {
        const { skill, value, id } = item;
        const valueWidth = value + "%";
        const valueSlider = value + -4 + "%";

        return (
          <div className="frontend" key={id}>
            <div className="main_label">
              <h3>{skill}</h3>
              <div className="slider_frame">
                <span
                  style={{ left: `${valueSlider}` }}
                  id={value}
                  className="show_value"
                >
                  {`${value}%`}
                </span>
                <div
                  id={value}
                  className="slider_value"
                  style={{ width: `${valueWidth}` }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
//ref={(element) => increaseSlider.current.push(element)}
