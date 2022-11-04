import React, {memo, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination, Navigation} from "swiper";
import {useSelector} from "react-redux";
import {FiRefreshCw} from "react-icons/fi";
import {GiPresent} from "react-icons/gi";
import {AiOutlinePercentage} from "react-icons/ai";
import {BsChevronRight} from "react-icons/bs";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import './product.css'

const Product = () => {
    const navigate = useNavigate();
    const params = useParams();
    const {products} = useSelector(state => state.reducer);
    const [data, setData] = useState({})
    const [changeMothsCount, setChangeMothsCount] = useState(3)


    useEffect(() => {
        let isMounted = true;

        if (isMounted) {
            setData(products?.filter(d => d?.id === params?.id)[0])
        }

        return () => {
            isMounted = false;
        }
    }, [products])

    const changeMoths = (value, index) => {
        setChangeMothsCount(value)
        document.querySelectorAll('.btn-check').forEach((d, i) => {
            if (i !== index) {
                d.removeAttribute('checked')
                d.style.color = '#00C48C'
            } else {
                d.getAttribute('checked')
                d.style.color = 'white'
            }
        })
    }

    console.log(data)
    return (
        <div className={'productContainer'}>
            <div className="navigation mb-4" style={{fontSize: '12px', color: '#BBC2D0'}}>
                Заявки > <span className={''} style={{cursor: 'pointer'}}
                               onClick={() => navigate('/')}>Оформить заказ > </span><span
                className={'text_success_color'} style={{cursor: 'pointer'}}
                onClick={() => navigate(`/${params.id}/${params.name}`)}> {params.name}</span>
            </div>
            <div className="show">
                <h3 className={'mb-4 text_blue_color'} style={{fontSize: '22px'}}>{params.name}</h3>
                <div className="row">
                    <div className="col-lg-6 position-relative" style={{height: '380px'}}>
                        <div className="iconsCard">
                            {data.discount !== null &&
                                <span className={'cardIcon'}
                                      style={{background: '#F39DBD', color: '#E83274'}}><FiRefreshCw/></span>}
                            {
                                data.gift !== null &&
                                <span className={'cardIcon'}
                                      style={{background: '#A2AEDB', color: '#3855B3'}}><GiPresent/></span>
                            }
                            {
                                data.discountForPhone !== null &&
                                <span className={'cardIcon'} style={{
                                    background: '#FFBD95',
                                    color: '#FF6422'
                                }}><AiOutlinePercentage/></span>
                            }
                            {
                                data.discountForIphone !== null &&
                                <span className={'cardIcon'} style={{
                                    background: '#AAD9AC',
                                    color: '#4CAF50'
                                }}><AiOutlinePercentage/></span>
                            }
                        </div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {
                                data?.images?.map((item, index) => (
                                    <>
                                        <SwiperSlide key={index}>
                                            <div className="imgBox">
                                                <img style={{height: '100%', width: '100%'}} src={item} alt=""/>
                                            </div>
                                        </SwiperSlide>
                                    </>
                                ))
                            }

                        </Swiper>
                    </div>
                    <div className="col-lg-6">
                        <div className="boxPrice mb-3">
                            <span className={'d-block'} style={{color: '#BBC2D0'}}>Цена телефона</span>
                            <span className={'fw-bold '}>6 000 000 сум </span>
                        </div>
                        <div className="totalPrice">
                            <span style={{color: '#BBC2D0'}}>Общая цена (с наценкой)</span>
                            <div className="months d-flex justify-content-between">
                                <span className={'fw-bold'}>{data?.price} сум </span>
                                <span style={{color: '#BBC2D0'}}><span
                                    className={'m-0 px-2 py-1 bg_danger_color text_light_color fw-bold'}
                                    style={{borderRadius: '2px'}}>{Math.floor(parseInt(data?.price?.split(' ').join('')) * (changeMothsCount !== 3 ? 1.05 : 1) / changeMothsCount)} сум</span> x{changeMothsCount}</span>
                            </div>
                        </div>
                        <div className="btn-group w-100 mt-3" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"
                                   defaultChecked
                            />
                            <label className="btn btn-outline-success bg_light_color" onClick={() => changeMoths(3, 0)}
                                   style={{padding: '7px 0', borderColor: '#00C48C'}} htmlFor="btnradio1">3 мес</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2"
                                   autoComplete="off"/>
                            <label className="btn btn-outline-success bg_light_color" onClick={() => changeMoths(6, 1)}
                                   style={{padding: '7px 0', borderColor: '#00C48C'}} htmlFor="btnradio2">6 мес</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3"
                                   autoComplete="off"/>
                            <label className="btn btn-outline-success bg_light_color" onClick={() => changeMoths(12, 2)}
                                   style={{padding: '7px 0', borderColor: '#00C48C'}} htmlFor="btnradio3">12 мес</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio4"
                                   autoComplete="off"/>
                            <label className="btn btn-outline-success bg_light_color" onClick={() => changeMoths(24, 3)}
                                   style={{padding: '7px 0', borderColor: '#00C48C'}} htmlFor="btnradio4">24 мес</label>
                        </div>
                        <span className={'d-block w-100 text-center'}>Наценка: <span
                            className={'fw-bold'}>5%</span></span>
                        <div className="info mt-4">
                            <span style={{color: '#BBC2D0'}}>Общие характеристики</span>
                            <p className={'mt-4'}>Тип: моноблок (классический) <br/>
                                Стандарт: 2G, 3G, 4G (LTE), 5G<br/>
                                Операционная система: iOS 14
                            </p>
                            <div className="d-flex justify-content-between" style={{color: '#00C48C'}}>
                                <span style={{cursor: 'pointer'}}>Показать все</span>
                                <span style={{cursor: 'pointer'}}><BsChevronRight/></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-4">
                        <span className={'d-block'} style={{color: '#00C48C'}}>Акции</span>
                        {
                            data?.discount && <>
                                <div className="w-100 d-flex justify-content-between mt-4">
                                    <div className="d-flex ">
                                <span className={'cardIconList'}
                                      style={{
                                          background: '#F39DBD',
                                          color: '#E83274',
                                          height: '28px'
                                      }}><FiRefreshCw/></span>
                                        <div className="text ms-4">
                                            <span className={'d-block'}>{data?.discount?.name}</span>
                                            <span style={{color: '#BBC2D0'}}>- {data?.discount?.value} сум</span>
                                        </div>
                                    </div>
                                    <div className="input">
                                        <Checkbox
                                            icon={<Icon.FiCheck color="white" size={14}/>}
                                            name="my-input"
                                            checked={true}
                                            borderColor="#D7C629"
                                            style={{cursor: "pointer", background: '#00C48C', borderColor: '#00C48C'}}
                                        />
                                    </div>
                                </div>
                                <hr/>
                            </>
                        }
                        {
                            data?.gift && <>
                                <div className="w-100 d-flex justify-content-between mt-4">
                                    <div className="d-flex ">
                               <span className={'cardIconList'}
                                     style={{
                                         background: '#A2AEDB',
                                         color: '#3855B3',
                                         height: '28px'
                                     }}><GiPresent/></span>
                                        <div className="text ms-4">
                                            <span className={'d-block'}>Наушники в подарок</span>
                                            <span style={{color: '#BBC2D0'}}>{data?.gift?.name}</span>
                                        </div>
                                    </div>
                                    <div className="input">
                                        <Checkbox
                                            icon={<Icon.FiCheck color="white" size={14}/>}
                                            name="my-input"
                                            checked={true}
                                            borderColor="#D7C629"
                                            style={{cursor: "pointer", background: '#00C48C', borderColor: '#00C48C'}}
                                        />
                                    </div>
                                </div>
                                <hr/>
                            </>
                        }

                        {
                            data?.discountForPhone && <>
                                <div className="w-100 d-flex justify-content-between mt-4">
                                    <div className="d-flex ">
                               <span className={'cardIconList'} style={{
                                   background: '#FFBD95',
                                   color: '#FF6422',
                                   height: '28px'
                               }}><AiOutlinePercentage/></span>
                                        <div className="text ms-4">
                                            <span
                                                className={'d-block'}>{data?.discountForPhone?.name}</span>
                                            <span style={{color: '#BBC2D0'}}>{data?.discountForPhone?.value} 000 сум</span>
                                        </div>
                                    </div>
                                    <div className="input">
                                        <Checkbox
                                            icon={<Icon.FiCheck color="white" size={14}/>}
                                            name="my-input"
                                            checked={true}
                                            borderColor="#D7C629"
                                            style={{cursor: "pointer", background: '#00C48C', borderColor: '#00C48C'}}
                                        />
                                    </div>
                                </div>
                                <hr/>
                            </>
                        }
                        {
                            data?.discountForIphone&&<>
                                <div className="w-100 d-flex justify-content-between mt-4">
                                    <div className="d-flex ">
                               <span className={'cardIconList'} style={{
                                   background: '#AAD9AC',
                                   color: '#4CAF50',
                                   height: '28px'
                               }}><AiOutlinePercentage/></span>
                                        <div className="text ms-4">
                                    <span
                                        className={'d-block'}>{data?.discountForIphone?.name}</span>
                                            <span style={{color: '#BBC2D0'}}>IMEI: {data?.discountForIphone?.IMEI}</span>
                                        </div>
                                    </div>
                                    <div className="input">
                                        <Checkbox
                                            icon={<Icon.FiCheck color="white" size={14}/>}
                                            name="my-input"
                                            checked={true}
                                            borderColor="#D7C629"
                                            style={{cursor: "pointer", background: '#00C48C', borderColor: '#00C48C'}}
                                        />
                                    </div>
                                </div>
                            </>
                        }

                        <button type={'button'} className={'w-100 text-center addBasket'}>Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Product);