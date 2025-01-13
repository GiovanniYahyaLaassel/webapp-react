import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const Header = () => {
  return (
    <header className="bg-primary text-white py-3">
        <div className="container">
          <div className="row align-items-center">
            {/* colonna logo */}
            <div className="d-flex justify-content-between align-items-center">
                <Link to='/' className="d-flex align-items-center">
                    <img 
                      src="http://localhost:3000/logo.png" 
                      alt="logo"
                      style={{height: '40px'}}
                    />
                </Link>
              {/* colonna per la nav */}
              <div className="col"> 
                <Nav/>
              </div>
            </div>
          </div>
        </div>
    
    
    </header>
  );
};

export default Header;
