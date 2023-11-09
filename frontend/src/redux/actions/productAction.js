import axios from "axios";
import * as actionType from '../constants/productConstant.js';
const url = 'http://localhost:8000';

export const getProducts = () => async(dispatch) => {
    try {
        const {data} = await axios.get(`${url}/products`);
        dispatch({type:actionType.GET_PRODUCTS_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:actionType.GET_PRODUCTS_FAIL,payload:error.message});
    }
}