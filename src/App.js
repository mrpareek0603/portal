import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Features from "./components/Features/Features";
import MentorInfo from "./components/MentorInfo/MentorInfo";
import Curriculum from './components/Curriculum/Curriculum';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Plans from './components/Plans/Plans';
import FeeStructure from './components/FeeStructure/FeeStructure';
import Dashboard from './components/Dashboard/Dashboard';
import Protected from './components/ProtectedDash/ProtectedDash';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
    
      <div className="App">
        <Route exact path='/'>

            <Header />
            <div style={{marginLeft:"15px"}}>
              <Intro />
              <Curriculum />
              <Features />
              <MentorInfo />
              <Plans />
              {/* <FeeStructure /> */}
              
            </div>
            <Footer />
        </Route>

        <Route path="/login">
              <Login />
        </Route>

        <Route path="/signup">
              <SignUp />
        </Route>

        <Route path="/dashboard">
          <Protected>
            <Dashboard />
          </Protected>
        </Route>

      </div>
    
    </Router>
  );
}

export default App;
