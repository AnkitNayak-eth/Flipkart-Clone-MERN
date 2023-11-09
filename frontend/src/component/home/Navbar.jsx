import { Box, Typography } from "@mui/material";
import { navData } from "../../constants/data.js";

const Navbar = () => {
    return (
        <Box style={{ display: 'flex', margin: "55px 130px 0 130px", justifyContent: "space-between" }}>
            {navData.map((data, index) => (
                <Box key={index} style={{ padding: "12px 0", textAlign: "center" }}>
                    <img src={data.url} alt="nav" style={{ width: 64 }} />
                    <Typography>{data.text}</Typography>
                </Box>
            ))}
        </Box>
    );
}

export default Navbar;
