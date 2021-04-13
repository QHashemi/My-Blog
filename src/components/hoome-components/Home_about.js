import React, { useRef, useEffect } from "react";

export default function Home_about() {
  const about_pic = useRef();
  const about_text = useRef();

  useEffect(() => {
    var about_pic_current = about_pic.current;
    var about_text_current = about_text.current;

    window.addEventListener("scroll", (e) => {
      var about_pic_position = about_pic_current.getBoundingClientRect().top;
      var window_height = window.innerHeight / 1.4;
      if (about_pic_position < window_height) {
        about_pic_current.classList.add("about_home_picture_new");
        about_text_current.classList.add("about_home_text_new");
      } else {
        about_pic_current.classList.remove("about_home_picture_new");
        about_text_current.classList.remove("about_home_text_new");
      }
    });
  }, []);

  return (
    <div className="home_about" id="about">
      <div ref={about_pic} className="about_home_picture"></div>
      <div ref={about_text} className="about_home_text">
        <h1>My Arts</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          modi. Quidem impedit ipsam corporis, sed, nemo fuga optio qui earum,
          neque exercitationem explicabo iure pariatur esse nihil accusantium.
          Eum consequatur cupiditate voluptatum in non doloribus porro modi
          amet, officiis perferendis sunt deleniti suscipit commodi minima
          consequuntur! Alias provident, quae expedita eos asperiores pariatur,
          maiores ipsa omnis esse, magni blanditiis laborum quod amet aliquam
          molestias eaque! Dolores velit commodi voluptate, illum, iure officiis
          nobis facere tempore quos dolore blanditiis architecto. Maxime,
          distinctio. Exercitationem voluptatibus sed doloribus, a beatae
          tenetur quidem deleniti? Autem laborum earum vitae aliquid facilis
          necessitatibus neque molestias eaque.
        </p>
        <button>My Draws</button>
      </div>
    </div>
  );
}
