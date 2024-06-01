import React from "react";

const Footer = () => {
  const flexBetween = "flex justify-between items-center ";

  return (
    <footer className=" flex justify-between w-full bg-footerCol py-10 flex-wrap fixed bottom-0">
      <div className={`${flexBetween} w-5/6 mx-auto`}>
        {footerSectionData.map(({ title, links }, index) => (
          <FooterSections key={index} title={title} links={links} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;

const FooterSections = ({ title, links }) => {
  return (
    <div className="">
      <h4 className="mb-4 text-darkBlue font-bold tracking-wider">{title}</h4>
      {links.map((link, index) => (
        <p key={index} className="pb-1">
          {link}
        </p>
      ))}
    </div>
  );
};

const footerSectionData = [
  {
    title: "Health Aid",
    links: [
      "Plot 42, Akinza Street",
      "Victoria island, Lagos",
      "+2349167351788",
    ],
  },
  {
    title: "About Us",
    links: ["News & Media", "Contact Us"],
  },
  {
    title: "Quick Links",
    links: ["My account", "Book an appointment", "Library"],
  },
];
