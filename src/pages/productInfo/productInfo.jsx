import React, {memo} from 'react';
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Product from "../../components/product/product";
import './productInfo.css'

const ProductInfo = () => {
    return (
        <>
            <Header/>
            <Sidebar children={<Product/>}/>
        </>
    );
};

export default memo(ProductInfo);