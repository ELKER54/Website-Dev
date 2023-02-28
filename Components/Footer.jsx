import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center py-2 bg-base-200/50 text-base-content border-t">
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="" className="link link-hover"></a>
            <a href="https://elker.cc/webemail" className="link link-hover">
              Contact Me
            </a>
            <a href="https://elker.cc/hrzn" className="link link-hover">
              HRZN
            </a>
            <a href="https://" className="link link-hover">
              Code
            </a>
          </div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <i className="fa-brands fa-discord text-2xl"></i>
            </a>
            <a>
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <div>
              <p>Copyright © 2023 - Some rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
