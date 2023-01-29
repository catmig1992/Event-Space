import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import "./App.css";

// import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <Router>
        <header>
          <h1 className="title">Event Space</h1>
          <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item>
                <Nav.Link href="/">
                  <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"aboutPage"}>
                  <Link to="/about">About Us</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"servicesPage"}>
                  <Link to="/services">Services</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </header>

        <div className="display">
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path="/about" component={About} /> */}
          {/* <Route
            path="/services"
            render={() => <Services />}
          /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
