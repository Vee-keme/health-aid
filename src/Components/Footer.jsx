import React from "react";

const Footer = () => {
  return (
    <div className=" flex justify-between w-full bg-footerCol py-10 px-16 flex-wrap fixed bottom-0">
      {/* CareFinder */}
      <div className="mr-5">
        <h4 className="mb-8 text-darkBlue font-bold tracking-wider">
          CareFinder
        </h4>
        <p className="pb-1">Plot 42, Akinza Street,</p>
        <p className="pb-1">Victoria island, Lagos</p>
        <p>+2349167351788</p>
      </div>
      {/* About us */}
      <div>
        <h4 className="mb-8 text-darkBlue font-bold tracking-wider">
          About Us
        </h4>
        <p className="pb-1">News & Media</p>
        <p className="pb-1">Contact Us</p>
      </div>
      {/* Quick links */}
      <div>
        <h4 className="mb-8 text-darkBlue font-bold tracking-wider">
          Quick Links
        </h4>
        <p className="pb-1">My account</p>
        <p className="pb-1">Book an appointment</p>
        <p>Library</p>
      </div>
    </div>
  );
};

export default Footer;
