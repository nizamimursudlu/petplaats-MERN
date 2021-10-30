import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PetList from './pages/petList/PetList';
import Donation from './pages/donation/Donation';
import { ThemeProvider } from 'styled-components';
import PetDetails from './pages/petDetails/PetDetails';
import Volunteer from './pages/Volunteer';
import Foster from './pages/Foster';
import { AdoptionPage } from './pages/AdoptionPage';
import { AboutUs } from './pages/WhoWeAre';
import { ANBI } from './pages/ANBI';

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
            <Route exact path="/" component={Home} />
            <Route path="/pets/:category" component={PetList} />
            <Route path="/pet/:id" component={PetDetails} />
            <Route exact path="/volunteer" component={Volunteer} />
            <Route path="/donation" component={Donation} />
            <Route exact path="/foster" component={Foster} />
            <Route exact path="/adoption" component={AdoptionPage} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/anbi" component={ANBI} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
