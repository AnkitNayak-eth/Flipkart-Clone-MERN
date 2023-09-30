import { Box, Button, Typography,styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderBox = styled(Box)`
    display:flex;
`

const HeaderButons = () =>{
    return(
        <HeaderBox>
            <Button variant="contained" style={{color:"#2874f0",background:"#fff",padding:'0 50px',margin:'7px 20px 7px 20px'}} >Login</Button>
            <Typography style={{ margin:'12px',width:150}} >Become a Seller</Typography>
            <Typography style={{ margin:'12px 20px'}} >More</Typography>
            <Box style={{ display: 'flex', margin: '12px 20px' }} >
                <ShoppingCartIcon/>
                <Typography>Cart</Typography>
            </Box>
        </HeaderBox>
    );
};

export default HeaderButons;