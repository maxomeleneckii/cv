import { Paper } from '@mui/material';
import { Header } from './Header';
import { Main } from './Main';

function App() {
  return (
    <>
      <Paper sx={{ margin: '0 auto', maxWidth: '56rem', width: '100%', height: '100%' }}>
        <Header />
        <Main />
      </Paper>
    </>
  );
}

export default App;
