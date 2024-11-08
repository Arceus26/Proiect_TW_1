import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Choose from './Pages/Choose';
import Add from './Pages/Add';
import theme from './Theme';
import Signup from './Pages/Signup';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add" element={<Add />} />
          <Route path="/choose" element={<Choose />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
