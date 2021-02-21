import './styles/App.scss';
import Login from './pages/login';
import home from './pages/home';
import bloodwork from './pages/bloodwork';
import medication from './pages/medication';
import patient from './pages/patient';
import Prescriptions from './pages/prescriptions';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
//const { signInUser } = require("./helpers/firestore-helpers/authentication");
import SearchComponent from "./component/SearchComponent";

function App() {
  //console.log(signInUser("alex@pharmacy1.co.uk", "Pharmacy1"));

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/home" component={home} />
            <Route path="/bloodwork" component={bloodwork} />
            <Route path="/medication" component={medication} />
            <Route path="/patient" component={patient} />
            <Route path="/prescriptions" component={Prescriptions} />
            <Route exact path="/" component={Login} />
            <Route exact path="/patientSearch/:id" component={SearchComponent}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
