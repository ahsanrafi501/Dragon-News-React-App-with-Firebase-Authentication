import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn join-item justify-start bg-base-100"><FaFacebook></FaFacebook> Facebook</button>
          <button className="btn join-item justify-start bg-base-100"><FaTwitter></FaTwitter> Twitter</button>
          <button className="btn join-item justify-start bg-base-100"><FaInstagram></FaInstagram> Instragram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
