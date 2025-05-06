import React, { useState, useEffect, useRef } from "react";

export default function CursorTrail() {
   const [trail, setTrail] = useState([]);
   const [isVisible, setIsVisible] = useState(false);
   const timeoutRef = useRef(null);

   useEffect(() => {
      const handleMouseMove = (e) => {
         setIsVisible(true);
         if (timeoutRef.current) clearTimeout(timeoutRef.current);

         requestAnimationFrame(() => {
            setTrail((prevTrail) => {
               const newTrail = [...prevTrail, { x: e.clientX, y: e.clientY }];
               return newTrail.length > 20 ? newTrail.slice(1) : newTrail;
            });
         });

         timeoutRef.current = setTimeout(() => setIsVisible(false), 0); // Hide after 1s of inactivity
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
         if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
   }, []);

   return (
      <div className="relative">
         {isVisible &&
            trail.map((pos, index) => (
               <div
                  key={index}
                  className="fixed rounded-full bg-blue-500 opacity-60"
                  style={{
                     left: pos.x,
                     top: pos.y,
                     width: 10 - index * 0.5 + "px",
                     height: 10 - index * 0.5 + "px",
                     transform: "translate(-50%, -50%)",
                     transition: "all 0.1s ease-out",
                  }}
               />
            ))}
      </div>
   );
}
