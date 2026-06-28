import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useToggle } from "../Context/ToggleMode";

const Navigation = () => {
  const { mode, setMode } = useToggle();
  const [ishamburger, setIsHamburger] = useState(false);

  function handleHamburger() {
    ishamburger ? setIsHamburger(false) : setIsHamburger(true);
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mx-10 relative py-5 flex items-center justify-between bg-transparent transition-colors"
    >
      <h1 className="text-2xl md:text-4xl font-medium dark:text-white ">
        Musharraf Hussain Qureshi
      </h1>

      <button
        className={`flex flex-col gap-1.5 transition duration-500 md:hidden`}
        onClick={() => setIsHamburger(handleHamburger)}
      >
        <span className="block w-6 h-1 bg-black"></span>
        <span className="block w-6 h-1 bg-black"></span>
        <span className="block w-6 h-1 bg-black"></span>
      </button>

      <nav
        className={`absolute left-0 right-0 top-[50px] bg-gray-300/50 p-5 transition-all duration-300 ease-in
    ${ishamburger ? "opacity-100 translate-y-3" : "opacity-0 -translate-y-5 pointer-events-none"}
    md:static md:opacity-100 md:translate-y-0 md:pointer-events-auto md:flex md:bg-transparent`}
      >
        <ul className="flex flex-row gap-6 text-xl md:p-0 dark:text-white">
          <motion.li whileTap={{scale:"0.9px"}} className="hover:text-gray-500 cursor-pointer">Contact</motion.li>
          <motion.li whileTap={{scale:"0.9px"}} className="hover:text-gray-500 cursor-pointer">Company</motion.li>
          <motion.li whileTap={{scale:"0.9px"}} className="hover:text-gray-500 cursor-pointer">Work</motion.li>
        </ul>
      </nav>

      <div className="flex items-center p-2 bg-gray-600/60 rounded-full gap-2">
        <button
          className={`rounded-full p-1 transition ${
            !mode ? "bg-white" : "hover:bg-gray-300"
          }`}
          onClick={() => setMode(false)}
        >
          <Moon className="w-8 h-7 text-black" />
        </button>

        <button
          className={`rounded-full p-1 transition ${
            mode ? "bg-white" : "hover:bg-gray-300"
          }`}
          onClick={() => setMode(true)}
        >
          <Sun className="w-8 h-7 text-black" />
        </button>
      </div>
    </motion.header>
  );
};

export default Navigation;
