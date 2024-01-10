import { CiMobile1 } from "react-icons/ci"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import { IoMdClose } from "react-icons/io"
import { CiHeart } from "react-icons/ci"
import { CgProfile } from "react-icons/cg"
import { IoMenu } from "react-icons/io5"
import { TbBrandBooking } from "react-icons/tb"
import { FaMedal } from "react-icons/fa"
import { FaUserGroup } from "react-icons/fa6"
import { FaHandshake } from "react-icons/fa"
import { FaListCheck } from "react-icons/fa6"
import { LuLogOut } from "react-icons/lu"
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import "./index.css"

const Header = ()=>(
    <nav className = "navbar">
        <div className = "header-large">   
            <h1 className = "amber-nav-heading">amber</h1>
            <ul className="nav-large-items-container">
                <li className="nav-large-list-item">
                    <CiMobile1 color = "#ffffff" size = "20px"/>
                    <p className="nav-large-list-item-text">Download App</p>
                </li>
                <li className="nav-large-list-item">
                    <TfiHeadphoneAlt color = "#ffffff" size = "20px"/>
                    <p className="nav-large-list-item-text">Support</p>
                </li>
                <li className="nav-large-list-item">
                    <CiHeart color = "#ffffff" size = "20px"/>
                    <p className="nav-large-list-item-text">Shortlist</p>
                </li>
                <li className="nav-large-list-item-menu">
                    <button type = "button" className="nav-large-menu-button">
                        <CgProfile color = "#ffffff" size = "25px" />
                        <IoMenu color = "#ffffff" size="25px" />
                    </button>
                </li>
            </ul>
            </div>
        <div className="header-medium">
            <h1 className="amber-heading">Amber</h1>
            <Popup
                modal
                trigger={
                <button type="button" className="trigger-button">
                    <IoMenu size = "25px" color = "black" />
                </button>
                }
            >
                {close => (
                <>
                    <div className="popup-container">
                        <div className="popup-top-container">
                            <h1 className="menu-heading">Menu</h1>
                            <button onClick = {()=>close()} type = "button" className="close-button" >
                                <IoMdClose color = "black" size = "22px" />
                            </button>
                        </div>
                        <hr/>
                        <div className="popup-mini-container">
                            <TfiHeadphoneAlt color = "black" size = "22px" />
                            <p className="popup-container-text">Support</p>
                        </div>
                        <div className="popup-mini-container">
                            <CiHeart color = "black" size = "22px" />
                            <p className="popup-container-text">Shortlist</p>
                        </div>
                        <hr/>
                        <div className="popup-mini-container">
                            <CgProfile color = "black" size = "22px" />
                            <p className="popup-container-text">My profile</p>
                        </div>
                        <div className="popup-mini-container">
                            <TbBrandBooking color = "black" size = "22px" />
                            <p className="popup-container-text">Bookings</p>
                        </div>
                        <hr/>
                        <div className="popup-mini-container">
                            <FaUserGroup color = "black" size = "22px" />
                            <p className="popup-container-text">Group Booking</p>
                        </div>
                        <div className="popup-mini-container">
                            <FaMedal color = "black" size = "22px" />
                            <p className="popup-container-text">Refer a friend</p>
                        </div>
                        <div className="popup-mini-container">
                            <FaHandshake color = "black" size = "22px" />
                            <p className="popup-container-text">Partner with us</p>
                        </div>
                        <div className="popup-mini-container">
                            <FaListCheck color = "black" size = "22px" />
                            <p className="popup-container-text">List with us</p>
                        </div>
                        <div className="popup-mini-container">
                            <LuLogOut color = "black" size = "22px" />
                            <p className="popup-container-text">Logout</p>
                        </div>
                    </div>
                </>
                )}
            </Popup>
        </div>    
        
        
    </nav>
)

export default Header