import { Box,InputBase,styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background:#fff;
    width:38%;
    border-radius:2px;
    margin-left:10px;
    display:flex;
`
const StyledInput = styled(InputBase)`
    width:100%;
    padding-left:20px;
`

const Search = () =>{
    return(
        <SearchContainer>
            <StyledInput name = 'search' placeholder="Search for Products, Brand and More"/>
            <Box style={{color:"blue", padding:"4px"}} > <SearchIcon /> </Box>
        </SearchContainer>
    );
}

export default Search;