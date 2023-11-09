import { Box } from '@mui/material';
import Header from './component/header/Header.jsx';
import Home from './component/home/Home.jsx';
import DataProvider from './component/context/DataProvider.jsx';

function App() {
  return (
    <DataProvider>
      <Header/>
      <Box style={{marginTop:54}} >
        <Home/>
      </Box>
    </DataProvider>
  );
}

export default App;
