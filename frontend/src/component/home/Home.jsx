
import Navbar from "./Navbar.jsx";
import Banner from "./Banner.jsx";
import { Box } from "@mui/material";

const Home = () =>
{
    return(
        <>
            <Navbar />
            <Box style={{padding:" 10px",background:"#F2F2F2"}} >
                <Banner />
            </Box>
            
        </>
        
    );
};

export default Home;