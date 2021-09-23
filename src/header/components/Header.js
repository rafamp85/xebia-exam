import Search from "./Search";
import { PropTypes } from 'prop-types';


const Header = ({title}) => {
    return ( 
        <nav className="nav-wrapper light-blue darken-2">
            <a href="#!" className="brand-logo">{title}</a>
            
            <ul className="right hide-on-med-and-down">
                <Search />
            </ul>
        </nav>
     );
}
 
export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired
}