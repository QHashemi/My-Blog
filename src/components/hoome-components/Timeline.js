import React, { useState, useRef, useEffect } from "react";

export default function Timeline() {
  const get_history_Position = useRef([]);
  const getNumberPosition = useRef([]);

  let allsTimeLine = get_history_Position.current;
  useEffect(() => {
    //P Animation
    allsTimeLine.forEach((elePosition) => {
      if (!elePosition) return;
      window.addEventListener("scroll", () => {
        const getHistoryPosition = elePosition.getBoundingClientRect().top;
        const getWindowHeight = window.innerHeight;
        if (getHistoryPosition < getWindowHeight) {
          elePosition.classList.add("timelinePar_new");
        } else {
          elePosition.classList.remove("timelinePar_new");
        }
      });
    });

    let allNumber = getNumberPosition.current;
    allNumber.forEach((num) => {
      if (!num) return;
      window.addEventListener("scroll", () => {
        const getHistoryPosition = num.getBoundingClientRect().top;
        const getWindowHeight = window.innerHeight;
        if (getHistoryPosition < getWindowHeight) {
          num.classList.add("timelineNumber_new");
        } else {
          num.classList.remove("timelineNumber_new");
        }
      });
    });
  }, [allsTimeLine]);

  const [timeline] = useState([
    {
      id: 1,
      date: 2015,
      number: 1,
      history:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae autem blanditiis laboriosam accusantium tempore incidunt sint, iste aperiam saepe, dolorem, placeat nisi! Labore, aliquam consectetur blanditiis voluptas aliquid, impedit pariatur vitae qui porro eaque facilis placeat? Earum nisi iure aliquam repudiandae beatae voluptatibus, eius illum ipsum nobis maxime! Porro.",
    },
    {
      id: 2,
      date: 2016,
      number: 2,
      history:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae autem blanditiis laboriosam accusantium tempore incidunt sint, iste aperiam saepe, dolorem, placeat nisi! Labore, aliquam consectetur blanditiis voluptas aliquid, impedit pariatur vitae qui porro eaque facilis placeat? Earum nisi iure aliquam repudiandae beatae voluptatibus, eius illum ipsum nobis maxime! Porro.",
    },
    {
      id: 3,
      date: 2017,
      number: 3,
      history:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae autem blanditiis laboriosam accusantium tempore incidunt sint, iste aperiam saepe, dolorem, placeat nisi! Labore, aliquam consectetur blanditiis voluptas aliquid, impedit pariatur vitae qui porro eaque facilis placeat? Earum nisi iure aliquam repudiandae beatae voluptatibus, eius illum ipsum nobis maxime! Porro.",
    },
    {
      id: 4,
      date: 2018,
      number: 4,
      history:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae autem blanditiis laboriosam accusantium tempore incidunt sint, iste aperiam saepe, dolorem, placeat nisi! Labore, aliquam consectetur blanditiis voluptas aliquid, impedit pariatur vitae qui porro eaque facilis placeat? Earum nisi iure aliquam repudiandae beatae voluptatibus, eius illum ipsum nobis maxime! Porro.",
    },
    {
      id: 5,
      date: 2019,
      number: 5,
      history:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae autem blanditiis laboriosam accusantium tempore incidunt sint, iste aperiam saepe, dolorem, placeat nisi! Labore, aliquam consectetur blanditiis voluptas aliquid, impedit pariatur vitae qui porro eaque facilis placeat? Earum nisi iure aliquam repudiandae beatae voluptatibus, eius illum ipsum nobis maxime! Porro.",
    },
    {
      id: 6,
      date: 2020,
      number: 6,
      history:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae autem blanditiis laboriosam accusantium tempore incidunt sint, iste aperiam saepe, dolorem, placeat nisi! Labore, aliquam consectetur blanditiis voluptas aliquid, impedit pariatur vitae qui porro eaque facilis placeat? Earum nisi iure aliquam repudiandae beatae voluptatibus, eius illum ipsum nobis maxime! Porro.",
    },
    {
      id: 7,
      date: 2021,
      number: 7,
      history:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae autem blanditiis laboriosam accusantium tempore incidunt sint, iste aperiam saepe, dolorem, placeat nisi! Labore, aliquam consectetur blanditiis voluptas aliquid, impedit pariatur vitae qui porro eaque facilis placeat? Earum nisi iure aliquam repudiandae beatae voluptatibus, eius illum ipsum nobis maxime! Porro.",
    },
  ]);

  return (
    <div className="main_timeline">
      <div className="timeline" id="timeline">
        <h1>Time Line</h1>
        {timeline.map((time) => {
          const { id, date, number, history } = time;
          return (
            <div key={id}>
              <span
                ref={(thisNumber) => getNumberPosition.current.push(thisNumber)}
                className="timelineNumber"
              >
                {number}
              </span>
              <h2>{date}</h2>
              <p
                className="timelinePar"
                ref={(thisHistory) =>
                  get_history_Position.current.push(thisHistory)
                }
              >
                {history}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
