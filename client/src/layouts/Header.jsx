import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const Header = () => {
  return (
    <header>
        <div>
            <Link to='/'>
                <img src="" alt="" />
            </Link>
            <Nav/>
        </div>
    
    
    </header>
  );
};

export default Header;
