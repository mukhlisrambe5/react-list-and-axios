import logo from './logo.svg';
import './App.css';

import {Box, Button, ThemeProvider, Typography} from "@mui/material";
import theme from './themes/theme.js';

import ListMovies from './containers/ListMovies';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <Box p={2}>
          <Typography variant='h5'>React List and Axios</Typography>
        </Box>
        <Box sx={{
          p:2,
          display:"flex",
          gap:2,
        }}> 
          <Button variant='contained' color='primary'>
            Halo Warna Hijau
          </Button>
          <Button variant='contained' color='secondary'>
            Halo Warna Biru
          </Button>
        </Box>
      </header>
      <section>
        <ListMovies />
      </section>
    </div>
    </ThemeProvider>
  );
}

export default App;
