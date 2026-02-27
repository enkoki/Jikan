"use client";

import React from "react";

const Footer = () => {
  const footerSections = [
    {
      title: "Site Theme",
      items: ["TBA"],
    },
    {
      title: "Donate",
      items: ["NADA", "NADA"],
    },
    {
      title: "Apps",
      items: ["Site Stats", "Recommendations", "API"],
    },
    {
      title: "Discord",
      items: ["Twitter", "Bluesky", "Facebook", "GitHub"],
    },
    {
      title: "Add Data",
      items: ["Moderators", "Contact", "Terms & Privacy", "Site Map"],
    },
  ];

  return (
    <footer className="bg-[#11161d] text-[#9fadbd] py-10 px-5 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="text-sm font-semibold text-[#79c3ef] mb-3">
              {section.title}
            </h4>
            <ul className="flex flex-col gap-2 text-xs">
              {section.items.map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Aniliu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;