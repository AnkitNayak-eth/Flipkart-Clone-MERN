
import  {AppBar,Toolbar,styled,Box,Typography} from '@mui/material';
import Search from './Search.jsx';
import HeaderButons from './HeaderButtons.jsx';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height:55px;
`
const StyledBox = styled(Box)`
    margin-left:12%;
    line-height:0;
`
const Styledsub = styled(Typography)`
    font-size:10px;
    font-style: italic;
`


const Header = () =>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return(
        <StyledHeader>
            <Toolbar style={{minHeight:"55px"}} >
                <StyledBox>
                    <img src={logoURL} alt="logo" style={{width:75}} />
                    <Box style={{ display: 'flex'}}>
                        <Styledsub>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                        </Styledsub>
                        <img src={subURL} alt="sublogo" style={{ width: 10, height: 10, marginLeft: 4 }}/>
                    </Box>
                </StyledBox>
                <Search/>
                <Box>
                    <HeaderButons/>
                </Box>
            </Toolbar>
        </StyledHeader>
    );
}
export default Header;