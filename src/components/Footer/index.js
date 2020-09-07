import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="fixed-bottom p-1 text-center text-white">
      <small>Copyright &copy; Gabriel Caplan </small>
      <a
        href="https://www.linkedin.com/in/gabrielcaplan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="img/icons/linkedin.png" alt="LinkedIn" className="icon" />
      </a>
      <a
        href="https://github.com/GCaplan777"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="img/icons/github.png" alt="GitHub" className="icon" />
      </a>
      <a
        href="https://www.facebook.com/gabriel.caplan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="img/icons/facebook.png" alt="FaceBook" className="icon" />
      </a>
      <a
        href="https://www.instagram.com/soypolitico"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="img/icons/IG.png" alt="Instagram" className="icon" />
      </a>
      {/* <a
        href="https://www.youtube.com/channel/UCwFNHvQxnZfsfUm8V9B98kw?view_as=subscriber"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="img/icons/youtube.png" alt="YouTube" className="icon" />
      </a> */}
    </footer>
  );
}

export default Footer;
