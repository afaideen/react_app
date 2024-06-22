import {socialLinks} from "../data";
import SocialLink from "./SocialLink";
import PageLinks from "./PageLinks";


const Footer = () => {
    return (<footer className="section footer">
            <PageLinks parentClass='footer-links' itemClass='footer-link' />
        {/*<ul className="footer-links">*/}
        {/*    <li>*/}
        {/*        <a href="#home" className="footer-link">home</a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*        <a href="#about" className="footer-link">about</a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*        <a href="#services" className="footer-link">services</a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*        <a href="#featured" className="footer-link">featured</a>*/}
        {/*    </li>*/}
        {/*</ul>*/}
        <ul className="footer-icons">
            {socialLinks.map((link) => {
                return <SocialLink {...link} key={link.id} itemClass='nav-icon' />
                // return (
                //     <li key={link.id}>
                //         <a href={link.href} target="_blank" className="nav-icon">
                //             <i className={link.icon}></i>
                //         </a>
                //     </li>
                // )
            })}
            {/*<li>*/}
            {/*    <a href="https://www.twitter.com" target="_blank" className="footer-icon"*/}
            {/*    ><i className="fab fa-facebook"></i*/}
            {/*    ></a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <a href="https://www.twitter.com" target="_blank" className="footer-icon"*/}
            {/*    ><i className="fab fa-twitter"></i*/}
            {/*    ></a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <a href="https://www.twitter.com" target="_blank" className="footer-icon"*/}
            {/*    ><i className="fab fa-squarespace"></i*/}
            {/*    ></a>*/}
            {/*</li>*/}
        </ul>
        <p className="copyright">
            copyright &copy; Backroads travel tours company
            <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
    </footer>
    );
};

export default Footer;
