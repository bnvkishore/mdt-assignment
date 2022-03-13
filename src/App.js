import { CssBaseline, Hidden } from '@mui/material';
import Routes from './routes';
import Spinner from './Components/Spinner';
import Toaster from './Components/Toaster';

function App() {
  return (
    <div className="App">
      <Hidden smUp>
        <Toaster />
        <Spinner />
        <CssBaseline />
        <Routes />
      </Hidden>
      <Hidden smDown>
        <div>Please adjust your screen to mobile device to see Application</div>
      </Hidden>
    </div>
  );
}

export default App;
