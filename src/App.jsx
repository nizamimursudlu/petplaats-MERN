// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
import PetList from './pages/PetList';
import { ThemeProvider } from 'styled-components';

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
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        <PetList />
      </ThemeProvider>
    </div>
  );
}

export default App;
