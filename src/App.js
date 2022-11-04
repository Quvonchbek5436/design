import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import ProductInfo from "./pages/productInfo/productInfo";
import "swiper/css/bundle";
import 'bootstrap/dist/css/bootstrap.min.css'
import './globalStyle/index.css'

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/:id/:name'} element={<ProductInfo/>}/>
            </Routes>
        </>
    );
}

export default App;
