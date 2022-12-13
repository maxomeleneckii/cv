import { Paper } from '@mui/material';
import stylesApp from './App.module.scss';
import { Header } from './Header';

function App() {
  return (
    <>
      <Paper className={stylesApp.cv_wrapper}>
        <Header />
      </Paper>
    </>
  );
}

export default App;
