import React, {memo} from 'react';
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Main from "../../components/main/main";

const Home = () => {
    return (
        <>
            <Header/>
            <Sidebar children={<Main/>}/>
        </>
    );
};

export default memo(Home);