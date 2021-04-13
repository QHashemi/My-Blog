import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
  FaMailBulk,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <div className="iconsFooter">
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
      <p>Impressum</p>
      <p>© 2021 Qasem Hashemi. All Rights Reserved</p>
    </div>
  );
}
