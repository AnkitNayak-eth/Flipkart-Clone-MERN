import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, Divider } from "@mui/material";
import Countdown from "react-countdown";

const responsive = {
    superLargeDesktop: {

        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>;
    }
    return (
        <Box style={{ marginTop: 10, backgroundColor: "#ffffff" }} >
            <Box style={{ padding: '15px 20px', display: "flex" }} >
                <Typography style={{ fontSize: 22, fontWeight: 600, marginRight: 25, lineHeight: 2 }} >{title}</Typography>
                {
                    timer &&
                    <Box style={{ display: "flex", marginLeft: 10, alignItems: "center", color: "#7f7f7f" }} >
                        <img src={timerURL} alt="timer" style={{ width: 24 }} />
                        <Countdown date={Date.now() + 8.64e+7} renderer={renderer} />
                    </Box>
                }
                <Button variant="contained" color="primary" style={{ marginLeft: "auto", backgroundColor: "#2874f0", borderRadius: 2, fontWeight: 600 }}>View All</Button>
            </Box>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                slidesToSlide={1}
                centerMode={true}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    products.map(product => (
                        <Box style={{ textAlign: "center", padding: "25px 15px" }} >
                            <img src={product.url} alt="product" style={{ width: "auto", height: 150 }} />
                            <Typography style={{ fontSize: 14, marginTop: 5, fontWeight: 600, color: "#212121" }} >{product.title.shortTitle}</Typography>
                            <Typography style={{ fontSize: 14, marginTop: 5, color: "green" }} >{product.discount}</Typography>
                            <Typography style={{ fontSize: 14, marginTop: 5, color: "#212121", opacity: "0.6" }} >{product.tagline}</Typography>
                        </Box>
                    ))
                }

            </Carousel>
        </Box>
    )
}

export default Slide;