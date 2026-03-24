// import { useEffect, useState } from "react"
// import { motion } from "framer-motion"

// const Loader = ({ onFinish }) => {
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     let i = 0
//     const interval = setInterval(() => {
//       i += 1
//       setProgress(i)
//       if (i >= 100) clearInterval(interval)
//     }, 18)

//     const t = setTimeout(onFinish, 2200)

//     return () => {
//       clearInterval(interval)
//       clearTimeout(t)
//     }
//   }, [onFinish])

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white font-mono"
      
//       // ⚡ screen flicker
//       animate={{ opacity: [1, 0.97, 1] }}
//       transition={{ repeat: Infinity, duration: 0.15 }}

//     >
//       <motion.div
//         className="w-[340px] sm:w-[420px] p-6 border border-red-500/40 bg-black/80"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.4 }}
//       >
//         {/* HEADER */}
//         <div className="text-xs tracking-widest text-red-400 mb-2">
//           UMBRELLA SYSTEM v2.3
//         </div>

//         {/* TITLE */}
//         <motion.div
//           className="text-lg tracking-[0.3em] mb-4 text-red-300"
          
//           // ⚡ glitch effect
//           animate={{ x: [0, -2, 2, 0] }}
//           transition={{ repeat: Infinity, duration: 0.2 }}
//         >
//           INITIALIZING...
//         </motion.div>

//         {/* PROGRESS BAR */}
//         <div className="relative w-full h-2 bg-zinc-800 overflow-hidden">
          
//           {/* red progress */}
//           <motion.div
//             className="h-full bg-red-500"
//             initial={{ width: "0%" }}
//             animate={{ width: `${progress}%` }}
//             transition={{ ease: "linear" }}
//           />

//           {/* scanline */}
//           <motion.div
//             className="absolute top-0 left-[-30%] h-full w-1/3 bg-gradient-to-r from-transparent via-red-300/60 to-transparent"
//             animate={{ left: ["-30%", "130%"] }}
//             transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
//           />
//         </div>

//         {/* FOOTER */}
//         <div className="mt-3 flex justify-between text-xs text-zinc-500">
//           <span>LOADING MODULES</span>
//           <span className="text-red-400">{progress}%</span>
//         </div>

//         {/* WARNING TEXT */}
//         <motion.div
//           className="mt-2 text-[10px] text-red-500"
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ repeat: Infinity, duration: 0.8 }}
//         >
//           DO NOT TURN OFF SYSTEM
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default Loader


import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import crack from "../assets/Resident-Evil-4-VR-1.png" // 👈 add your crack image here

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setProgress(i)
      if (i >= 100) clearInterval(interval)
    }, 60) // ⏰ increase this if you want the progress to fill slower

    const t = setTimeout(onFinish, 6000) // ⏰ increase this if you want the loader to stay longer 2200

    return () => {
      clearInterval(interval)
      clearTimeout(t)
    }
  }, [onFinish])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white font-mono overflow-hidden"
      
      // ⚡ screen flicker
      animate={{ opacity: [1, 0.97, 1] }}
      transition={{ repeat: Infinity, duration: 0.15 }}
    >
     
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${crack})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25
        }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />

      {/* ✨ GLASS SHINE */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent"
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      {/* ⚡ CRACK FLASH */}
      <motion.div
        className="absolute inset-0 bg-white pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0] }}
        transition={{ duration: 0.3, delay: 0.2 }}
      />

      {/* 📦 MAIN BOX */}
      <motion.div
        className="relative w-[340px] sm:w-[420px] p-6 border border-red-500/40 bg-black/80 backdrop-blur-sm z-10 rounded-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* HEADER */}
        <div className="text-xs tracking-widest text-red-400 mb-2">
          UMBRELLA SYSTEM v2.3
        </div>

        {/* TITLE */}
        <motion.div
          className="text-lg tracking-[0.3em] mb-4 text-red-300"
          animate={{ x: [0, -2, 2, 0] }} // glitch
          transition={{ repeat: Infinity, duration: 0.2 }}
        >
          INITIALIZING...
        </motion.div>

        {/* PROGRESS BAR */}
        <div className="relative w-full h-2 bg-zinc-800 overflow-hidden">
          
          <motion.div
            className="h-full bg-red-500"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />

          {/* scanline */}
          <motion.div
            className="absolute top-0 left-[-30%] h-full w-1/3 bg-gradient-to-r from-transparent via-red-300/60 to-transparent"
            animate={{ left: ["-30%", "130%"] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />
        </div>

        {/* FOOTER */}
        <div className="mt-3 flex justify-between text-xs text-zinc-500">
          <span>LOADING MODULES</span>
          <span className="text-red-400">{progress}%</span>
        </div>

        {/* WARNING */}
        <motion.div
          className="mt-2 text-[10px] text-red-500"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          DO NOT TURN OFF SYSTEM
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Loader