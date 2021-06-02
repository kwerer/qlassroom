import "./App.css";
import Landing from "./components/landingPage/landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/logupPage/signup";
import LoginPage from "./components/logupPage/loginPage";
import ForgotPassword from "./components/landingPage/landingComponents/forgotPassword";
import HomeDashboard from "./components/Dashboard/HomeDashboard";
import PhysicsQuiz from "./components/Quizzes/PhysicsQuiz";
import ProfilePage from "./components/profilePage/profilePage";
//import MainDashboard from "./components/Dashboard/MainDashboard";
//this route is outdated <Route path="/MainDashboard" exact component={MainDashboard}></Route>
function App() {
  return (
    <Router>
      <Route path="/login" exact component={LoginPage}></Route>
      <Route path="/signup" exact component={Signup}></Route>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/Forgotpassword" exact component={ForgotPassword}></Route>
      <Route path="/PhysicsQuiz" exact component={PhysicsQuiz}></Route>
      <Route path="/HomeDashboard" exact component={HomeDashboard}></Route>
      <Route path="/ProfilePage" exact component={ProfilePage}></Route>
    </Router>
  );
}

export default App;
