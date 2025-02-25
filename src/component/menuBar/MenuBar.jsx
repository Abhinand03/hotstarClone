import { motion } from "framer-motion";
import { useState } from "react";
import { BiBookmark, BiHome, BiPlayCircle, BiSearch } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FiFilm } from "react-icons/fi";
import { TbVaccine } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const menuItems = [
  { icon: <BiHome />, label: "Home",path:'/' },
  { icon: <BiSearch />, label: "Search" },
  { icon: <BiPlayCircle />, label: "Movies" },
  { icon: <TbVaccine />, label: "TV Shows" },
  { icon: <FiFilm />, label: "Sports" },
  { icon: <BiBookmark />, label: "Watchlist" },
  { icon: <CiSettings />, label: "Settings" },
];

const MenuBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <img
        className="z-50 h-12 w-12 fixed top-0  mt-6 ml-2"
        src="/logo2.png"
        alt=""
      />

      <motion.div
        className="fixed top-0 z-40 left-0 h-screen menubar bg-[#0F1014] text-gray-400 px-6 flex flex-col justify-center gap-4 shadow-lg"
        initial={{ width: 100 }}
        animate={{ width: isExpanded ? 500 : 100 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-2  rounded-md cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink to={item?.path} className="hover:text-white flex items-center gap-2">
              <span className="text-2xl ">{item.icon}</span>
              {isExpanded && <motion.label      initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }} className="text-base ">{item.label}</motion.label>}
            </NavLink>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default MenuBar;
