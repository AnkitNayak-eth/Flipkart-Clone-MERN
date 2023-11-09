import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(null);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(null);
    }

    const logoutUser = () => {
        setAccount('');
        handleClose(); 
    }

    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ margin: '12px 20px', cursor: "pointer" }}>{account}</Typography>
            </Box>
            <Menu
                style={{ marginTop: "5px" }}
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={logoutUser}>
                    <LogoutIcon color="primary" fontSize="small" />
                    <Typography style={{ fontSize: "14px", marginLeft: "10px" }}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    );
}

export default Profile;
