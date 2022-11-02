import { Grid, ThemeProvider } from '@mui/material';
import { useContext } from 'react';
import './App.css';
import Header from './Components/Header';
import { Spinner } from './Components/Spinner';
import { PageContext } from './Contexts/PageContext';
import { AppPage } from './Pages/AppPage';
import { theme } from './Styles/theme';

function App() {
  const { background, loading } = useContext(PageContext);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100%' }}>
      {loading && <Spinner />}
          <Grid sx={{maxWidth: '1200px', margin: '0 auto', pb: 5}}>
          <Header/>
        <Grid sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {flexDirection: 'column', padding: 0}, display: 'flex', padding: '0 24px' })}>
          <AppPage />
        </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
