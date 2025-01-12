import '../App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import RankingsPage from './RankingsPage';
import Profile from './Profile';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { React, useState, useEffect} from 'react';

function App() {

  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8002/profiles')
    .then(response => response.json())
    .then(data => setProfileData(data));
  },[])

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage profiles={profileData}/>
        </Route>
        <Route exact path='/rankings'>
          <RankingsPage />
        </Route>
        <Route exact path="/profiles/:id">
          <Profile />
        </Route>
        <Route path='/Profile.js'>
          <Profile />
        </Route>
      </Switch>
      <NavBar />
    </Router>
  );
}
export default App;