import React,{Component} from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Resume from './components/Resume';
import Services from './components/Services';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
    render(){
        return(
            <Router>
                <Sidebar />
                <Home />
                <About />
                <Skill />
                <Resume />
                <Services />
                <Contact />
            </Router>
        )
    }
}

export default App;
