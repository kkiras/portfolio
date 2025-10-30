import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/contact";
import Timeline from "./components/experience/Timeline";
import Project from "./components/projects/Project";
import About from "./components/about/About";

import "/src/styles/components.css"
import Blog from "./components/blog/Blog";

function App() {


  return (
    
    <div style={container}>
      <Navigation />
      <div id="main-scroll" style={content}>
        <Home/>

        <About />

        <Skills />

        <Project />

        <Timeline />

        <Contact />

        <Blog />

      </div>
      
    </div>
  );
}

const container = {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
}

const content = {
  flex: '1',
  height: '100vh',
  overflowY: 'auto',
  scrollBehavior: 'smooth'
}


export default App;
