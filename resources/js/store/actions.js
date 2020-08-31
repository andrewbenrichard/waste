import axios from 'axios';
export const getProducts = ({commit}) => {
    axios.get("/api/sc_front/product_listings")
        .then(response => {
            commit('SET_PRODUCTS', response.data)
        });
} 