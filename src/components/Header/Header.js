import React from "react";
import "./Header.css";
import {logout} from "../../actions/auth";
import {useDispatch} from "react-redux";

const Header = () => {

    const dispatch = useDispatch();
    
    return(
        <div className="canteen_header">
            <div className="canteen_header-title">
                CSD Canteens Chennai
            </div>
            {/* <div>
                <input type="text" placeholder="Search" className="canteen_header-search" />
            </div> */}
            
        </div>
    )
}


export default Header;