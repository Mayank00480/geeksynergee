import logo from './logo.svg';
import './App.css';
import MyForm from './components/FormData/MyForm';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Loggedin from './components/Loggedin/Loggedin';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" Component = {MyForm}>
          </Route>
          <Route exact path = "/loggedIn" Component = {Loggedin}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
