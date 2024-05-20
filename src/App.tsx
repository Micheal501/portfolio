import { useRef, useEffect, useState } from "react";
import Home from "./pages/Home";
import Container from "@mui/material/Container";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import "animate.css";
import Footer from "./components/organisms/Footer";

const App = () => {
  const [isVisible, setIsVisible] = useState({
    home: false,
    about: false,
    projects: false,
    contacts: false,
    footers: false,
  });

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const footersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const homeTop = homeRef.current?.getBoundingClientRect().top ?? 0;
      const aboutTop = aboutRef.current?.getBoundingClientRect().top ?? 0;
      const projectsTop = projectsRef.current?.getBoundingClientRect().top ?? 0;
      const contactsTop = contactsRef.current?.getBoundingClientRect().top ?? 0;
      const footersTop = footersRef.current?.getBoundingClientRect().top ?? 0;

      const windowHeight = window.innerHeight;

      setIsVisible({
        home: homeTop < windowHeight,
        about: aboutTop < windowHeight,
        projects: projectsTop < windowHeight,
        contacts: contactsTop < windowHeight,
        footers: footersTop < windowHeight,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Home />

        <div
          ref={aboutRef}
          className={`fade-in ${isVisible.about ? "visible" : ""}`}
        >
          <About />
        </div>
        <div
          ref={projectsRef}
          className={`fade-in ${isVisible.projects ? "visible" : ""}`}
        >
          <Projects />
        </div>
        <div
          ref={contactsRef}
          className={`fade-in ${isVisible.contacts ? "visible" : ""}`}
        >
          <Contacts />
        </div>
        <div
          ref={footersRef}
          className={`fade-in ${isVisible.contacts ? "visible" : ""}`}
        >
          <Footer />
        </div>
      </Container>
    </>
  );
};

export default App;
