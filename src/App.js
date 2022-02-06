// react basics
import React from "react";

// components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
    Navigation,
    Footer
} from "./components/Misc"
import {
    Overview,
    DevPanel,
    Competition,
    About
} from "./components";

// config
import providers from "./config/providers.json";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "" };

        this.navbarHandler = this.navbarHandler.bind(this);
    }

    navbarHandler(Title) {
        this.setState({
            title: Title
        });
    }

    render() {
        return (
            <Router className="page">
                <Navigation title={this.state.title} icon={this.state.icon} dev="true" />
                <div className="center">
                    <Container className="content">
                        <Routes>
                            <Route path="/" element={<Overview navbarHandler={this.navbarHandler} />} />
                            <Route path="/dev" element={<DevPanel navbarHandler={this.navbarHandler} />} />
                            <Route path="/competition" element={<Competition navbarHandler={this.navbarHandler} />} />
                            <Route path="/about" element={<About navbarHandler={this.navbarHandler} />} />
                        </Routes>
                    </Container>
                    <Footer />
                </div>
            </Router>
        );
    }
}

// export
export default App