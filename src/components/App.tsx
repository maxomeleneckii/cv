import { Paper } from '@mui/material';
import { Header } from './Header';
import { Main } from './Main';
import { styles } from './App.styles';

function App() {
  return (
    <>
      <Paper sx={styles.appWrapper}>
        <Header />
        <Main />
      </Paper>
    </>
  );
}

export default App;
