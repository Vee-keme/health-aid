import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const phoneNumber = "+2349112989342";

  const redirectToWhatsapp = () => {
    const url = "https://wa.me/message/T36TTGQGDXIHC1";
    window.open(url, "_blank");
  };
  // const handleDialerClick = () => {
  //   const telUrl = `tel:${phoneNumber}`;
  //   window.open(telUrl, '_self');
  // };
  return (
    <div className=" flex justify-between  bg-footerCol py-10 px-16 flex-wrap">
      {/* CareFinder */}
      <div className="mr-5 text-base">
        <h4 className="sm:mb-8 mb-3 text-darkBlue font-bold tracking-wider">
          CareFinder
        </h4>
        <Link to="/map">
          <p className="pb-1">Plot 42, Akinza Street,</p>

          <p className="pb-1">Victoria island, Lagos</p>
        </Link>
        <p onClick={redirectToWhatsapp} className="cursor-pointer">
          +2349112989342
        </p>
      </div>
      {/* About us */}
      <div className="sm:mt-0 mt-5">
        <h4 className="sm:mb-8 mb-3 text-darkBlue font-bold tracking-wider ">
          About Us
        </h4>
        <Link to="/media">
          <p className="pb-1">News & Media</p>
        </Link>
        <Link to="/contact">
          <p className="pb-1">Contact Us</p>
        </Link>
      </div>
      {/* Quick links */}
      <div className="sm:mt-0 mt-5">
        <h4 className="sm:mb-8 mb-3 text-darkBlue font-bold  tracking-wider">
          Quick Links
        </h4>
        <Link to="/login">
          <p className="pb-1">My account</p>
        </Link>
        <Link to="/login">
          <p className="pb-1">Book an appointment</p>
          <p>Library</p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
