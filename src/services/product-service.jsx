import axios from "axios";

const BASE_API = 'http://localhost:8090/api/products';

export async function getProductsApi() {
    const response = await axios.get(BASE_API + '/getAll')
    console.log('getProductsApi: ' + response.data)
    return response
}

export async function addProductApi(product) {
    console.log('addProductApi: ' + product)
    const response = await axios.post(BASE_API + '/add', product)
    console.log('addProductApi: ' + response.data)
    return response
}

// export default new ProductService()