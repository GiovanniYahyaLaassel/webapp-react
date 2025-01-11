import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4">
        <div className="container flex justify-between items-center">
            <Link to='/'>
                <img src="http://localhost:3000/movies_cover/logo.png" alt="" />
            </Link>
            <Nav/>
        </div>
    
    
    </header>
  );
};

export default Header;
