import React, {memo} from 'react';
import {FaUserCircle} from "react-icons/fa";
import {HiBell} from "react-icons/hi";
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="">
                <div className="d-flex align-items-center">
                    <div className="d-flex justify-content-between align-items-center left">
                        <div className="img fw-bold">
                            LOGO
                        </div>
                        <div className="icon" style={{fontSize:'24px'}}>
                            <HiBell/>
                            <span className={'bell_count bg_success_color'}>1</span>
                        </div>
                    </div>
                    <div className="profile bg_blue_color right">
                        <div className="d-flex align-items-center">
                            <a href={'#'} className={'m-0 text_light_color'}>Личный кабинет</a>
                            <div className="icon_user d-flex align-items-center">
                                <FaUserCircle/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default memo(Header);