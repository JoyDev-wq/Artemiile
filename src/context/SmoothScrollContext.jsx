// import { createContext, useContext, useLayoutEffect, useRef } from "react";
// // import LocomotiveScroll from "locomotive-scroll";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// import "locomotive-scroll/dist/locomotive-scroll.css";

// gsap.registerPlugin(ScrollTrigger);

// const SmoothScrollContext = createContext(null);

// export const useSmoothScroll = () => useContext(SmoothScrollContext);

// export const SmoothScrollProvider = ({ children }) => {
//   const scrollRef = useRef(null);
//   const locoScrollRef = useRef(null);

//   //   useLayoutEffect(() => {
//   //     locoScrollRef.current = new LocomotiveScroll({
//   //       el: scrollRef.current,
//   //       smooth: true,
//   //       lerp: 0.08,
//   //     });

//   //     const locoScroll = locoScrollRef.current;

//   //     // Connect GSAP ScrollTrigger
//   //     ScrollTrigger.scrollerProxy(scrollRef.current, {
//   //       scrollTop(value) {
//   //         return arguments.length
//   //           ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
//   //           : locoScroll.scroll.instance.scroll.y;
//   //       },
//   //       getBoundingClientRect() {
//   //         return {
//   //           top: 0,
//   //           left: 0,
//   //           width: window.innerWidth,
//   //           height: window.innerHeight,
//   //         };
//   //       },
//   //       pinType: scrollRef.current.style.transform ? "transform" : "fixed",
//   //     });

//   //     locoScroll.scroll.on("scroll", ScrollTrigger.update);
//   //     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//   //     ScrollTrigger.refresh();

//   //     return () => {
//   //       locoScroll.destroy();
//   //       ScrollTrigger.kill();
//   //     };
//   //   }, []);

//   useLayoutEffect(() => {
//     let locoScroll = null;
//     let raf = null;

//     const initLocoScroll = async () => {
//       if (!scrollRef.current) return;

//       try {
//         // Dynamic async import (handles bundler)
//         const LocomotiveScroll = (await import("locomotive-scroll")).default;

//         locoScroll = new LocomotiveScroll({
//           el: scrollRef.current,
//           smooth: true,
//           lerp: 0.08,
//         });

//         locoScrollRef.current = locoScroll;

//         // RequestAnimationFrame for init safety
//         raf = requestAnimationFrame(() => {
//           ScrollTrigger.scrollerProxy(scrollRef.current, {
//             scrollTop(value) {
//               return arguments.length
//                 ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
//                 : locoScroll.scroll.y;
//             },
//             getBoundingClientRect() {
//               return {
//                 top: 0,
//                 left: 0,
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//               };
//             },
//             pinType: scrollRef.current.style.transform ? "transform" : "fixed",
//           });

//           // Events after full init
//           locoScroll.on("scroll", ScrollTrigger.update);
//           ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//           ScrollTrigger.refresh();
//         });
//       } catch (error) {
//         console.error("LocomotiveScroll failed to load:", error);
//       }
//     };

//     initLocoScroll();

//     return () => {
//       if (raf) cancelAnimationFrame(raf);
//       if (locoScrollRef.current) {
//         locoScrollRef.current.destroy();
//       }
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   //   return (
//   //     <SmoothScrollContext.Provider value={locoScrollRef}>
//   //       <div ref={scrollRef} data-scroll-container>
//   //         {children}
//   //       </div>
//   //     </SmoothScrollContext.Provider>
//   //   );
// };

// // };
