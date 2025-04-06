"use client"
import { useState, useRef, useEffect } from "react";

// Component wrapper used to make different sections fade into screen upon appearance
export default function FadeInSection(props) {
    // React hooks for current visibility status of a section + storing data w/o re-rendering
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    // Another react hook to render the section upon visibility on the screen
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isVisible) {
                    setVisible(true);
                }
            });
        }, {
            once: true,
        });
        observer.observe(domRef.current);

        return () => observer.disconnect();
    }, [isVisible]);
    
    return (
      <div className={`fade-in-section ${isVisible ? "is-visible" : ""} ${props.className}`} ref={domRef}>
        {props.children}
      </div>
    );
}