import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
import PetList from './pages/PetList';
import { ThemeProvider } from 'styled-components';
import { PetDetails } from './pages/PetDetails';

function App() {
  const theme = {
    colors: {
      primary: `#f96d5c`,
      light: `#fdc3ba`,
      dark: `#8a000b`,
    },
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/pets/:category">
              <PetList />
            </Route>
            <Route path="/pet/:id">
              <PetDetails />
            </Route>
            {/* <Login /> */}
            {/* <Register /> */}
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
