import Navbar from "./Navbar";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Clubs from "./pages/Clubs";

function App() {
  let Component
  switch(window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/clubs":
      Component = Clubs
      break
    case "/aboutme":
      Component = Home
      break
    case "/projects":
      Component = Projects
      break
    case "/experience":
      Component = Experience
      break
  }
  return (
    <>
      <Navbar />
      <div className="container"> 
        <Component />
      </div>
    </>
    
  );
}

export default App;
