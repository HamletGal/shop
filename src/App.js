import { makeStyles } from '@material-ui/core/styles';
import Restaurants from './pages/Restaurants';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: theme.spacing(6),
  },
  input: {
    margin: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="container">
         <Restaurants/>
    </div>
  );
}

export default App;
