import logo from './../assest/default-logo.png'
import './Nav_icon'
import Nav_icon from './Nav_icon';

const Navbar = () => {
    return (
        <div className="navbar">
            <a href='/'>
                <img src={logo}/>
            </a>
            <i className="fas fa-bars fa-2x"></i>
            <Nav_icon />
        </div>
    );
}

export default Navbar;