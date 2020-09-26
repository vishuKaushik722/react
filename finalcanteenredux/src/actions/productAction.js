import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS } from '../constants/productConstants';
import axios from 'axios';
 

const listProductsMe = () => async (dispatch) => {
	try{
		dispatch({ type: PRODUCT_LIST_REQUEST });
		const {data} = await axios.get("/api/meproducts");
;
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
	}
	catch(error) {
		dispatch({ type: PRODUCT_LIST_FAILURE, payload: error.message });
		console.log(error);
	}
}

const listProductsCsit = () => async (dispatch) => {
	try{
		dispatch({ type: PRODUCT_LIST_REQUEST });
		const {data} = await axios.get("/api/csitproducts");
;
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
	}
	catch(error) {
		dispatch({ type: PRODUCT_LIST_FAILURE, payload: error.message });
		console.log(error);
	}
}

const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await axios.get('/api/meproducts/' + productId);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

 
export { listProductsMe, listProductsCsit, detailsProduct }