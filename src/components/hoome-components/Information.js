import React, { useRef, useEffect } from "react";
import {
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
  FaMailBulk,
} from "react-icons/fa";
export default function Information() {
  const myh1 = useRef();
  const myh3 = useRef();
  const myButton = useRef();

  useEffect(() => {
    myh1.current.classList.add("home_h1");
    myh3.current.classList.add("my_job_dec_new");
    myButton.current.classList.add("my_home_button_new");
  }, []);

  return (
    <div className="information_home">
      <h1 ref={myh1} className="my_name_home">
        I'm Qasem
      </h1>
      <h3 ref={myh3} className="my_job_dec">
        I am Fullstack Web-developer and Artist
      </h3>
      <button ref={myButton} className="my_home_button">
        About me
      </button>
      <div className="icons" >
      <a href="https://github.com/QHashemi">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/q.hashemi100/">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/ghasem.hashemi.102/">
          <FaFacebookSquare />
        </a>
        <a href="ghasemhashemi919@gmail.com">
          <FaMailBulk />
        </a>
      </div>
    </div>
  );
}
