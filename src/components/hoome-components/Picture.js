import React, { useEffect, useRef } from "react";

export default function Picture() {
  const myRef = useRef();
  const myFrame = useRef();

  useEffect(() => {
    myRef.current.classList.add(
      "profile_picture_style",
      ".frame_new",
      "profile_picture_style_new"
    );
    myFrame.current.classList.add("frame_new");
  }, []);

  return (
    <div ref={myRef} className="profile_picture" id="home">
      <span ref={myFrame} className="frame"></span>
    </div>
  );
}
