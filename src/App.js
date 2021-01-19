import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import Profile from './containers/Profile'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#8e7b6b',
      },
      background: {
        default: '#cbc3be',
      },
      text: {
        primary: '#8e7b6b',
      },
      contrastThreshold: 1,
    },
  })

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Home path="/" exact={true} />
          <Dashboard path="/dashboard" exact={true} />
          <Profile path="/profile" exact={true} />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}
