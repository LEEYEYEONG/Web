// navbar.jsx
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to={'/'}>Ȩ �������� �̵�</Link>
            <Link to='/movies'>��ȭ ��� �������� �̵�</Link>
        </nav>
    );
};

export default Navbar;
