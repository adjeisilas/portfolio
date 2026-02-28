// import { useEffect, useState } from 'react';
// import { motion, useSpring, useMotionValue } from 'framer-motion';

// const Cursor = () => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   // Motion values for X and Y positions
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   // Smooth out the movement with spring physics
//   const springConfig = { damping: 25, stiffness: 150 };
//   const cursorX = useSpring(mouseX, springConfig);
//   const cursorY = useSpring(mouseY, springConfig);

//   useEffect(() => {
//     const moveMouse = (e) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };

//     const handleHover = (e) => {
//       // Check if the hovered element is a button, link, or has 'data-magnetic'
//       const target = e.target;
//       if (target.closest('button') || target.closest('a') || target.closest('.magnetic')) {
//         setIsHovered(true);
//       } else {
//         setIsHovered(false);
//       }
//     };

//     window.addEventListener('mousemove', moveMouse);
//     window.addEventListener('mouseover', handleHover);

//     return () => {
//       window.removeEventListener('mousemove', moveMouse);
//       window.removeEventListener('mouseover', handleHover);
//     };
//   }, [mouseX, mouseY]);

//   return (
//     <motion.div
//       className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
//       style={{
//         x: cursorX,
//         y: cursorY,
//         translateX: '-50%',
//         translateY: '-50%',
//       }}
//       animate={{
//         scale: isHovered ? 4 : 1,
//         backgroundColor: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 1)"
//       }}
//     />
//   );
// };

// export default Cursor;