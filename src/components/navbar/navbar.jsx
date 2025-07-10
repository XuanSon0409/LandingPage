import "./navbar.scss";
import Logo from "../../assets/logo.png";

const Navbar = () => {
    return <header className="navbar">
        <nav className="navbar_container wrapper">
            <a href="#" className="navbar_logo">
                <img src={Logo} alt="logo" />
            </a>

            <ul>
                <li><a href="#">product</a></li>
                <li><a href="#">compnay</a></li>
                <li><a href="#">pricing</a></li>
                <li><a href="#">blog</a></li>
            </ul>

            <div className="navbar__btns">
                < a href="#">Login</a>
                <a href="#" className="btn">
                    Register
                </a>
            </div>
        </nav>
    </header>
};

export default Navbar;