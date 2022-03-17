import {Link} from "react-router-dom";

const Header = () =>{
    const openMenu =()=>{
        document.getElementById('mobileMenu').style.display = "flex";
        document.body.style.overflow = "hidden"
    }
    const closeMenu = () => {
        document.getElementById('mobileMenu').style.display = "none";
        document.body.style.overflow = "auto"
    }
    return (
        <header>
            <div className="container">
                <Link to="/" className="logo">minimø</Link>
                <nav className={"desktopMenu"}>
                    <ul>
                        <li><Link to="/lifestyle"> Lifestyle</Link></li>
                        <li><Link to="/photodiary">Photodiary</Link></li>
                        <li>Music</li>
                        <li>Travel</li>
                    </ul>
                </nav>
                <i onClick={openMenu} className={"icon menu"}></i>
                <div onClick={closeMenu} id={"mobileMenu"} className="modalOverlay">
                    <nav className={"mobileMenu"}>
                        <ul>
                            <li><Link to="/lifestyle"> Lifestyle</Link></li>
                            <li><Link to="/photodiary">Photodiary</Link></li>
                            <li>Music</li>
                            <li>Travel</li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}
export default Header