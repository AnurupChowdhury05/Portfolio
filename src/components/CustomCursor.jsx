import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorTrail = cursorTrailRef.current;

    if (window.matchMedia('(pointer: fine)').matches) {
      const moveCursor = (e) => {
        if (cursor && cursorTrail) {
          cursor.style.left = e.clientX + 'px';
          cursor.style.top = e.clientY + 'px';
          
          setTimeout(() => {
            cursorTrail.style.left = e.clientX + 'px';
            cursorTrail.style.top = e.clientY + 'px';
          }, 50);
        }
      };

      document.addEventListener('mousemove', moveCursor);

      // We'll use event delegation for hover effects rather than adding listeners to all elements
      const handleMouseOver = (e) => {
        if (e.target.closest('a, button, .skill-tab, .proj-link')) {
          cursor?.classList.add('hovered');
          cursorTrail?.classList.add('hovered');
        }
      };

      const handleMouseOut = (e) => {
        if (e.target.closest('a, button, .skill-tab, .proj-link')) {
          cursor?.classList.remove('hovered');
          cursorTrail?.classList.remove('hovered');
        }
      };

      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);

      return () => {
        document.removeEventListener('mousemove', moveCursor);
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseout', handleMouseOut);
      };
    } else {
      if (cursor && cursorTrail) {
        cursor.style.display = 'none';
        cursorTrail.style.display = 'none';
      }
    }
  }, []);

  return (
    <>
      <div id="cursor" className="cursor" ref={cursorRef}></div>
      <div id="cursor-trail" className="cursor-trail" ref={cursorTrailRef}></div>
    </>
  );
};

export default CustomCursor;
