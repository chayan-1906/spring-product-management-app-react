import {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header} from "./components/header.jsx";
import {ListProducts} from "./components/list-products.jsx";
import {Footer} from "./components/footer.jsx";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AddProduct} from "./components/add-product.jsx";
import {ViewProduct} from "./components/view-product.jsx";
import {UpdateProduct} from "./components/update-product.jsx";

export default function App() {
    const [count, setCount] = useState(0)

    return <div>
        <Router>
            <div className='container'>
                <Header/>
                <Switch>
                    <div className="container">
                        <Route exact path='/' component={ListProducts}/>
                        <Route exact path='/productsList' component={ListProducts}/>
                        <Route exact path='/addProduct/' component={AddProduct}/>
                        <Route exact path='/viewProduct/:id' component={ViewProduct}/>
                        <Route exact path='/updateProduct/:id' component={UpdateProduct}/>
                    </div>
                </Switch>
                <Footer/>
            </div>
        </Router>
    </div>
}