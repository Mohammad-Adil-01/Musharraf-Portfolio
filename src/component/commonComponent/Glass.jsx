import { motion } from "framer-motion";
const Glass = () => {
  return (
    <main className="m-10 h-full grid grid-cols-6 gap-5 transition-all duration-300">
      <motion.section
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="p-40 col-span-4 dark:border-white rounded-2xl 
      bg-gradient-to-br from-sky-400/30 to-white
       dark:bg-gradient-to-br  dark:from-slate-100 dark:to-white/50
       border-none
       backdrop-brightness-100
border-2 border-black flex flex-col 
       justify-start gap-20 items-left
      "
      >
        <div className="flex flex-col gap-8">
          <div className="title ">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold"
            >
              Hi, I am <span className="text-violet-700">Musharraf</span>,
            </motion.p>
            <p className="text-3xl">Interior Designer.</p>
          </div>
          <div className="heading">
            <h1 className="text-8xl font-extrabold">
              <span className="text-orange-300">INTERIOR</span>{" "}
              <span>DESIGNER</span>
            </h1>
          </div>
          <h2 className="text-7xl  lowercase first-letter:text-8xl ">
            Creating elegant <span className="font-semibold">interiors</span>,
            durable <span className="font-semibold">construction</span>, and spaces
            that
            <span className="text-cyan-900 font-bold"> inspire</span>.
          </h2>
        </div>
        <motion.section className="flex items-center gap-5">
          <div className="relative flex items-center justify-center w-8 h-8">
            <span className="radar"></span>

            <div className="w-4 h-4 rounded-full bg-green-900 z-10"></div>
          </div>

          <p className="text-3xl">Available to Take Contract</p>
        </motion.section>
        <motion.section className="btn flex flex-row gap-5 ">
          <button className="text-2xl w-1/6 p-5 rounded-xl bg-zinc-700/40 hover:bg-zinc-700/50 transition-all duration-100 transform hover:-translate-y-1">
            Contact
          </button>
          <button className="text-2xl w-1/6 p-5 rounded-xl bg-zinc-700/10 hover:bg-zinc-700/40 transition-all duration-100 transform hover:-translate-y-1">
            Explore
          </button>
        </motion.section>
      </motion.section>
      <div className="grid col-span-1 gap-5 ">
        <motion.section
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="p-5 row-span-2  dark:border-white rounded-2xl 
      bg-gradient-to-br from-sky-400/30 to-white
       dark:bg-gradient-to-br  dark:from-slate-100 dark:to-white/50
       border-none
       backdrop-brightness-100"
        >
          2
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="p-5 row-span-3  dark:border-white rounded-2xl 
      bg-gradient-to-br from-sky-400/30 to-white
       dark:bg-gradient-to-br  dark:from-slate-100 dark:to-white/50
       border-none
       backdrop-brightness-100"
        >
          3
        </motion.section>
      </div>
      <motion.section
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="p-5 col-span-1 dark:border-white rounded-2xl 
      bg-gradient-to-br from-sky-400/30 to-white
       dark:bg-gradient-to-br dark:from-slate-100 dark:to-white/50
       border-none
       backdrop-brightness-100"
      >
        4
      </motion.section>
    </main>
  );
};

export default Glass;
