import {pageLinks, socialLinks} from "../data";
// import PageLinks from "./PageLinks";
import logo from "../images/logo.svg";
import SocialLink from "./SocialLink";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads"/>
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <ul className="nav-links" id="nav-links">
                    {pageLinks.map((link) => (
                        <li key={link.id}>
                          <a href={link.href} className="nav-link">
                            {link.text}
                          </a>
                        </li>
                      ))}
                </ul>
                {/*<pageLinks parentClass='nav-links' itemClass='nav-link' />*/}

                <ul className="nav-icons">
                    {socialLinks.map(link => () => {
                        <li key={link.id}>
                            <a href={link.href} target="_blank" rel='noreferrer' className="nav-icon">
                                <i className={link.icon}></i>
                            </a>
                        </li>
                    })}
                    {socialLinks.map((link) => {
                        // return <SocialLink {...link} key={link.id} itemClass='nav-icon' />
                        return (
                            <li key={link.id}>
                                <a href={link.href} target="_blank" className="nav-icon">
                                    <i className={link.icon}></i>
                                </a>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </nav>

    );
};

export default Navbar;
