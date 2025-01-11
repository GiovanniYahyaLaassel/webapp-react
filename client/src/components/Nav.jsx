import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <nav className="text-white py-2"> 
            <div className="container">
                <ul className="d-flex list-unstyled m-0">
                    <li  className="me-4">
                        <NavLink to='/' className="text-white text-decoration-none">Home</NavLink>
                    </li>
                    <li className="me-4">
                        <NavLink to='about' className="text-white text-decoration-none">About</NavLink>
                    </li>
                    <li>
                        <NavLink to='contact' className="text-white text-decoration-none">Contact</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    )

}

export default Nav