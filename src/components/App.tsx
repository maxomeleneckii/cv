import { Paper } from '@mui/material';
import { Header } from './Header';
import { Main } from './Main';
import stylesApp from './App.module.css';

function App() {
  return (
    <>
      <Paper className={stylesApp.appWrapper}>
        <Header />
        <Main />
      </Paper>
    </>
  );
}

export default App;
