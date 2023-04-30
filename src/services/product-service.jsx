import axios from "axios";

const BASE_API = 'http://localhost:8090/api/products';

/*class ProductService {

    getProducts = async () => {
        return await axios.get(BASE_API + '/getAll')
    }
}*/
export default async function getProductsApi() {
    const response = await axios.get(BASE_API + '/getAll')
    console.log('getProductsApi: ' + response.data)
    return response
}

// export default new ProductService()