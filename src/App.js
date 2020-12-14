import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import Profile from './containers/Profile'

export default function App() {
  return (
    <Router>
      <Switch>
        <Home path="/" exact={true} />
        <Dashboard path="/dashboard" exact={true} />
        <Profile path="/profile" exact={true} />
      </Switch>
    </Router>
  )
}
