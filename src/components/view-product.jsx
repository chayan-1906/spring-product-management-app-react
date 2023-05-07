import {useEffect, useState} from "react";
import {getProductByIdApi} from "../services/product-service.jsx";
import {useHistory, useParams} from "react-router-dom";

export const ViewProduct = () => {
    const params = useParams()
    const [product, setProduct] = useState({});

    let history = useHistory();

    useEffect(() => {
        getProductByIdApi(params.id).then(response => {
            const apiResponse = response.data
            setProduct(apiResponse)
        })
    }, [])

    return <div className='container'>
        <h1 style={{textAlign: 'center'}}>View Product</h1>
        <div className='card'>
            <div className='card-body'>
                <div className='row'>
                    <label>Product Id</label>
                    <div>{product.id}</div>
                </div>
                <div className='row'>
                    <label>Product Name</label>
                    <div>{product.name}</div>
                </div>
                <div className='row'>
                    <label>Product Quantity</label>
                    <div>{product.quantity}</div>
                </div>
            </div>
        </div>
        <button className='btn btn-danger'
                onClick={() => history.goBack()}
                style={{margin: '20px 0px 30px 0px'}}>Cancel
        </button>
    </div>
}