//  Import Modules
//  Router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//  Components
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layouts/Container";
import Navbar from "./components/layouts/Navbar";
import Projects from "./components/pages/Projects"
import Footer from "./components/layouts/Footer";
import Project from "./components/pages/Project"

//  App JSX
function App() {
  return (
    <Router>
        <Navbar />
        <Switch>

          <Container customClass="min_height">
            
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="/company">
              <Company />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/newProject">
              <NewProject />
            </Route>

            <Route path="/Project/:id">
              <Project />
            </Route>

          </Container>

        </Switch>
        <Footer />
    </Router>
  );
};

export default App;
