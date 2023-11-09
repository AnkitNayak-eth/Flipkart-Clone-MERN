
import Slide from "./Slide";
import { Box } from "@mui/material";

const Midslide = ({ products, title, timer }) => {
    const adurl = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Box style={{ display: "flex" }} >
            <Box style={{ width: "83%" }} >
                <Slide products={products} title={title} timer={timer} />
            </Box>
            <Box style={{ backgroundColor: "#ffffff", margin: 10,padding:10,  textAlign: "center" }} >
                <img src={adurl} alt="ad" style={{ width: 220 }} />
            </Box>
        </Box>
    )
}

export default Midslide;