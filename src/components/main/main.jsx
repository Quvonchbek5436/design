import React, {memo, useRef, useState} from 'react';
import {CiSearch} from "react-icons/ci";
import {FiRefreshCw} from "react-icons/fi";
import {GiPresent} from "react-icons/gi";
import {AiOutlinePercentage} from "react-icons/ai";
import {useSelector} from "react-redux";
import _ from 'lodash'
import ReactPaginate from "react-paginate";
import {useNavigate} from "react-router-dom";
import './main.css'

const Main = () => {
    const navigate = useNavigate()
    const {products} = useSelector(state => state.reducer)
    const [data, setData] = useState(_.chunk(products, 10)[0]);
    const searchRef = useRef();


    const handlePageClick = (e) => {
        setData(_.chunk(products, 10)[e.selected]);
    };

    const searchData = () => {
        let arr = products?.filter((d)=> {
            if (d.name.toLowerCase().indexOf(searchRef?.current?.value.toLowerCase()) > -1) {
                return d
            }
        })
        setData(arr)
    }

    return (
        <div className={'mainContainer'}>
            <div className="navigation" style={{fontSize: '12px', color: '#BBC2D0'}}>
                Заявки > <span className={'text_success_color'} style={{cursor: 'pointer'}}
                               onClick={() => navigate('/')}>Оформить заказ</span>
            </div>
            <h3 className={'my-4 text_blue_color'} style={{fontSize: '22px'}}>Оформить заказ</h3>
            <div className="searchForm">
                <input type="text" placeholder={'Поиск по названию товара'} ref={searchRef}
                />
                <button onClick={() => searchData()}
                        className={'bg_success_color d-flex align-items-center justify-content-center'} type={'button'}>
                    <CiSearch/></button>
            </div>
            <h4 className={'mt-4 mb-3'} style={{fontSize: '16px'}}>Все товары ({products.length})</h4>

            <div className="d-flex  flex-wrap cardsBox">
                {
                    data?.map((item) => (
                        <div key={item.id} className="cardProduct  pb-3" style={{marginBottom:'30px'}}
                        >
                            <div className="cardImg d-flex justify-content-center position-relative py-1"
                                 onClick={() => navigate(`/${item.id}/${item.name}`)}>
                                <img
                                    src={item.images[0]}
                                    alt=""/>
                                <div className="iconsCard">
                                    {item.discount !== null &&
                                        <span className={'cardIcon'}
                                              style={{background: '#F39DBD', color: '#E83274'}}><FiRefreshCw/></span>}
                                    {
                                        item.gift !== null &&
                                        <span className={'cardIcon'}
                                              style={{background: '#A2AEDB', color: '#3855B3'}}><GiPresent/></span>
                                    }
                                    {
                                        item.discountForPhone !== null &&
                                        <span className={'cardIcon'} style={{
                                            background: '#FFBD95',
                                            color: '#FF6422'
                                        }}><AiOutlinePercentage/></span>
                                    }
                                    {
                                        item.discountForIphone !== null &&
                                        <span className={'cardIcon'} style={{
                                            background: '#AAD9AC',
                                            color: '#4CAF50'
                                        }}><AiOutlinePercentage/></span>
                                    }
                                </div>
                            </div>
                            <p className={'mb-0 elleps '} style={{fontSize: '15px'}}>{item.name}</p>
                            <p className={'mb-1 '} style={{fontSize: '15px'}}>{item.price} сум </p>
                            <p className={'m-0 '} style={{fontSize: '13px', color: '#BBC2D0'}}><span
                                className={'m-0 px-2 py-1 bg_danger_color text_light_color'}>от {Math.floor(parseInt(item?.price?.split(' ').join('')) / 24)} сум</span> x24
                            </p>

                        </div>
                    ))
                }

            </div>
            {
                data.length<=10&&
                <div className="d-flex align-items-center position-relative mt-4">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        pageCount={Math.ceil(products.length / 10)}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        className="paginationUL"
                        activeClassName="active"
                    />
                </div>
            }
        </div>
    );
};

export default memo(Main);