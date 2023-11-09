import { Box, Button, Typography,styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../login/LoginDialog";
import { useState, useContext } from "react";
import { DataContext } from "../context/DataProvider.jsx";
import Profile from "./Profile.jsx"

const HeaderBox = styled(Box)`
    display:flex;
`

const HeaderButons = () =>{

    const [open, setOpen] = useState(false);
    const {account, setAccount} = useContext(DataContext);

    const openDialog = () =>{
        setOpen(true);
    }

    return(
        <HeaderBox >
            {
                account ? <Profile account={account} setAccount={setAccount} />:
                    <Button variant="contained" onClick={() => openDialog()} style={{ color: "#2874f0", background: "#fff", padding: '0 50px', margin: '7px 20px 7px 20px' }} >Login</Button>
            }
            <Typography style={{ margin:'12px',width:150}} >Become a Seller</Typography>
            <Typography style={{ margin:'12px 20px'}} >More</Typography>
            <Box style={{ display: 'flex', margin: '12px 20px' }} >
                <ShoppingCartIcon/>
                <Typography>Cart</Typography>
            </Box>
            <LoginDialog open={open} setOpen={setOpen} />
        </HeaderBox>
    );
};

export default HeaderButons;