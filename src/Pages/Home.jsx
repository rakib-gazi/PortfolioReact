import About from "../Components/About";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";


const Home = () => {
    return (
        <>
          <Hero></Hero>  
          <About></About>
          <Education></Education>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
        </>
    );
};

export default Home;