import { useState, useEffect } from "react";

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState("");
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction: string = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  };

export default function Header(){
    const scrollDirection = useScrollDirection();

    return(
        <header className={`header ${ scrollDirection}`}>
            <h1>Benjamin</h1>
            <ul>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#games">Games</a></li>
                <li><a href="#contact-me">Contact Me</a></li>
                <li><button className="resumeButton">Resume</button></li>
            </ul>
        </header>
    )
}