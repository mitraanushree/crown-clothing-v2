import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as WebLogo} from '../../assets/crown.svg';
import  './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <WebLogo className="logo"></WebLogo>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>Shop</Link>
                    <Link className="nav-link" to='/sign-in'>SignIn</Link>
                </div>
            </div>
            
        <Outlet/>
        </Fragment>
    )
}

export default Navigation;