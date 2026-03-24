// import React from 'react'
// import { RiArrowRightUpFill } from 'react-icons/ri'
// const Arrow = () => {
//   return (
 

//         <div className='hidden pt-16 text-6xl sm:block lg:pt-24 lg:text-9xl' >
          
//         <RiArrowRightUpFill />
//         </div>
   
//   )
// }

// export default Arrow


// import React from 'react'
// import { motion } from 'framer-motion'
// import { RiArrowRightUpFill } from 'react-icons/ri'

// const Arrow = () => {
//   return (
//     <motion.div
//       className='hidden fixed z-[9999] text-6xl sm:block lg:text-9xl cursor-grab'

//       // 👇 Section1 ke hisaab se initial position
//       style={{ top: "66vh", left: "0vw" }}

//       drag

//       // 👇 screen ke bahar na jaaye
//       dragConstraints={{
//       top: 0,
//         left: 0,
//         right: window.innerWidth - 120,
//         bottom: window.innerHeight - 120
//       }}

//       whileTap={{ cursor: "grabbing", scale: 0.9 }}
//     >
//       <RiArrowRightUpFill />
//     </motion.div>
//   )
// }

// export default Arrow

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { RiArrowRightUpFill } from 'react-icons/ri'

const Arrow = () => {
  const constraintsRef = useRef(null)

  return (
    <div
      ref={constraintsRef}
      className="fixed inset-0 z-[2147483647] pointer-events-none"
    >
      <motion.div
        className='absolute bottom-12 left-12 text-6xl sm:block lg:text-9xl cursor-grab pointer-events-auto'

        drag
        dragConstraints={constraintsRef}

        whileTap={{ cursor: "grabbing", scale: 0.9 }}
      >
        <RiArrowRightUpFill />
      </motion.div>
    </div>
  )
}

export default Arrow