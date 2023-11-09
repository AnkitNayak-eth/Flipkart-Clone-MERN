import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Banner from "./Banner.jsx";
import Slide from "./Slide.jsx";
import { Box } from "@mui/material";
import { getProducts } from "../../redux/actions/productAction.js";
import { useDispatch, useSelector } from "react-redux";
import Midslide from "./Midslide.jsx";
import Midsection from "./Midsection.jsx";

const Home = () =>
{
    const {products} = useSelector(state => state.getProducts);
    
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getProducts())
    }, [dispatch])
    
    return(
        <>
            <Navbar />
            <Box style={{padding:" 10px",background:"#F2F2F2"}} >
                <Banner />
                <Midslide products={products} title="Deal of the Day" timer={true} />
                <Midsection/>
                <Slide products={products} title="Best of Electronics" timer={false} />
                <Slide products={products} title="Home & Kitchen Essentials" timer={false} />
                <Slide products={products} title="Fashion Top Deals" timer={false} />
                <Slide products={products} title="Top Deals of Accessories" timer={false} />
            </Box>
            
        </>
        
    );
};

export default Home;