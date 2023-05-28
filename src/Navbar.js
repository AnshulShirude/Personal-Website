import React, { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const outerContainerRef = useRef(null);
  const innerContainerRef = useRef(null);
  const siteTitleRef = useRef(null);
  const [marginLeft, setMarginLeft] = useState(150);
  const [marginRight, setMarginRight] = useState(9);

  useEffect(() => {
    const outerContainer = outerContainerRef.current;
    const innerContainer = innerContainerRef.current;
    const siteTitle = siteTitleRef.current;

    const outerRect = outerContainer.getBoundingClientRect();
    const innerRect = innerContainer.getBoundingClientRect();

    const marginLeftValue = window.innerWidth < 768 ? 0 : 150;
    setMarginLeft(marginLeftValue);

    const marginRightValue = window.innerWidth < 768 ? 0 : 9;
    setMarginRight(marginRightValue);

    // Update marginLeft and marginRight values when the window is resized
    const handleResize = () => {
      const newMarginleftValue = window.innerWidth < 768 ? 0 : 9;
      setMarginLeft(newMarginleftValue);  

      const newMarginRightValue = window.innerWidth < 768 ? 0 : 9;
      setMarginRight(newMarginRightValue);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="nav" ref={outerContainerRef}>
      <a href="/" className="site-title" ref={siteTitleRef} style={{ marginLeft: `${marginLeft}px` }}>
        Anshul
      </a>
      <ul style={{ marginRight: `${marginRight}rem` }} ref={innerContainerRef}>
        <CustomLink href="/aboutme">About Me</CustomLink>
        <CustomLink href="/clubs">Clubs</CustomLink>
        <CustomLink href="/projects">Projects</CustomLink>
        <CustomLink href="/experience">Experience</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  const isActive = path === href;

  return (
    <li className={isActive ? 'active' : ''}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
