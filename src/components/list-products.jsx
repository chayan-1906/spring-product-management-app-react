import {useEffect, useState} from "react";
import {getProductsApi} from "../services/product-service.jsx";
import '../App.css';

export function ListProducts(props) {

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        getProductsApi().then(response => {
            const apiResponse = response.data
            setProducts(apiResponse)
            // console.log(apiResponse[0].name)
            // console.log(apiResponse[0].price)
            console.log('15: ' + products)
        })
    }

    const addProduct = () => {
        props.history.push('/addProduct')
    }

    useEffect(() => {
        getProducts()
    }, []);

    return <div>
        <div>
            <h1 className='text-center'>List of Products</h1>
            <button className='btn btn-success' onClick={addProduct}>Add Product</button>
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
}