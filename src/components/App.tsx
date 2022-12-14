import { Paper } from '@mui/material';
import stylesApp from './App.module.scss';
import { Header } from './Header';
import { Main } from './Main';

function App() {
  return (
    <>
      <Paper className={stylesApp.cv_wrapper}>
        <Header />
        <Main />
      </Paper>
    </>
  );
}

export default App;
