import {useState} from "react";
import {addProductApi} from "../services/product-service.jsx";

export function AddProduct() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    // const [product, setProduct] = useState({});

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

    const save = (e) => {
        let product = {name: name, price: price, quantity: quantity}
        // console.log(id)
        // console.log(name)
        // console.log(price)
        // console.log(quantity)
        addProduct(product)
        console.log(product)
    }

    const addProduct = (product) => {
        addProductApi(product).then(response => {
            const apiResponse = response.data
            console.log('15: ' + apiResponse)
        })
    }

    return <div className='container'>
        <h1>Add Product</h1>
        <div className='row'>
            <div className='text-center'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
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

                            <button type="submit" className="btn btn-success" onClick={(e) => save(e)}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}