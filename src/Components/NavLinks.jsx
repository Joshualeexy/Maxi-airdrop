import React from "react";

const NavLinks = () => {
  const links = [
    {
      id: 1,
      name: "Phases",
      href: "#phases",
      current: true,
    },

  
  ];

  return (
    <nav className="text-gray-100  inline-block  max-md:clip-path-corners-r  bg-accent h-16">
      <ul className="flex items-center gap-4 sm:h-16">
        {links.map((link) => (
          <Link data={link} key={link.id}/>
        ))}
      </ul>
    </nav>
  );
};

const Link = ({ data }) => {
  return (
    <li className="md:block font-bold border-b-2 border-white uppercase max-md:mt-5 leading-none text-sm">
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
        }} 
        className=""
      >
        {data?.name}
      </a>
    </li>
  );
};

export default NavLinks;
