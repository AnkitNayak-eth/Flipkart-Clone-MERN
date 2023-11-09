import { Grid } from "@mui/material";
import { imageURL } from "../../constants/data.js";

const Midsection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    
    return (
        <>
            <Grid style={{ display: "flex" }} container lg={12} sm={12} md={12} xs={12} >
                {
                    imageURL.map(image => (
                        <Grid item lg={4} sm={4} md={12} xs={12} style={{ padding: 5 }}>
                            <img src={image} alt="image" style={{ width: "100%" }} />
                        </Grid>
                    ))
                }
            </Grid>
            <img src={url} alt="covid"/>
        </>
    )
}

export default Midsection;