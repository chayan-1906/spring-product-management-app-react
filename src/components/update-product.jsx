import {useEffect, useState} from "react";
import {getProductByIdApi, updateProductApi} from "../services/product-service.jsx";
import {useHistory, useParams} from "react-router-dom";

export function UpdateProduct() {
    // const [product, setProduct] = useState({});
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const params = useParams()

    let history = useHistory();

    useEffect(() => {
        getProductByIdApi(params.id).then(response => {
            const apiResponse = response.data
            console.log(apiResponse)
            setName(apiResponse.name || '')
            setPrice(apiResponse.price)
            setQuantity(apiResponse.quantity)
        })
    }, [])

    const handleName = (value) => {
        setName(value)
        // console.log(value)
    }

    const handlePrice = (value) => {
        setPrice(value)
        // console.log(value)
    }

    const handleQuantity = (value) => {
        setQuantity(value)
        // console.log(value)
    }

    const update = (e) => {
        let product = {name: name, price: price, quantity: quantity}
        // console.log(id)
        // console.log(name)
        // console.log(price)
        // console.log(quantity)
        console.log('product: ' + product)
        e.preventDefault()
        updateProduct(params.id, product)
        console.log(product)
    }

    const updateProduct = (id, product) => {
        updateProductApi(id, product).then(response => {
            const apiResponse = response.data
            console.log('15: ' + apiResponse)
        })
    }

    return <div className='container'>
        <h1>Update Product</h1>
        <div className='row'>
            <div className='text-center'>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Product Name</label>
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       placeholder="Enter Product Name"
                                       value={name}
                                       onChange={(e) => handleName(e.target.value)}
                                />
                                <br/>

                                <label htmlFor="price">Product Price</label>
                                <input type="number"
                                       className="form-control"
                                       id="price"
                                       placeholder="Enter Product Price"
                                       value={price}
                                       onChange={(e) => handlePrice(e.target.value)}
                                />
                                <br/>

                                <label htmlFor="quantity">Product Quantity</label>
                                <input type="number"
                                       className="form-control"
                                       id="quantity"
                                       placeholder="Enter Product Quantity"
                                       value={quantity}
                                       onChange={(e) => handleQuantity(e.target.value)}
                                />
                                <br/>
                            </div>

                            <button type="submit" className="btn btn-success" onClick={(e) => update(e)}>Update</button>
                            <button className='btn btn-danger' onClick={() => history.goBack()}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}