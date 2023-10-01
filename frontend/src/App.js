import { Box } from '@mui/material';
import './App.css';
import Header from './component/header/Header.jsx';
import Home from './component/home/Home.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Box style={{marginTop:54}} >
        <Home/>
      </Box>
    </div>
  );
}

export default App;
