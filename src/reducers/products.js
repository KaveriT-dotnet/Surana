/* eslint-disable import/no-anonymous-default-export */
import {GET_PRODUCTS} from "../actions/constants";


const initalState = {
    products:null
}

export default function(state=initalState,action) {
    const {type,payload} = action;
    switch(type) {
        case GET_PRODUCTS:
            let products = [];
            payload && payload.length > 0 && payload.map((data) => {
                const {productId,categoryName,subCategoryName,productName} = data;
                products.push({
                    productId,
                    categoryName,
                    subCategoryName,
                    productName,
                    id:productId
                })
            })
            return {products,allproducts:payload}
        default:
            return state
    }
}