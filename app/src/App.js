import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Preview from './components/Preview'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Card1/>
        </Route>
        <Route path='/details'>
          <Card1/>
        </Route>
        <Route path='/more_details'>
          <Card2/>
        </Route>
        <Route path='/preview'>
          <Preview/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
