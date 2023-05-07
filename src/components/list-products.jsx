import {useEffect, useState} from "react";
import {deleteProductApi, getProductsApi} from "../services/product-service.jsx";
import '../App.css';
import {Link} from "react-router-dom";

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

    const deleteProductById = (id) => {
        deleteProductApi(id).then(response => {
            const apiResponse = response.data
            setProducts(products.filter(product => id !== product.id))
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
            <button className='btn btn-success text-center'
                    onClick={addProduct}
                    style={{margin: '20px 0px 30px 0px'}}>Add Product
            </button>
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => {
                    return <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        {/* view */}
                        <td>
                            {/*<button className='btn btn-info' onClick={() => viewProductById(product.id)}>View</button>*/}
                            <Link to={{pathname: `/viewProduct/${product.id}`,}} className='btn btn-info'>View</Link>
                        </td>
                        {/* update */}
                        <td>
                            {/*<button className='btn btn-info' onClick={() => viewProductById(product.id)}>View</button>*/}
                            <Link to={{pathname: `/updateProduct/${product.id}`,}}
                                  className='btn btn-light'>Update</Link>
                        </td>
                        {/* delete */}
                        <td>
                            <button className='btn btn-danger' onClick={() => deleteProductById(product.id)}>Delete
                            </button>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    </div>
}