import Home from './Home';
import NavBar from './NavBar';
import Create from  './Create';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
        <div className="App">
            <NavBar></NavBar>
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/create">
                  <Create></Create>
                </Route>
                <Route path="/blogs/:id">
                  <BlogDetails></BlogDetails>
                </Route>
              </Switch>
            </div>
        </div>
    </Router>
  );
}

export default App;

