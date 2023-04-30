import {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header} from "./components/header.jsx";
import {ListProducts} from "./components/list-products.jsx";
import {Footer} from "./components/footer.jsx";

export default function App() {
    const [count, setCount] = useState(0)

    return <div>
        <Header/>
        <div className="container"><ListProducts/></div>
        <Footer/>
    </div>
}
