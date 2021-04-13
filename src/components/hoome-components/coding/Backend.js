import React, { useState } from "react";

export default function Backend() {
  const [backEnd] = useState([
    {
      id: 1,
      skill: "Node",
      value: 40,
    },
    {
      id: 3,
      skill: "Express",
      value: 80,
    },
    {
      id: 4,
      skill: "PHP",
      value: 50,
    },
    {
      id: 5,
      skill: "jQuery",
      value: 90,
    },
  ]);

  return (
    <div className="main_backend">
      <h1> Backend Skills </h1>
      {backEnd.map((item) => {
        const { skill, value, id } = item;
        const valueWidth = value + "%";
        const valueSlider = value + -6 + "%";
        return (
          <div className="backend" key={id}>
            <div className="main_label">
              <h3> {skill} </h3>
              <div className="slider_frame">
                <span className="show_value" style={{ left: `${valueSlider}` }}>
                  {value}%
                </span>
                <div
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
