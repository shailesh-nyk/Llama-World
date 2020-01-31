import React from 'react';
import NavBarComponent from './nav-bar';
import HomeComponent from './pages/home';
import AboutComponent from './pages/about';
import MapsComponent from './pages/maps';
import TrendingComponent from './pages/trending';
import { Switch, Route, Redirect } from 'react-router-dom';
import QuizComponent from './pages/quiz';

function App() {
  return (
     <div>
        <NavBarComponent/>
        <div className="s-main-content">
          <Switch>
            <Route exact path="/" render={() => (
                                <Redirect to="/home" />
                  )} />
              <Route exact path='/home' component={HomeComponent} />
              <Route exact path='/about' component={AboutComponent} />
              <Route exact path='/find' component={MapsComponent} />
              <Route exact path='/trending' component={TrendingComponent} />
              <Route exact path='/quiz' component={QuizComponent} />
              <Route render={function () {
                  return <p>Not found</p>
              }} />

          </Switch>
        </div>
      </div>
  );
}

export default App;
