import React, {memo, useRef} from 'react';
import {VscHome} from "react-icons/vsc";
import {CgFileDocument} from "react-icons/cg";
import {RiShoppingBagFill} from "react-icons/ri";
import {FaRegStar} from "react-icons/fa";
import {SlBasket} from "react-icons/sl";
import './sidebar.css'

const menu = [
    {
        name: 'Главная',
        icon: <VscHome/>,
        className: ""
    },
    {
        name: 'Заказы',
        icon: <CgFileDocument/>,
        className: ""
    },
    {
        name: 'Товары',
        icon: <RiShoppingBagFill/>,
        className: ""
    },
    {
        name: 'Отзывы',
        icon: <FaRegStar/>,
        className: ""
    },
    {
        name: 'Оформить заказ',
        icon: <SlBasket/>,
        className: "activeItem"
    },

]

const Sidebar = ({children}) => {
    const menuRef = useRef([])

    const setActiveClass = (index) => {
        menuRef.current.forEach((d, i) => {
            d.classList.remove('activeItem');
        })
        menuRef.current[index].classList.add('activeItem')
    }

    return (
        <>
            <div className="d-flex w-100">
                <div className={'sidebar bg_blue_color'}>
                    <ul>
                        {
                            menu?.map((item, index) => (
                                <li key={index} ref={element => menuRef.current[index] = element}
                                    className={`navbarItem ${item.className}`} onClick={() => setActiveClass(index)}>
                                    <a href="#"
                                       className={'d-flex'}>{item.icon}<span>{item.name}</span></a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={'main overflow-auto'}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default memo(Sidebar);